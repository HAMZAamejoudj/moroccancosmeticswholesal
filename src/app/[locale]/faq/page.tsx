import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { FaqSections } from "@/components/faq/faq-sections";
import { PageHero } from "@/components/products/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SiteLayout } from "@/components/site-layout";
import { Link } from "@/i18n/navigation";
import { faqSections } from "@/lib/faq";
import { SITE } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "faq");
}

const faqQuickLinks = faqSections.map((section) => ({
  label: section.title,
  href: `#${section.id}`,
}));

export default function FaqPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Frequently asked questions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <SectionShell>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Eyebrow className="text-center">Help center</Eyebrow>
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Answers for wholesale buyers
          </h2>
          <p className="text-muted-foreground text-lg">
            MOQ, private label, export, and product quality — common questions from distributors,
            spa suppliers, and brands sourcing Moroccan cosmetics from our Marrakesh operation.
          </p>
        </div>

        <nav
          aria-label="FAQ categories"
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {faqQuickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors hover:border-primary hover:text-primary sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <FaqSections sections={faqSections} />

        <p className="text-muted-foreground mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed">
          Still have a question?{" "}
          <Link href="/contact" className="font-semibold text-primary hover:underline">
            Contact our wholesale team
          </Link>{" "}
          or message us on{" "}
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            WhatsApp
          </a>
          .
        </p>
      </SectionShell>

      <CtaSection
        title="Ready to place a wholesale or private label order?"
        description="Request the catalog with MOQ details, samples, and export terms for your market."
      />
    </SiteLayout>
  );
}
