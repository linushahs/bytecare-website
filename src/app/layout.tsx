import type { Metadata } from "next";
import "./globals.css";
import { aeonik } from "@/utils/fonts";
import Navbar from "@/layouts/navbar";

export const metadata: Metadata = {
  title: "ByteCare",
  description: "Best company in the nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={aeonik.className}>
        <main className="relative z-0 flex min-h-screen w-full flex-col bg-background">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
