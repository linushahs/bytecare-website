import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  color?: "fill" | "primary" | "surface" | "transparent" | "fillSecondary";
  onClick?: () => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  variant = "default",
  className,
  color = "primary",
  onClick,
  children,
}) => {
  const buttonVariants = {
    default: "text-textPrimary font-medium",
    outline: "border text-textPrimary",
  };

  const buttonColors = {
    primary: "bg-primaryBtnGradient hover:bg-primaryGradientHover",
    fill: "border-borderLight bg-fill",
    fillSecondary: "bg-fill-secondary",
    surface: "bg-surface border-borderSoft  hover:contrast-75",
    transparent: "bg-transparent border-borderSoft ",
  };

  return (
    <button
      className={twMerge(
        "py-2.5 px-6 rounded-md text-md flex items-center gap-2 cursor-pointer",
        buttonVariants[variant],
        buttonColors[color],
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
