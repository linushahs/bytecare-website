import React from "react";
import { cn } from "@/utils";
import { HEADING_TYPES, Heading } from "./ui/heading";
import Lights from "./lights";
import Particles from "./particles";

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroWrapper({ children, className }: HeroElementProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      {/* Particles for (Table and desktop sizes) ============================= */}
      <Particles
        className="hidden md:block absolute inset-0 opacity-60 h-[500px] w-screen"
        quantity={140}
        ease={50}
        color={"#ffffff"}
        refresh
      />

      {/* Particles for (Mobile sizes) ============================= */}
      <div className="md:hidden absolute w-full h-[550px]">
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
    </div>
  );
}

export function HeroContent({ children, className }: HeroElementProps) {
  return <div className={cn(" max-w-[900px]", className)}>{children}</div>;
}

export function HeroHeading({ children, className }: HeroElementProps) {
  return (
    <Heading
      variant={HEADING_TYPES.headline02}
      className={cn(
        "text-transparent text-center bg-gradientHeading bg-clip-text",
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
        "text-textSecondary text-lg w-[90%] sm:w-3/4 text-center",
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
