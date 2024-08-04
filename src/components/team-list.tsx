import React from "react";
import { FourColumnLayout } from "./ui/column-layout";

export default function TeamList({ children }: { children: React.ReactNode }) {
  return (
    <FourColumnLayout className="grid-cols-2 gap-x-10 sm:gap-x-4">
      {children}
    </FourColumnLayout>
  );
}
