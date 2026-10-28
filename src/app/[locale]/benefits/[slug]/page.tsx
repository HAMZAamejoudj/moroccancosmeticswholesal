import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BenefitDetailView } from "@/components/benefits/benefit-detail-view";
import { PageHero } from "@/components/products/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { SiteLayout } from "@/components/site-layout";
import { routing } from "@/i18n/routing";
import { benefitGuides } from "@/lib/benefits";
import { getLocalizedBenefitGuide } from "@/lib/benefits-localize";
import { entityMetadata } from "@/lib/seo";

export const instant = false;

type BenefitPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return benefitGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: BenefitPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  return entityMetadata(locale, "benefits", slug, "benefit");
}

export default async function BenefitDetailPage({ params }: BenefitPageProps) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const guide = await getLocalizedBenefitGuide(slug);
  if (!guide) notFound();

  const t = await getTranslations("guides.ui");

  return (
    <SiteLayout>
      <PageHero
        title={guide.title}
        breadcrumbs={[
          { label: t("home"), href: "/" },
          { label: t("benefits"), href: "/benefits" },
          { label: guide.cardTitle },
        ]}
      />
      <BenefitDetailView guide={guide} />
      <CtaSection title={guide.ctaTitle} description={guide.ctaDescription} />
    </SiteLayout>
  );
}
