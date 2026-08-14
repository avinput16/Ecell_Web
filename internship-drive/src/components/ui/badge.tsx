import { cn } from "@/lib/utils";
import type { ApplicationStatus, ApprovalStatus, ListingStatus } from "@/types/database";

export type BadgeVariant = "default" | "lime" | "purple" | "success" | "warning" | "error" | "info";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-white/10 text-text-secondary border-border-default",
  lime: "bg-accent-lime/10 text-accent-lime border-accent-lime/20",
  purple: "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
  success: "bg-success-soft text-success border-success/20",
  warning: "bg-warning-soft text-warning border-warning/20",
  error: "bg-error-soft text-error border-error/20",
  info: "bg-info-soft text-info border-info/20",
};

export function Badge({ variant = "default", children, className, dot }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border",
        "font-[family-name:var(--font-ui)] uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      )}
      {children}
    </span>
  );
}

// Status-specific badge helpers
const applicationStatusMap: Record<ApplicationStatus, { variant: BadgeVariant; label: string }> = {
  applied: { variant: "info", label: "Applied" },
  shortlisted: { variant: "purple", label: "Shortlisted" },
  interview_scheduled: { variant: "warning", label: "Interview" },
  selected: { variant: "success", label: "Selected" },
  rejected: { variant: "error", label: "Rejected" },
  withdrawn: { variant: "default", label: "Withdrawn" },
};

export function ApplicationStatusBadge({ status }: { status: ApplicationStatus }) {
  const { variant, label } = applicationStatusMap[status];
  return <Badge variant={variant} dot>{label}</Badge>;
}

const listingStatusMap: Record<ListingStatus, { variant: BadgeVariant; label: string }> = {
  draft: { variant: "default", label: "Draft" },
  pending_approval: { variant: "warning", label: "Pending" },
  approved: { variant: "success", label: "Live" },
  rejected: { variant: "error", label: "Rejected" },
  closed: { variant: "default", label: "Closed" },
};

export function ListingStatusBadge({ status }: { status: ListingStatus }) {
  const { variant, label } = listingStatusMap[status];
  return <Badge variant={variant} dot>{label}</Badge>;
}

const approvalStatusMap: Record<ApprovalStatus, { variant: BadgeVariant; label: string }> = {
  pending: { variant: "warning", label: "Pending" },
  approved: { variant: "success", label: "Approved" },
  rejected: { variant: "error", label: "Rejected" },
};

export function ApprovalStatusBadge({ status }: { status: ApprovalStatus }) {
  const { variant, label } = approvalStatusMap[status];
  return <Badge variant={variant} dot>{label}</Badge>;
}
