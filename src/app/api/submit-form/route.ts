// src/app/api/submit-form/route.ts

import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { GaxiosError } from "gaxios"; // Import GaxiosError

// No need for GoogleApiErrorResponse interface if you're disabling the rule

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { formType, ...formData } = body;
    console.log(formType, formData, 13);

    const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

    if (!SPREADSHEET_ID) {
      throw new Error("GOOGLE_SHEET_ID is not defined in environment variables.");
    }

    let SHEET_NAME: string;
    let values: (string | number)[][];

    const timestamp = new Date().toISOString();

    switch (formType) {
      case "demo":
        const { studentName, fatherName, email, phone, address } = formData;
        if (!studentName || !fatherName || !email || !phone || !address) {
          return NextResponse.json({ error: "Missing required fields for demo form" }, { status: 400 });
        }
        SHEET_NAME = "DemoBooking";
        values = [
          [
            studentName,
            fatherName,
            email,
            phone,
            address,
            timestamp,
          ],
        ];
        break;

      case "contact":
        const { name, phone: contactPhone, email: contactEmail, message } = formData;
        if (!name || !contactPhone || !contactEmail || !message) {
          return NextResponse.json({ error: "Missing required fields for contact form" }, { status: 400 });
        }
        SHEET_NAME = "ContactMessages";
        values = [
          [
            name,
            contactPhone,
            contactEmail,
            message,
            timestamp,
          ],
        ];
        break;

      default:
        return NextResponse.json({ error: "Invalid form type provided" }, { status: 400 });
    }

    const credentials = {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    };

    if (!credentials.client_email || !credentials.private_key) {
      throw new Error("Google API credentials (client_email or private_key) are missing.");
    }

    const auth = new google.auth.JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    let range: string;
    if (formType === "demo") {
      range = `${SHEET_NAME}!A:F`;
    } else if (formType === "contact") {
      range = `${SHEET_NAME}!A:E`;
    } else {
      return NextResponse.json({ error: "Could not determine sheet range" }, { status: 500});
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: range,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values,
      },
    });

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);

    // Disable ESLint rule for the next line
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (error instanceof GaxiosError && error.response && error.response.data && (error.response.data as any).error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const apiError = (error.response.data as any).error; // Cast to any to access 'error' property safely
        return NextResponse.json(
            { error: `Google API Error: ${apiError.message}` },
            { status: error.response.status || 500 }
        );
    }
    // Generic error handling for other types of errors
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}