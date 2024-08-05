import GlobalModal from "@/components/ui/modal";
import Navbar from "@/layouts/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ByteCare",
  description: "Best company in the nepal.",
};

export default function PagesRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}

        <GlobalModal />
      </body>
    </html>
  );
}
