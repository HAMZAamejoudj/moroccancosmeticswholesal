import type { Metadata } from "next";
import Image from "next/image";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { Link } from "@/i18n/navigation";
import { Check } from "lucide-react";
import { TwoColumnFaq, type TwoColumnFaqItem } from "@/components/faq/two-column-faq";
import { PrivateLabelProcess } from "@/components/private-label/private-label-process";
import { PrivateLabelServices } from "@/components/private-label/private-label-services";
import { PageHero } from "@/components/products/page-hero";
import { ProductCatalogCard } from "@/components/products/product-catalog-card";
import { ProductTrustBadges } from "@/components/products/product-trust-badges";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SiteLayout } from "@/components/site-layout";
import { routing } from "@/i18n/routing";
import { SITE } from "@/lib/constants";
import { privateLabelProductSlugs } from "@/lib/private-label";
import { getProductBySlug } from "@/lib/products";

export const instant = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "privateLabel");
}

export default async function PrivateLabelPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return null;
  }
  setRequestLocale(locale);

  const t = await getTranslations("privateLabel");

  const labelProducts = privateLabelProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  const introParagraphs = t.raw("introParagraphs") as string[];
  const highlights = t.raw("highlights") as string[];
  const faqItems = t.raw("faq") as TwoColumnFaqItem[];

  return (
    <SiteLayout>
      <PageHero
        title={t("heroTitle")}
        breadcrumbs={[
          { label: t("home"), href: "/" },
          { label: t("navLabel") },
        ]}
      />
      <ProductTrustBadges />

      <SectionShell>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Eyebrow>{t("introEyebrow")}</Eyebrow>
            <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t("introTitle")}
            </h2>
            <div className="space-y-4">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-muted-foreground text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="mt-8 space-y-3">
              {highlights.map((line) => (
                <li key={line} className="flex gap-3 text-sm sm:text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3.5 w-3.5 text-primary" aria-hidden />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              {t("badge")}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border/60 shadow-elevated">
            <Image
              src="/assets/moroccan-cosmetics-factory.jpg"
              alt={t("imageAlt")}
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover"
              priority
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell variant="alt">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Eyebrow className="text-center">{t("servicesEyebrow")}</Eyebrow>
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("servicesTitle")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("servicesIntro")}
          </p>
        </div>
        <PrivateLabelServices />
      </SectionShell>

      <SectionShell>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Eyebrow className="text-center">{t("processEyebrow")}</Eyebrow>
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("processTitle")}
          </h2>
        </div>
        <PrivateLabelProcess />
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={SITE.catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            {t("startProject")}
          </a>
          <Link
            href="/products"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            {t("browseCatalog")}
          </Link>
        </div>
      </SectionShell>

      <SectionShell variant="alt">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Eyebrow className="text-center">{t("productsEyebrow")}</Eyebrow>
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("productsTitle")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("productsIntro")}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {labelProducts.map((product) => (
            <ProductCatalogCard key={product.slug} product={product} />
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Eyebrow className="text-center">{t("faqEyebrow")}</Eyebrow>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {t("faqTitle")}
          </h2>
        </div>
        <TwoColumnFaq items={faqItems} />
      </SectionShell>

      <CtaSection
        title={t("ctaTitle")}
        description={t("ctaDescription")}
      />
    </SiteLayout>
  );
}
