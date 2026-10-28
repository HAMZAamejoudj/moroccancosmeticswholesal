import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type CheckRowProps = {
  children: React.ReactNode;
  className?: string;
};

export function CheckRow({ children, className }: CheckRowProps) {
  return (
    <div className={cn("group flex items-center gap-3", className)}>
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/15">
        <Check className="h-4 w-4 text-primary" aria-hidden />
      </div>
      <span className="text-foreground/90">{children}</span>
    </div>
  );
}
