import React from "react";
import { ThreeColumnLayout } from "./ui/column-layout";
import { cn } from "@/utils";

interface PlainCardListProps {
  children: React.ReactNode;
  className?: string;
}

export default function PlainCardList({
  children,
  className,
}: PlainCardListProps) {
  return (
    <ThreeColumnLayout
      as="ul"
      className={cn("gap-10 md:gap-x-16 md:gap-y-[86px]", className)}
    >
      {children}
    </ThreeColumnLayout>
  );
}
