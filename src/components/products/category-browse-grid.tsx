import { Link } from "@/i18n/navigation";
import { FeatureCard } from "@/components/feature-card";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { productCategories } from "@/lib/products";

export function CategoryBrowseGrid() {
  return (
    <SectionShell variant="alt">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <Eyebrow className="text-center">Product categories</Eyebrow>
        <h2 className="font-heading mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Browse by wholesale category
        </h2>
        <p className="text-muted-foreground text-lg">
          Explore our main Moroccan cosmetics families — oils, powders, clays, and spa essentials
          for bulk supply and private label.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {productCategories.map((category) => (
          <Link key={category.slug} href={`/products/${category.slug}`} className="block h-full">
            <FeatureCard
              icon={category.icon}
              title={category.title}
              description={category.description}
              className="h-full transition-all hover:border-primary/25 hover:shadow-elevated"
            />
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
