import { cn } from "@/utils";
import React from "react";

function Badge({ title, className }: { title: string; className?: string }) {
  return (
    <span
      className={cn(
        "bg-fill-tertiary rounded-sm font-medium text-textPrimary py-2 px-2.5 uppercase text-sm  transition-colors ease-in-out duration-300 tracking-wide",
        className
      )}
    >
      {title}
    </span>
  );
}

export default Badge;
