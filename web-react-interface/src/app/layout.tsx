"use client";

import React from "react";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
        {children}
      </body>
    </html>
  );
}
