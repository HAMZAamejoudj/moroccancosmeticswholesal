import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { pageMetadata } from "@/lib/seo";
import { BenefitCard } from "@/components/benefits/benefit-card";
import { PageHero } from "@/components/products/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SiteLayout } from "@/components/site-layout";
import { routing } from "@/i18n/routing";
import { getLocalizedBenefitGuides } from "@/lib/benefits-localize";

export const instant = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "benefits");
}

export default async function BenefitsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return null;
  }
  setRequestLocale(locale);

  const t = await getTranslations("guides.ui");
  const guides = await getLocalizedBenefitGuides();

  return (
    <SiteLayout>
      <PageHero
        title={t("heroTitle")}
        breadcrumbs={[{ label: t("home"), href: "/" }, { label: t("benefits") }]}
      />

      <SectionShell>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Eyebrow className="text-center">{t("eyebrow")}</Eyebrow>
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("introTitle")}
          </h2>
          <p className="text-muted-foreground text-lg">{t("intro")}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <BenefitCard key={guide.slug} guide={guide} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            {t("viewProducts")}
          </Link>
        </div>
      </SectionShell>

      <CtaSection title={t("ctaTitle")} description={t("ctaDescription")} />
    </SiteLayout>
  );
}
