import { cn } from "@/utils";
import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: FieldError;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ placeholder, id, className, error, ...props }, ref) => {
    return (
      <textarea
        id={id}
        ref={ref}
        placeholder={placeholder}
        className={cn(
          "p-3 text-white text-md min-h-[8rem] resize-none rounded-md border border-borderLight focus-within:border-brand  outline-none bg-transparent placeholder:text-surface-border leading-6",
          error && "border-accent-red focus-within:border-accent-red",
          className
        )}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";
