import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Breadcrumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  breadcrumbs: Breadcrumb[];
  className?: string;
};

export function PageHero({ title, breadcrumbs, className }: PageHeroProps) {
  return (
    <div className={cn("bg-section-dark text-cream", className)}>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <h1 className="font-heading mb-4 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <nav aria-label="Breadcrumb" className="text-sm text-cream/70">
          <ol className="flex flex-wrap items-center gap-2">
            {breadcrumbs.map((crumb, index) => (
              <li key={`${crumb.label}-${index}`} className="inline-flex items-center gap-2">
                {index > 0 ? <span aria-hidden>/</span> : null}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-cream">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-cream/90">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
