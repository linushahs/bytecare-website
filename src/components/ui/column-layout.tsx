import { cn } from "@/utils";
import React from "react";

interface ColumnLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  className?: string;
}

export function ThreeColumnLayout({
  as: Tag = "div",
  className,
  ...props
}: ColumnLayoutProps) {
  return (
    <Tag
      className={cn(
        "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
      {...props}
    />
  );
}

export function FourColumnLayout({
  as: Tag = "div",
  className,
  ...props
}: ColumnLayoutProps) {
  return (
    <Tag
      className={cn(
        "grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className
      )}
      {...props}
    />
  );
}
