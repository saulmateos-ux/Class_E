import { cn } from "@/lib/utils";

interface FloatingShapeProps {
  variant?: "circle" | "blob" | "ring";
  color?: "primary" | "accent" | "neutral";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animate?: boolean;
}

export function FloatingShape({
  variant = "circle",
  color = "primary",
  size = "md",
  className,
  animate = true,
}: FloatingShapeProps) {
  return (
    <div
      className={cn(
        "absolute pointer-events-none",
        // Size
        size === "sm" && "w-24 h-24",
        size === "md" && "w-48 h-48",
        size === "lg" && "w-72 h-72",
        size === "xl" && "w-96 h-96",
        // Shape
        variant === "circle" && "rounded-full",
        variant === "blob" && "rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",
        variant === "ring" && "rounded-full border-[16px] bg-transparent",
        // Color with opacity
        variant !== "ring" && color === "primary" && "bg-primary-100/30",
        variant !== "ring" && color === "accent" && "bg-accent-100/40",
        variant !== "ring" && color === "neutral" && "bg-neutral-100/50",
        variant === "ring" && color === "primary" && "border-primary-100/30",
        variant === "ring" && color === "accent" && "border-accent-100/40",
        variant === "ring" && color === "neutral" && "border-neutral-100/50",
        // Animation
        animate && "animate-float",
        className
      )}
      aria-hidden="true"
    />
  );
}
