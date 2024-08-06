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
        "text-white font-medium tracking-wide text-md leading-6",
        className
      )}
      {...props}
    />
  );
}
