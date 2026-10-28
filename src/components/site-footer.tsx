import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { FooterLogoCarousel } from "@/components/footer-logo-carousel";
import { SiteLogo } from "@/components/site-logo";
import { Link } from "@/i18n/navigation";
import { SITE, SOCIAL } from "@/lib/constants";
import {
  footerCompanyLinks,
  footerPaymentLogos,
  footerProductLinks,
  footerServiceLinks,
  footerShippingLogos,
} from "@/lib/site-data";

function SocialIcon({ name, className }: { name: "instagram" | "facebook" | "tiktok"; className?: string }) {
  if (name === "instagram") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }
  if (name === "facebook") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

async function FooterTrustStrip() {
  const t = await getTranslations("footer");
  const paymentLabel = t("paymentMethods");
  const shippingLabel = t("shippingPartners");

  return (
    <div className="border-b border-border/60 bg-section-alt">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          <div>
            <FooterTrustHeading>{paymentLabel}</FooterTrustHeading>
            <FooterLogoCarousel logos={footerPaymentLogos} label={paymentLabel} duration="38s" />
          </div>
          <div>
            <FooterTrustHeading>{shippingLabel}</FooterTrustHeading>
            <FooterLogoCarousel
              logos={footerShippingLogos}
              label={shippingLabel}
              reverse
              duration="32s"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterTrustHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-heading relative mb-4 block w-full pb-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-foreground sm:text-start">
      {children}
      <span
        className="absolute bottom-0 left-1/2 h-px w-10 -translate-x-1/2 border-b border-dashed border-primary sm:start-0 sm:left-auto sm:translate-x-0 rtl:sm:translate-x-0"
        aria-hidden
      />
    </h3>
  );
}

export async function SiteFooter() {
  const t = await getTranslations("footer");
  return (
    <footer id="contact" className="border-t border-border bg-background">
      <FooterTrustStrip />
      <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <SiteLogo className="mb-4 h-20" />
            <p className="text-muted-foreground mb-6 max-w-md text-sm leading-relaxed">{t("blurb")}</p>
            <div className="flex gap-3">
              {(
                [
                  ["instagram", SOCIAL.instagram],
                  ["facebook", SOCIAL.facebook],
                  ["tiktok", SOCIAL.tiktok],
                ] as const
              ).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label={name}
                >
                  <SocialIcon name={name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterLinkColumn
            title={t("company")}
            links={footerCompanyLinks.map((link) => ({
              href: link.href,
              label: t(`companyLinks.${link.key}`),
            }))}
          />
          <FooterLinkColumn
            title={t("products")}
            links={footerProductLinks.map((link) => ({
              href: link.href,
              label: t(`productLinks.${link.key}`),
            }))}
          />
          <FooterLinkColumn
            title={t("services")}
            links={footerServiceLinks.map((link) => ({
              href: link.href,
              label: t(`serviceLinks.${link.key}`),
            }))}
          />

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-lg font-semibold">{t("contact")}</h3>
            <ul className="text-muted-foreground flex flex-col gap-2 text-sm">
              <li dir="ltr" className="inline-block">
                {SITE.address}
              </li>
              <li>
                <a href={SITE.phoneHref} dir="ltr" className="inline-block hover:text-primary transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} dir="ltr" className="inline-block hover:text-primary transition-colors">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-muted-foreground mt-12 border-t border-border pt-8 text-center text-sm">
          © 2026 {SITE.name}. {t("rights")}
        </p>
      </div>
    </footer>
  );
}

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-heading text-lg font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className="text-muted-foreground text-sm transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
