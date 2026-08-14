import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, icon, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-text-secondary font-[family-name:var(--font-ui)]"
          >
            {label}
            {props.required && <span className="text-error ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "w-full bg-bg-card border border-border-default rounded-[var(--radius-lg)] px-4 py-2.5",
              "text-text-primary placeholder:text-text-muted",
              "font-[family-name:var(--font-body)] text-sm",
              "transition-all duration-200",
              "focus:outline-none focus:border-accent-lime focus:ring-1 focus:ring-accent-lime/30",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              icon && "pl-10",
              error && "border-error focus:border-error focus:ring-error/30",
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="text-xs text-error font-[family-name:var(--font-ui)]">{error}</p>
        )}
        {hint && !error && (
          <p className="text-xs text-text-muted font-[family-name:var(--font-ui)]">{hint}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

// Textarea variant
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-text-secondary font-[family-name:var(--font-ui)]"
          >
            {label}
            {props.required && <span className="text-error ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            "w-full bg-bg-card border border-border-default rounded-[var(--radius-lg)] px-4 py-2.5",
            "text-text-primary placeholder:text-text-muted",
            "font-[family-name:var(--font-body)] text-sm",
            "transition-all duration-200 resize-y min-h-[100px]",
            "focus:outline-none focus:border-accent-lime focus:ring-1 focus:ring-accent-lime/30",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-error focus:border-error focus:ring-error/30",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-error font-[family-name:var(--font-ui)]">{error}</p>
        )}
        {hint && !error && (
          <p className="text-xs text-text-muted font-[family-name:var(--font-ui)]">{hint}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Input, Textarea };
