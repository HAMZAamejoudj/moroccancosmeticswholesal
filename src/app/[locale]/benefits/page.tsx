import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { pageMetadata } from "@/lib/seo";
import { BenefitCard } from "@/components/benefits/benefit-card";
import { PageHero } from "@/components/products/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SiteLayout } from "@/components/site-layout";
import { benefitGuides } from "@/lib/benefits";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "benefits");
}

export default function BenefitsPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Benefits of Moroccan cosmetic raw materials"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Benefits" },
        ]}
      />

      <SectionShell>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Eyebrow className="text-center">Benefit guides</Eyebrow>
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Traditional skincare benefits and cosmetic uses
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore how Morocco&apos;s best-known ingredients are used in beauty routines, spa
            treatments, and professional cosmetic formulations — then source them wholesale from our
            manufacturing and export team.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefitGuides.map((guide) => (
            <BenefitCard key={guide.slug} guide={guide} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            View all wholesale products
          </Link>
        </div>
      </SectionShell>

      <CtaSection
        title="Looking for these ingredients in bulk?"
        description="Browse our Moroccan cosmetics wholesale catalog and private label services for export-ready supply."
      />
    </SiteLayout>
  );
}
