import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductCatalogCard } from "@/components/products/product-catalog-card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionShell } from "@/components/section-shell";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/constants";
import type { FullProduct } from "@/lib/products/page-content";
import { getRelatedProducts } from "@/lib/products";

export async function ProductDetailView({ product }: { product: FullProduct }) {
  const t = await getTranslations("products.ui");
  const related = getRelatedProducts(product.slug, 3);

  return (
    <>
      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted shadow-soft">
            <Image
              src={product.image}
              alt={product.alt}
              width={800}
              height={800}
              className="aspect-square w-full object-cover"
              priority
            />
          </div>
          <div>
            <Eyebrow>{product.categoryLabel}</Eyebrow>
            <h2 className="font-heading mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {product.heroSubtitle}
            </h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{product.description}</p>
            <ul className="mb-8 space-y-3">
              {product.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm sm:text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3.5 w-3.5 text-primary" aria-hidden />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mb-8 overflow-hidden rounded-2xl border border-border/60 bg-card">
              <dl className="divide-y divide-border/60">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-[9rem_1fr] sm:gap-4">
                    <dt className="text-sm font-semibold">{spec.label}</dt>
                    <dd className="text-muted-foreground text-sm">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={SITE.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
              >
                {t("requestQuote")}
              </a>
              <Link
                href="/private-label"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                {t("privateLabel")}
              </Link>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                {t("whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell variant="alt">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Eyebrow className="text-center">{t("keyBenefits")}</Eyebrow>
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("whyWholesalers")}
          </h2>
          <p className="text-muted-foreground text-lg">{product.benefitsIntro}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft"
            >
              <h3 className="font-heading mb-2 text-lg font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mx-auto max-w-3xl">
          <Eyebrow>{t("productDetails")}</Eyebrow>
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight">{product.detailsHeading}</h2>
          <div className="space-y-4">
            {product.detailsParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          {product.detailsNote ? (
            <p className="text-muted-foreground mt-6 rounded-2xl border border-border/60 bg-muted/40 p-4 text-sm leading-relaxed">
              {product.detailsNote}
            </p>
          ) : null}
        </div>
      </SectionShell>

      <SectionShell variant="alt">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Eyebrow className="text-center">{product.usageHeading}</Eyebrow>
          <p className="text-muted-foreground text-lg">{product.usageSubtitle}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {product.usageSteps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-border/60 bg-card p-5 pt-8 shadow-soft"
            >
              <span className="absolute top-3 start-4 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mx-auto max-w-3xl">
          <Eyebrow>{t("faq")}</Eyebrow>
          <h2 className="font-heading mb-3 text-3xl font-bold tracking-tight">
            {t("faqHeading")}
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">{product.faqIntro}</p>
          <Accordion className="rounded-2xl border border-border/60 bg-card px-2 shadow-soft">
            {product.faq.map((item, index) => (
              <AccordionItem key={item.question} value={`product-faq-${index}`}>
                <AccordionTrigger className="px-3 text-start font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-3 pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionShell>

      <SectionShell variant="alt">
        <div className="mb-8 text-center">
          <Eyebrow className="text-center">{t("related")}</Eyebrow>
          <h2 className="font-heading text-3xl font-bold tracking-tight">{t("related")}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <ProductCatalogCard key={item.slug} product={item} />
          ))}
        </div>
      </SectionShell>
    </>
  );
}
