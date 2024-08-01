import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import LoadingModal from "@/components/LoadingModal";

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

        <main className="bg-[url('https://res.cloudinary.com/dypvfvu6i/image/upload/v1722530496/report-crime/IMG_0758_cq9kjm.jpg')] bg-cover bg-center bg-no-repeat">{children}</main>
        
        <LoadingModal />
        <Toaster />
      </body>
    </html>
  );
}
