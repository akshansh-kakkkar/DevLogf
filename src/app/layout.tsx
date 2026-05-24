
"use client"
import "./globals.css";
import LayoutWrapper from './components/layoutwrapper';
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
        </LayoutWrapper>
      </body>
    </html>
  );
}
