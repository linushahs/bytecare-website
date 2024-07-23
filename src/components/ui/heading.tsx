import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import React from "react";

const HEADING_TYPES = {
  headline02: "headline02",
  headline03: "headline03",
  headline04: "headline04",
  heading: "heading",
  subtitle01: "subtitle01",
};

const headingVariants = cva("font-heading", {
  variants: {
    variant: {
      [HEADING_TYPES.headline02]:
        "tracking-[0.5px] text-5xl capitalize text-textPrimary font-bold !leading-[135%]",
      [HEADING_TYPES.headline03]:
        "lg:text-5xl  sm:text-4xl text-3xl !leading-[125%] font-bold text-white",
      [HEADING_TYPES.headline04]:
        "text-xl md:text-2xl lg:text-3xl !leading-[120%] font-bold text-white",
      [HEADING_TYPES.heading]:
        "md:text-[38px] text-xl font-bold   !leading-[120%] text-white",
      [HEADING_TYPES.subtitle01]: "text-lg leading-7 font-medium text-white",
    },
  },
  defaultVariants: {
    variant: HEADING_TYPES.headline02,
  },
});

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: React.ElementType;
  variant: string | null | undefined;
  className?: string;
}

function Heading({
  as: Tag = "h1",
  variant,
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag className={cn(headingVariants({ variant }), className)} {...props} />
  );
}

export { Heading, headingVariants, HEADING_TYPES };
