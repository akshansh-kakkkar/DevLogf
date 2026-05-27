
"use client"
import "./globals.css";
import LayoutWrapper from './components/layoutwrapper';
import { Toaster } from "sonner";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", "font-sans", geist.variable)}>
      <body className="min-h-screen pt-24 md:pt-10 flex flex-col">
        <LayoutWrapper>
        {children}
        <Toaster richColors position="top-right"/>
        </LayoutWrapper>
      </body>
    </html>
  );
}
