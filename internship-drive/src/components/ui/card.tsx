import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type CardVariant = "solid" | "glass" | "elevated" | "outlined";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
}

const variantStyles: Record<CardVariant, string> = {
  solid: "bg-bg-card border border-border-default",
  glass:
    "bg-bg-glass backdrop-blur-xl border border-border-purple shadow-[var(--shadow-glow-purple)]",
  elevated: "bg-bg-elevated border border-border-default shadow-[var(--shadow-elevated)]",
  outlined: "bg-transparent border border-border-default",
};

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8 lg:p-10",
};

export function Card({
  className,
  variant = "solid",
  hover = false,
  padding = "md",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-2xl)] transition-all duration-500",
        variantStyles[variant],
        paddingStyles[padding],
        hover &&
          "hover:scale-[1.01] hover:border-border-hover hover:shadow-[var(--shadow-card)] cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl font-bold font-[family-name:var(--font-heading)] text-text-primary",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-text-secondary mt-1", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-4 pt-4 border-t border-border-default flex items-center gap-3", className)}
      {...props}
    >
      {children}
    </div>
  );
}
