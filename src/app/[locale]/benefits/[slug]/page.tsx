import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BenefitDetailView } from "@/components/benefits/benefit-detail-view";
import { PageHero } from "@/components/products/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { SiteLayout } from "@/components/site-layout";
import { benefitGuides, getBenefitBySlug } from "@/lib/benefits";
import { entityMetadata } from "@/lib/seo";

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
  const { slug } = await params;
  const guide = getBenefitBySlug(slug);
  if (!guide) notFound();

  return (
    <SiteLayout>
      <PageHero
        title={guide.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Benefits", href: "/benefits" },
          { label: guide.cardTitle },
        ]}
      />
      <BenefitDetailView guide={guide} />
      <CtaSection title={guide.ctaTitle} description={guide.ctaDescription} />
    </SiteLayout>
  );
}
