
"use client"
import "./globals.css";
import LayoutWrapper from './components/layoutwrapper';
import { Toaster } from "sonner";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-screen flex flex-col">
        <LayoutWrapper>
        {children}
        <Toaster richColors position="top-right"/>
        </LayoutWrapper>
      </body>
    </html>
  );
}
