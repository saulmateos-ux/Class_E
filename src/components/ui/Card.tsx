import { cn } from "@/lib/utils";

interface CardProps {
  variant?: "default" | "elevated" | "bordered";
  className?: string;
  children: React.ReactNode;
}

export function Card({
  variant = "default",
  className,
  children,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-6",
        variant === "default" &&
          "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300",
        variant === "elevated" && "shadow-[var(--shadow-elevated)]",
        variant === "bordered" && "border border-neutral-200",
        className
      )}
    >
      {children}
    </div>
  );
}
