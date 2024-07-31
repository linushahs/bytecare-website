import { cn } from "@/utils";
import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type = "text", id, className, error, ...props }, ref) => {
    return (
      <>
        <input
          id={id}
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={cn(
            "p-3.5 text-white rounded-sm border text-md border-borderSoft focus-within:border-brand outline-none bg-transparent placeholder:text-surface-border leading-6",
            error && "border-red-400",
            className
          )}
          {...props}
        />

        {error && (
          <span
            id={`error${id}`}
            className="text-red-400 text-base"
            role="alert"
          >
            {error.message}
          </span>
        )}
      </>
    );
  }
);

Input.displayName = "Input";
