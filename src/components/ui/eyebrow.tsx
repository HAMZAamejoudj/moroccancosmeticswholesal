import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  withIcon?: boolean;
};

export function Eyebrow({ children, className, withIcon = false }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-eyebrow mb-3 text-xs font-semibold tracking-[0.2em] uppercase",
        className,
      )}
    >
      {withIcon ? (
        <span className="inline-flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          {children}
        </span>
      ) : (
        children
      )}
    </p>
  );
}
