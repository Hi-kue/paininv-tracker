import type { Metadata } from "next";
import  { getServerSession } from "next-auth";
import { Inter  as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { authOptions } from "./pages/api/auth/[...nextauth]";
import SessionProvider from "./sessionProvider";
import Login from "./(auth)/login/page";
import Home from "./page";

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
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body 
        className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
          <SessionProvider session={session}>
            {!session ? (
              <Login/>
            ): (
              <Home/>
            )}
          </SessionProvider>
      </body>
    </html>
  );
}
