import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import { BuyingGuideSection } from "@/components/sections/buying-guide-section";
import { CtaSection } from "@/components/sections/cta-section";
import { ExportSection } from "@/components/sections/export-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IngredientsSection } from "@/components/sections/ingredients-section";
import { ManufacturingSection } from "@/components/sections/manufacturing-section";
import { WholesalerSection } from "@/components/sections/wholesaler-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type HomePageProps = LayoutProps<"/[locale]">;

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "home");
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return null;
  }
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16 lg:pt-20">
        <HeroSection />
        <ManufacturingSection />
        <WholesalerSection />
        <IngredientsSection />
        <ExportSection />
        <BuyingGuideSection />
      </main>
      <CtaSection />
      <SiteFooter />
    </>
  );
}
