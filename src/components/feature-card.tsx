import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  variant?: "light" | "dark";
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  variant = "light",
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex gap-4 rounded-2xl border p-4 sm:p-5",
        variant === "light"
          ? "border-border/60 bg-card shadow-soft"
          : "border-white/10 bg-white/5",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
          variant === "light" ? "bg-primary/10 text-primary" : "bg-white/10 text-cream",
        )}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div>
        <p
          className={cn(
            "mb-1 font-heading text-base font-semibold",
            variant === "light" ? "text-foreground" : "text-cream",
          )}
        >
          {title}
        </p>
        <p
          className={cn(
            "text-sm leading-relaxed",
            variant === "light" ? "text-muted-foreground" : "text-cream/75",
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
