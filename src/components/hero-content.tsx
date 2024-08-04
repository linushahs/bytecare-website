import { cn } from "@/utils";
import React from "react";
import { HEADING_TYPES, Heading } from "./ui/heading";

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
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

type HeroHeadingProps = HeroElementProps & {
  variant?: string;
};

export function HeroHeading({
  children,
  className,
  variant = HEADING_TYPES.headline03,
}: HeroHeadingProps) {
  return (
    <Heading
      variant={variant}
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
        "text-textSecondary text-lg w-[90%] sm:w-[50%] text-center",
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
