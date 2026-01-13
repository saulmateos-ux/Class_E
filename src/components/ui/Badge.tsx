import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "default" | "success" | "warning" | "error" | "accent";
  className?: string;
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-sm font-medium rounded-full",
        variant === "default" && "bg-primary-50 text-primary",
        variant === "success" && "bg-success-light text-success",
        variant === "warning" && "bg-warning-light text-warning",
        variant === "error" && "bg-error-light text-error",
        variant === "accent" && "bg-accent-50 text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
