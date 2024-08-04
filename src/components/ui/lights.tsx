import lightsImageUrl from "@/assets/lights.png";
import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

function Lights({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute z-[20] left-1/2 -translate-x-1/2 top-0 w-full h-[400px] pointer-events-none",
        className
      )}
    >
      <div className="bg-radialGradient absolute inset-0 size-full"></div>

      <Image
        src={lightsImageUrl}
        alt="lights"
        width={800}
        height={800}
        className="w-full h-full z-[30]"
      />
    </div>
  );
}

export default Lights;
