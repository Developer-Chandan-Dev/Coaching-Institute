"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";

export default function DemoForm() {
  const [studentName, setStudentName] = React.useState("");
  const [fatherName, setFatherName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  // const [submitting, setSubmitting] = React.useState(false);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     console.log("Form submitted with:", {
  //       studentName,
  //       fatherName,
  //       email,
  //       phone,
  //       address,
  //     });
  //     const res = await fetch(
  //       `${process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!}?sheet=DemoBooking`,
  //       {
  //         method: "POST",
  //         body: JSON.stringify({
  //           studentName,
  //           fatherName,
  //           email,
  //           phone,
  //           address,
  //         }),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const text = await res.text();
  //     console.log(text);
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setSubmitting(true);
    alert("Work is in Progress.");
    // try {
    //   const res = await fetch("/api/submit-form", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       studentName,
    //       fatherName,
    //       email,
    //       phone,
    //       address,
    //     }),
    //   });

    //   const data = await res.json();

    //   if (res.ok) {
    //     console.log(data.message);
    //     // Reset form fields
    //     setStudentName("");
    //     setFatherName("");
    //     setEmail("");
    //     setPhone("");
    //     setAddress("");
    //   } else {
    //     console.error("Error:", data.error);
    //   }
    //   setSubmitting(false);
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md bg-white py-4 p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Book a demo
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Send a demo message to us.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="studentname">Student name</Label>
            <Input
              id="studentname"
              placeholder="John Doe"
              type="text"
              required
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="fathername">Father&apos;s name</Label>
            <Input
              id="fathername"
              placeholder="Brian Yu"
              type="text"
              required
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
            />
          </LabelInputContainer>
        </div>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="exmaple@gmail.com"
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="phoneno">Phone Number</Label>
            <Input
              id="phoneno"
              placeholder="+91 0123456789"
              type="text"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="address">Address</Label>
          <Textarea
            id="address"
            placeholder="address..."
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          {/* {submitting ? "Submitting..." : "Send →"} */}
          Send →
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
