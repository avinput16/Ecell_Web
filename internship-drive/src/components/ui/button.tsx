import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-lime text-text-on-lime hover:bg-accent-lime-hover shadow-[var(--shadow-glow-lime)] hover:shadow-[var(--shadow-glow-lime-strong)] font-semibold",
  secondary:
    "bg-accent-purple text-white hover:bg-accent-purple-hover shadow-[var(--shadow-glow-purple)] hover:shadow-[var(--shadow-glow-purple-strong)] font-semibold",
  outline:
    "bg-transparent border border-border-default text-text-primary hover:border-accent-lime hover:text-accent-lime hover:shadow-[var(--shadow-glow-lime)]",
  ghost:
    "bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5",
  danger:
    "bg-error/10 text-error border border-error/20 hover:bg-error/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-[var(--radius-lg)] gap-1.5",
  md: "px-6 py-2.5 text-base rounded-[var(--radius-xl)] gap-2",
  lg: "px-10 py-3.5 text-lg rounded-full gap-2.5",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      icon,
      iconRight,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center font-[family-name:var(--font-cta)] transition-all duration-300 ease-out cursor-pointer",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
          "active:scale-[0.98]",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : (
          icon
        )}
        {children}
        {iconRight}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };
