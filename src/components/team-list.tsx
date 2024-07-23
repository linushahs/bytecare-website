import React from "react";
import { FourColumnLayout } from "./ui/column-layout";

export default function TeamList({ children }: {children: React.ReactNode}) {
  return (
    <FourColumnLayout className="grid-cols-2">{children}</FourColumnLayout>
  );
}
