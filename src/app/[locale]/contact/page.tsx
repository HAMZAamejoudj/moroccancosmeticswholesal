import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { Check, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/contact/contact-form";
import { SiteLayout } from "@/components/site-layout";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const instant = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "contact");
}

const heroBulletKeys = ["b1", "b2", "b3"] as const;

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return null;
  }
  setRequestLocale(locale);

  const t = await getTranslations("contact");
  const tNav = await getTranslations("nav");

  return (
    <SiteLayout>
      <section className="bg-section-dark text-cream">
        <div className="container mx-auto px-4 pt-10 pb-28 sm:px-6 lg:px-8 lg:pt-14 lg:pb-32">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-cream/70">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-cream">
                  {tNav("home")}
                </Link>
              </li>
              <li className="inline-flex items-center gap-2">
                <span aria-hidden>/</span>
                <span className="text-cream/90">{tNav("contact")}</span>
              </li>
            </ol>
          </nav>

          <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <Eyebrow className="text-argan-gold">{t("heroEyebrow")}</Eyebrow>
              <h1 className="font-heading mb-5 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {t("heroTitle")}
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
                {t("heroIntro")}
              </p>
            </div>

            <ul className="rounded-2xl border border-cream/15 bg-cream/8 p-6 shadow-soft backdrop-blur-sm sm:p-7">
              {heroBulletKeys.map((key) => (
                <li key={key} className="flex gap-3 py-2.5 first:pt-0 last:pb-0">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed text-cream/90 sm:text-base">
                    {t(`bullets.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative z-10 container mx-auto -mt-16 px-4 pb-16 sm:px-6 lg:-mt-20 lg:px-8 lg:pb-24">
        <div className="grid items-start gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-border/60 bg-card p-6 shadow-elevated sm:p-8">
            <h2 className="font-heading mb-2 text-2xl font-bold tracking-tight">{t("detailsTitle")}</h2>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed sm:text-base">
              {t("detailsIntro")}
            </p>

            <div className="space-y-6">
              <ContactDetail icon={Mail} label={t("emailLabel")}>
                <a
                  href={`mailto:${SITE.email}`}
                  dir="ltr"
                  className="inline-block break-all hover:text-primary"
                >
                  {SITE.email}
                </a>
              </ContactDetail>
              <ContactDetail icon={Phone} label={t("phoneLabel")}>
                <a href={SITE.phoneHref} dir="ltr" className="inline-block hover:text-primary">
                  {SITE.phone}
                </a>
              </ContactDetail>
              <ContactDetail icon={MessageCircle} label={t("whatsappLabel")}>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                  className="inline-block hover:text-primary"
                >
                  {SITE.whatsappDisplay}
                </a>
              </ContactDetail>
              <ContactDetail icon={MapPin} label={t("locationLabel")}>
                <span dir="ltr" className="inline-block">
                  {SITE.address}
                </span>
              </ContactDetail>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-border bg-muted/60 px-3 py-1.5 text-xs font-medium text-foreground/80">
                {t("replyChip")}
              </span>
              <span className="rounded-full border border-border bg-muted/60 px-3 py-1.5 text-xs font-medium text-foreground/80">
                {t("focusChip")}
              </span>
            </div>
          </article>

          <article
            id="inquiry"
            className="rounded-2xl border border-border/60 bg-card p-6 shadow-elevated sm:p-8"
          >
            <h2 className="font-heading mb-2 text-2xl font-bold tracking-tight">{t("formTitle")}</h2>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed sm:text-base">
              {t("formIntro")}
            </p>
            <ContactForm />
          </article>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactDetail({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div className="min-w-0">
        <p className="text-muted-foreground mb-1 text-xs font-semibold tracking-[0.14em] uppercase">
          {label}
        </p>
        <div className="text-sm font-medium leading-relaxed sm:text-base">{children}</div>
      </div>
    </div>
  );
}
