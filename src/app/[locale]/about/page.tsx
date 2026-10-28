import type { Metadata } from "next";
import Image from "next/image";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/products/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SiteLayout } from "@/components/site-layout";
import { SITE } from "@/lib/constants";
import {
  aboutAudienceIcon,
  aboutClientKeys,
  aboutPillars,
  aboutQualityKeys,
  aboutSectionIds,
  aboutStats,
} from "@/lib/about";

export const instant = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "about");
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return null;
  }
  setRequestLocale(locale);

  const t = await getTranslations("about");
  const tNav = await getTranslations("nav");
  const AudienceIcon = aboutAudienceIcon;

  return (
    <SiteLayout>
      <PageHero
        title={t("heroTitle")}
        breadcrumbs={[{ label: tNav("home"), href: "/" }, { label: tNav("about") }]}
      />

      <SectionShell id="story">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Eyebrow>{t("storyEyebrow")}</Eyebrow>
            <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t("lead.title")}
            </h2>
            <div className="space-y-4">
              {(["p1", "p2"] as const).map((key) => (
                <p key={key} className="text-muted-foreground text-lg leading-relaxed">
                  {t(`lead.${key}`)}
                </p>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.key}
                  className="rounded-2xl border border-border/60 bg-card px-3 py-3 text-center shadow-soft"
                >
                  <div className="font-heading text-lg font-bold text-primary sm:text-xl">{stat.value}</div>
                  <div className="text-muted-foreground text-xs leading-snug">{t(`stats.${stat.key}`)}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border/60 shadow-elevated">
            <Image
              src="/assets/moroccan-cosmetics-wholesale-hero.jpg"
              alt={t("storyImageAlt")}
              width={800}
              height={560}
              className="aspect-[4/3] w-full object-cover"
              priority
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell variant="alt">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Eyebrow className="text-center">{t("pillarsEyebrow")}</Eyebrow>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {t("pillarsTitle")}
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {aboutPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.key}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-heading mb-2 text-lg font-semibold">
                  {t(`pillars.${pillar.key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`pillars.${pillar.key}.description`)}
                </p>
              </article>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell id={aboutSectionIds.clients}>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>{t("clients.eyebrow")}</Eyebrow>
            <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t("clients.title")}
            </h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{t("clients.description")}</p>
            <ul className="space-y-3">
              {aboutClientKeys.map((key) => (
                <li key={key} className="flex gap-3 text-sm sm:text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3.5 w-3.5 text-primary" aria-hidden />
                  </span>
                  <span>{t(`clients.${key}`)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
              >
                {t("catalogCta")}
              </Link>
              <Link
                href="/private-label"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                {t("privateLabelCta")}
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-border/60 bg-section-alt p-8 shadow-soft">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <AudienceIcon className="h-5 w-5" aria-hidden />
            </div>
            <p className="text-muted-foreground leading-relaxed">{t("audience")}</p>
            <address className="mt-6 not-italic text-sm leading-relaxed">
              <span className="font-semibold text-foreground">{SITE.name}</span>
              <br />
              <span dir="ltr" className="inline-block">
                {SITE.address}
              </span>
              <br />
              <a href={SITE.phoneHref} dir="ltr" className="inline-block text-primary hover:underline">
                {SITE.phone}
              </a>
              <br />
              <a href={`mailto:${SITE.email}`} dir="ltr" className="inline-block text-primary hover:underline">
                {SITE.email}
              </a>
            </address>
          </div>
        </div>
      </SectionShell>

      <SectionShell id={aboutSectionIds.production} variant="alt">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1 overflow-hidden rounded-3xl border border-border/60 shadow-elevated">
            <Image
              src="/assets/moroccan-cosmetics-factory.jpg"
              alt={t("productionImageAlt")}
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>{t("production.eyebrow")}</Eyebrow>
            <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t("production.title")}
            </h2>
            {(["p1", "p2"] as const).map((key) => (
              <p key={key} className="text-muted-foreground mb-4 text-lg leading-relaxed">
                {t(`production.${key}`)}
              </p>
            ))}
            <Link href="/#manufacturing" className="text-sm font-semibold text-primary hover:underline">
              {t("manufacturingLink")}
            </Link>
          </div>
        </div>
      </SectionShell>

      <SectionShell id={aboutSectionIds.quality}>
        <div className="mx-auto max-w-3xl">
          <Eyebrow>{t("quality.eyebrow")}</Eyebrow>
          <h2 className="font-heading mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("quality.title")}
          </h2>
          <ul className="space-y-3 rounded-2xl border border-border/60 bg-card p-6 shadow-soft sm:p-8">
            {aboutQualityKeys.map((key) => (
              <li key={key} className="flex gap-3 text-sm sm:text-base">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" aria-hidden />
                </span>
                <span>{t(`quality.${key}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      <SectionShell id={aboutSectionIds.export} variant="alt">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="text-center">{t("export.eyebrow")}</Eyebrow>
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("export.title")}
          </h2>
          {(["p1", "p2"] as const).map((key) => (
            <p key={key} className="text-muted-foreground mb-4 text-lg leading-relaxed">
              {t(`export.${key}`)}
            </p>
          ))}
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            {t("shippingCta")}
          </Link>
        </div>
      </SectionShell>

      <CtaSection title={t("ctaTitle")} description={t("ctaDescription")} />
    </SiteLayout>
  );
}
