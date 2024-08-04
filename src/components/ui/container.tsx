import { cn } from "@/utils";
import React, { forwardRef, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cn("container", className)}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
