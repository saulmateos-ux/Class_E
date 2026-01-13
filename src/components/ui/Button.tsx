"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer",
          // Size variants
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          // Color variants
          variant === "primary" &&
            "bg-accent text-white hover:bg-accent-600 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]",
          variant === "secondary" &&
            "bg-primary text-white hover:bg-primary-600 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]",
          variant === "outline" &&
            "border-2 border-primary text-primary hover:bg-primary hover:text-white",
          variant === "ghost" &&
            "text-primary hover:bg-primary-50",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
