import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import React from "react";

const HEADING_TYPES = {
  headline03: "headline03",
  headline04: "headline04",
  heading: "heading",
};

const headingVariants = cva("font-heading", {
  variants: {
    variant: {
      [HEADING_TYPES.headline03]:
        "text-5xl !leading-[125%] font-bold text-white",
      [HEADING_TYPES.headline04]:
        "text-3xl !leading-[135%] font-bold text-white",
      [HEADING_TYPES.heading]: "text-2xl font-bold !leading-[120%] text-white",
    },
  },
  defaultVariants: {
    variant: HEADING_TYPES.headline03,
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
