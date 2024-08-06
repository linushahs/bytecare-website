import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import React from "react";

const PARAGRAPH_TYPES = {
  paragraph: "paragraph",
  paragraph01: "paragraph01",
};

const paragraphVariants = cva("", {
  variants: {
    variant: {
      [PARAGRAPH_TYPES.paragraph]:
        "leading-6 text-md font-normal text-textSecondary",
      [PARAGRAPH_TYPES.paragraph01]:
        "leading-6 text-md xl:text-lg font-normal text-foreground",
    },
  },
  defaultVariants: {
    variant: PARAGRAPH_TYPES.paragraph,
  },
});

interface ParagraphProps extends React.HTMLProps<HTMLParagraphElement> {
  className?: string;
  variant?: string;
  props?: any;
}

function Paragraph({ className, variant, ...props }: ParagraphProps) {
  return (
    <p className={cn(paragraphVariants({ variant, className }))} {...props} />
  );
}

export { paragraphVariants, Paragraph, PARAGRAPH_TYPES };
