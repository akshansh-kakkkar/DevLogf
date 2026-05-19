import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-screen bg-[#F7F9FB] flex flex-col">

        <Navbar />
        <main className="flex-1">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
