import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { FaqSections } from "@/components/faq/faq-sections";
import { PageHero } from "@/components/products/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SiteLayout } from "@/components/site-layout";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import type { FaqSection } from "@/lib/faq";
import { SITE } from "@/lib/constants";

export const instant = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "faq");
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return null;
  }
  setRequestLocale(locale);

  const t = await getTranslations("faq");
  const sections = t.raw("sections") as FaqSection[];

  const faqQuickLinks = sections.map((section) => ({
    label: section.title,
    href: `#${section.id}`,
  }));

  return (
    <SiteLayout>
      <PageHero
        title={t("heroTitle")}
        breadcrumbs={[
          { label: t("home"), href: "/" },
          { label: t("navLabel") },
        ]}
      />

      <SectionShell>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Eyebrow className="text-center">{t("eyebrow")}</Eyebrow>
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("intro")}
          </p>
        </div>

        <nav
          aria-label={t("categoriesAria")}
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

        <FaqSections sections={sections} />

        <p className="text-muted-foreground mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed">
          {t("stillHaveQuestion")}{" "}
          <Link href="/contact" className="font-semibold text-primary hover:underline">
            {t("contactTeam")}
          </Link>{" "}
          {t("orMessage")}{" "}
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            {t("whatsapp")}
          </a>
          .
        </p>
      </SectionShell>

      <CtaSection
        title={t("ctaTitle")}
        description={t("ctaDescription")}
      />
    </SiteLayout>
  );
}
