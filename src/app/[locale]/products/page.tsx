import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CategoryBrowseGrid } from "@/components/products/category-browse-grid";
import { PageHero } from "@/components/products/page-hero";
import { ProductCatalogCard } from "@/components/products/product-catalog-card";
import { ProductTrustBadges } from "@/components/products/product-trust-badges";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SiteLayout } from "@/components/site-layout";
import { catalogProducts } from "@/lib/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "products");
}

export default function ProductsPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Our Moroccan cosmetics wholesale catalog"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />
      <ProductTrustBadges />

      <SectionShell>
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <Eyebrow className="text-center">Premium wholesale range</Eyebrow>
          <h2 className="font-heading mx-auto mb-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:whitespace-nowrap">
            <span className="max-sm:block">Authentic products from</span>{" "}
            <span className="whitespace-nowrap">our Moroccan factory</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            ISO and GMP compliant manufacturing, export-ready documentation, and private label
            services. Request a quote for pricing and MOQ details.
          </p>
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
