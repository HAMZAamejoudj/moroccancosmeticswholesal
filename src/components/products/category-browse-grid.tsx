import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FeatureCard } from "@/components/feature-card";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { productCategories } from "@/lib/products";

export async function CategoryBrowseGrid() {
  const t = await getTranslations("products.listing");
  const tCat = await getTranslations("products.categories");

  return (
    <SectionShell variant="alt">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <Eyebrow className="text-center">{t("categoriesEyebrow")}</Eyebrow>
        <h2 className="font-heading mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {t("categoriesTitle")}
        </h2>
        <p className="text-muted-foreground text-lg">{t("categoriesIntro")}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {productCategories.map((category) => (
          <Link key={category.slug} href={`/products/${category.slug}`} className="block h-full">
            <FeatureCard
              icon={category.icon}
              title={tCat(`${category.slug}.title` as never)}
              description={tCat(`${category.slug}.description` as never)}
              className="h-full transition-all hover:border-primary/25 hover:shadow-elevated"
            />
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
