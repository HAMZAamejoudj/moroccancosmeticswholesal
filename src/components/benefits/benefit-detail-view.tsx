import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Check } from "lucide-react";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SITE } from "@/lib/constants";
import type { BenefitGuide } from "@/lib/benefits";

export async function BenefitDetailView({ guide }: { guide: BenefitGuide }) {
  const t = await getTranslations("guides.ui");

  return (
    <>
      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted shadow-soft">
            <Image
              src={guide.image}
              alt={guide.alt}
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover"
              priority
            />
          </div>
          <div>
            <Eyebrow>{t("guideEyebrow")}</Eyebrow>
            <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {guide.introTitle}
            </h2>
            <div className="space-y-4">
              {guide.introParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-border/60 bg-section-alt p-5">
              <h3 className="font-heading mb-3 text-lg font-semibold">{t("keyFacts")}</h3>
              <ul className="space-y-2">
                {guide.keyFacts.map((fact) => (
                  <li key={fact} className="flex gap-3 text-sm sm:text-base">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3.5 w-3.5 text-primary" aria-hidden />
                    </span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell variant="alt">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Eyebrow className="text-center">{t("ingredientBenefits")}</Eyebrow>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {guide.benefitsHeading}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guide.benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft"
            >
              <p className="text-primary mb-2 text-xs font-bold tracking-wide uppercase">
                {t("benefitNumber")} {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-heading mb-2 text-lg font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-soft lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Eyebrow>{t("wholesaleEyebrow")}</Eyebrow>
              <h2 className="font-heading mb-3 text-2xl font-bold sm:text-3xl">{guide.wholesaleTitle}</h2>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">{guide.wholesaleParagraph}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={`/products/${guide.productSlug}`}
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
              >
                {t("viewProduct")}
              </Link>
              <a
                href={SITE.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                {t("getQuote")}
              </a>
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
