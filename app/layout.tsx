import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brigdr - Your UK Student Journey Starts Here",
  description: "Navigate your UK student life with ease. Get everything you need—SIM cards, bank accounts, housing, insurance, and visa support—all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${questrial.variable} antialiased`}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
