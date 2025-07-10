import React from 'react';

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full'>
      {/* <BubbleField/>
        <Navbar/> */}
      {children}
      {/* <Footer/> */}
    </div>
  );
}
