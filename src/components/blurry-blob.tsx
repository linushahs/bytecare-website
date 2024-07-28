import { cn } from "@/utils";
import React from "react";

interface BlurryBlobProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function BlurryBlob({ className, ...props }: BlurryBlobProps) {
  return (
    <div
      className={cn(
        "absolute opacity-65 pointer-events-none rounded-full blur-[100px]",
        className
      )}
      style={{
        background:
          "radial-gradient(45% 100% at 100% 50%, rgba(57, 185, 141, 0.00) 41.58%, rgba(57, 185, 141, 0.20) 45.32%)",
      }}
      {...props}
    />
  );
}
