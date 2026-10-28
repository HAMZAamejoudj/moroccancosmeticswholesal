import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "alt" | "dark";
  containerClassName?: string;
};

export function SectionShell({
  id,
  children,
  className,
  variant = "default",
  containerClassName,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 lg:py-24",
        variant === "default" && "bg-background",
        variant === "alt" && "bg-section-alt",
        variant === "dark" && "bg-section-dark text-cream",
        className,
      )}
    >
      <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
