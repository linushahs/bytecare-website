import React from "react";
import { cn } from "@/utils";
import { HEADING_TYPES, Heading } from "./ui/heading";
import Lights from "./ui/lights";
import Particles from "./ui/particles";

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroWrapper({ children, className }: HeroElementProps) {
  return (
    <section className={cn("flex flex-col items-center", className)}>
      {/* Particles for (Table and desktop sizes) ============================= */}
      <Particles
        className="hidden md:block absolute inset-0 opacity-60 h-[500px] w-screen pointer-events-none"
        quantity={140}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {/* Particles for (Mobile sizes) ============================= */}
      <div className="md:hidden absolute w-full h-[550px] pointer-events-none">
        <Particles
          className="absolute inset-0 opacity-50"
          quantity={80}
          ease={80}
          color={"#ffffff"}
          refresh
        />
      </div>

      <Lights />

      {children}
    </section>
  );
}

export function HeroContent({ children, className }: HeroElementProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center max-w-[900px]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function HeroHeading({ children, className }: HeroElementProps) {
  return (
    <Heading
      variant={HEADING_TYPES.headline03}
      className={cn(
        "text-transparent text-center bg-textRadialGradient bg-clip-text",
        className
      )}
    >
      {children}
    </Heading>
  );
}

export function HeroParagraph({ children, className }: HeroElementProps) {
  return (
    <p
      className={cn(
        "text-textSecondary text-lg w-[90%] sm:w-[60%] text-center",
        className
      )}
    >
      {children}
    </p>
  );
}

export function HeroFooter({ className, children }: HeroElementProps) {
  return (
    <div className={cn("flex items-center gap-6", className)}>{children}</div>
  );
}
