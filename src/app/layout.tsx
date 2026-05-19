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
      <body className="min-h-screen flex flex-col">
        <div className="flex-1 min-h-screen">
        <Navbar />
        <main >
        {children}
        </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
