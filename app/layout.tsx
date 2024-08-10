import type { Metadata } from "next";
import { Inter  as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Paninv Pantry Tracker",
  description: "Paninv is a pantry management tracker/system designed to be effortless, scalable, and easy to use.",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
          {children}
      </body>
    </html>
  );
}
