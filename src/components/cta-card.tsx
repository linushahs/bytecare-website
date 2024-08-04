import lightsImageUrl from "@/assets/lights.png";
import Image from "next/image";
import React from "react";
import Container from "./ui/container";

function CtaCard({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <div className="relative flex flex-col items-center gap-8 bg-gradientFillDefault rounded-xl py-12 sm:py-20 overflow-hidden mb-8 sm:mb-16">
        <Image
          src="/logo-short.png"
          alt="Logo Small"
          width={80}
          height={80}
          className="size-[80px]"
        />

        {/* Stars ================================== */}
        <div className="absolute transition-opacity duration-300 pointer-events-none ease-in-out top-0 size-full">
          <Image
            src="/stars.png"
            alt="stars"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lights ======================================= */}
        <div className="absolute transition-all pointer-events-none duration-300 ease-in-out inset-0 w-full h-full">
          <Image
            src={lightsImageUrl}
            alt="lights"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {children}
      </div>
    </Container>
  );
}

export default CtaCard;
