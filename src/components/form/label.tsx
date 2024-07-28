import React from "react";
import { cn } from "@/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  className?: string;
}

export function Label({ htmlFor, className, ...props }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "text-white font-medium text-base leading-6 font-sans",
        className
      )}
      {...props}
    />
  );
}
