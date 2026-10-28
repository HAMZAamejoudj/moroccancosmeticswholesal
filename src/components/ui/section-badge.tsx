import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-block rounded-full px-3 py-1 text-sm font-medium",
        className,
      )}
    >
      {children}
    </div>
  );
}
