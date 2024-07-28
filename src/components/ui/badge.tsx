import { cn } from "@/utils";
import React from "react";

function Badge({ title, className }: { title: string; className?: string }) {
  return (
    <span
      className={cn(
        "bg-fill-tertiary rounded-sm font-medium text-textPrimary py-1.5 px-2.5 uppercase text-sm xl:text-[0.9rem]",
        className
      )}
    >
      {title}
    </span>
  );
}

export default Badge;
