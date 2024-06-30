import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crime Reporting System",
  description: "A Crime Reporting System built by Samson Akinbo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
