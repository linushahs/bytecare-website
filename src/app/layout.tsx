import GlobalModal from "@/components/ui/modal";
import Navbar from "@/layouts/navbar";
import { aeonik } from "@/utils/fonts";
import type { Metadata } from "next";
import "./globals.css";

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
      <body className={aeonik.className + " relative"}>
        <Navbar />
        {children}

        <GlobalModal />
      </body>
    </html>
  );
}
