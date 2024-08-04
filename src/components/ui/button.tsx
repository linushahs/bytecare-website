import { ArrowRightIcon } from "@/assets";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  color?:
    | "fill"
    | "primary"
    | "surface"
    | "transparent"
    | "fillSecondary"
    | "fillTertiary"
    | "white";
  className?: string;
  showRightArrowIcon?: boolean;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = "default",
  className,
  color = "primary",
  onClick,
  children,
  showRightArrowIcon,
  isLoading,
}) => {
  const buttonVariants = {
    default: "text-textPrimary font-medium",
    outline: "border text-textPrimary",
  };

  const buttonColors = {
    primary: "bg-primaryBtnGradient hover:bg-primaryGradientHover",
    fill: "border-borderLight bg-fill",
    fillSecondary: "bg-fill-secondary",
    fillTertiary: "bg-fill-tertiary",
    surface: "bg-surface border-borderSoft  hover:contrast-75",
    transparent: "bg-transparent border-borderSoft hover:bg-fill-tertiary",
    white: "bg-white",
  };

  return (
    <button
      className={twMerge(
        "group py-[9px] px-5 rounded-md text-md flex items-center gap-2.5 cursor-pointer transition-colors duration-300 ease-in-out",
        buttonVariants[variant],
        buttonColors[color],
        className
      )}
      onClick={onClick}
    >
      {children}

      {showRightArrowIcon && (
        <span className="group-hover:translate-x-1.5 transition-all duration-300">
          <ArrowRightIcon className="size-5 md:size-6" />
        </span>
      )}
    </button>
  );
};

export default Button;
