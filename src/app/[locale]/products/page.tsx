import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { CategoryBrowseGrid } from "@/components/products/category-browse-grid";
import { PageHero } from "@/components/products/page-hero";
import { ProductCatalogCard } from "@/components/products/product-catalog-card";
import { ProductTrustBadges } from "@/components/products/product-trust-badges";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SiteLayout } from "@/components/site-layout";
import { routing } from "@/i18n/routing";
import { catalogProducts } from "@/lib/products";

export const instant = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "products");
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return null;
  }
  setRequestLocale(locale);

  const t = await getTranslations("products.listing");
  const tUi = await getTranslations("products.ui");

  return (
    <SiteLayout>
      <PageHero
        title={t("heroTitle")}
        breadcrumbs={[{ label: tUi("home"), href: "/" }, { label: tUi("products") }]}
      />
      <ProductTrustBadges />

      <SectionShell>
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <Eyebrow className="text-center">{t("eyebrow")}</Eyebrow>
          <h2 className="font-heading mx-auto mb-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:whitespace-nowrap">
            <span className="max-sm:block">{t("introTitleLine1")}</span>{" "}
            <span className="whitespace-nowrap">{t("introTitleLine2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t("intro")}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {catalogProducts.map((product) => (
            <ProductCatalogCard key={product.slug} product={product} />
          ))}
        </div>
      </SectionShell>

      <CategoryBrowseGrid />
      <CtaSection />
    </SiteLayout>
  );
}
