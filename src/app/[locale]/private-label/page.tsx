import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { Link } from "@/i18n/navigation";
import { Check } from "lucide-react";
import { TwoColumnFaq } from "@/components/faq/two-column-faq";
import { PrivateLabelProcess } from "@/components/private-label/private-label-process";
import { PrivateLabelServices } from "@/components/private-label/private-label-services";
import { PageHero } from "@/components/products/page-hero";
import { ProductCatalogCard } from "@/components/products/product-catalog-card";
import { ProductTrustBadges } from "@/components/products/product-trust-badges";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SiteLayout } from "@/components/site-layout";
import { SITE } from "@/lib/constants";
import {
  privateLabelFaq,
  privateLabelHighlights,
  privateLabelIntro,
  privateLabelProductSlugs,
} from "@/lib/private-label";
import { getProductBySlug } from "@/lib/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "privateLabel");
}

export default function PrivateLabelPage() {
  const labelProducts = privateLabelProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  return (
    <SiteLayout>
      <PageHero
        title="Private label Moroccan cosmetics"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Private label" },
        ]}
      />
      <ProductTrustBadges />

      <SectionShell>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Eyebrow>{privateLabelIntro.eyebrow}</Eyebrow>
            <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {privateLabelIntro.title}
            </h2>
            <div className="space-y-4">
              {privateLabelIntro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-muted-foreground text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="mt-8 space-y-3">
              {privateLabelHighlights.map((line) => (
                <li key={line} className="flex gap-3 text-sm sm:text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3.5 w-3.5 text-primary" aria-hidden />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              {privateLabelIntro.badgeText}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border/60 shadow-elevated">
            <Image
              src="/assets/moroccan-cosmetics-factory.jpg"
              alt="Moroccan cosmetics private label manufacturing and packaging"
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover"
              priority
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell variant="alt">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Eyebrow className="text-center">What we offer</Eyebrow>
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            End-to-end private label services
          </h2>
          <p className="text-muted-foreground text-lg">
            One partner for manufacturing, branding, packaging, and international export — built for
            wholesalers and growing beauty brands.
          </p>
        </div>
        <PrivateLabelServices />
      </SectionShell>

      <SectionShell>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Eyebrow className="text-center">How it works</Eyebrow>
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            From brief to branded shipment
          </h2>
        </div>
        <PrivateLabelProcess />
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={SITE.catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            Start your private label project
          </a>
          <Link
            href="/products"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            Browse catalog products
          </Link>
        </div>
      </SectionShell>

      <SectionShell variant="alt">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Eyebrow className="text-center">Popular for private label</Eyebrow>
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Moroccan products ready for your brand
          </h2>
          <p className="text-muted-foreground text-lg">
            These wholesale SKUs are frequently private labeled for retail, spa, and e-commerce
            collections.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {labelProducts.map((product) => (
            <ProductCatalogCard key={product.slug} product={product} />
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Eyebrow className="text-center">FAQ</Eyebrow>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Private label questions
          </h2>
        </div>
        <TwoColumnFaq items={privateLabelFaq} />
      </SectionShell>

      <CtaSection
        title="Ready to build your Moroccan cosmetics brand?"
        description="Request the catalog, share your private label brief, or ask about MOQ and samples. Our Marrakesh team responds quickly to international buyers."
      />
    </SiteLayout>
  );
}
