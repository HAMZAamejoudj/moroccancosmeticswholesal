import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/products/page-hero";
import { ProductDetailView } from "@/components/products/product-detail-view";
import { ProductTrustBadges } from "@/components/products/product-trust-badges";
import { CtaSection } from "@/components/sections/cta-section";
import { SiteLayout } from "@/components/site-layout";
import { routing } from "@/i18n/routing";
import { catalogProducts } from "@/lib/products";
import { getLocalizedFullProduct } from "@/lib/products/localize";
import { entityMetadata } from "@/lib/seo";

export const instant = false;

type ProductPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return catalogProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  return entityMetadata(locale, "products", slug, "product");
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const product = await getLocalizedFullProduct(slug);
  if (!product) {
    notFound();
  }

  const t = await getTranslations("products.ui");

  return (
    <SiteLayout>
      <PageHero
        title={product.title}
        breadcrumbs={[
          { label: t("home"), href: "/" },
          { label: t("products"), href: "/products" },
          { label: product.title },
        ]}
      />
      <ProductTrustBadges />
      <ProductDetailView product={product} />
      <CtaSection title={product.ctaTitle} description={product.ctaDescription} />
    </SiteLayout>
  );
}
