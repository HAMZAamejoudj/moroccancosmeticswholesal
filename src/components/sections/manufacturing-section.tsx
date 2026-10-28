import Image from "next/image";
import { BadgeCheck, Globe2, PackageSearch } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { CheckRow } from "@/components/check-row";
import { FeatureCard } from "@/components/feature-card";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { stats } from "@/lib/site-data";

export async function ManufacturingSection() {
  const t = await getTranslations("home.manufacturing");
  const productKeys = ["skincare", "hair", "oils", "bath"] as const;
  const featureCards = [
    {
      title: t("cards.rangeTitle"),
      description: t("cards.rangeDescription"),
      icon: PackageSearch,
    },
    {
      title: t("cards.isoTitle"),
      description: t("cards.isoDescription"),
      icon: BadgeCheck,
    },
    {
      title: t("cards.shippingTitle"),
      description: t("cards.shippingDescription"),
      icon: Globe2,
    },
  ];
  const statLabels = [t("stats.products"), t("stats.certified"), t("stats.compliant")];

  return (
    <SectionShell id="manufacturing">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl shadow-elevated">
            <Image
              src="/assets/moroccan-cosmetics-factory.jpg"
              alt={t("imageAlt")}
              width={800}
              height={600}
              className="aspect-[622/581] w-full object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-border/60 bg-card px-3 py-3 text-center shadow-soft"
              >
                <div className="font-heading text-xl font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground text-xs">{statLabels[index]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{t("intro")}</p>
          <div className="mb-6 grid gap-3 sm:grid-cols-2">
            {productKeys.map((key) => (
              <CheckRow key={key}>{t(`products.${key}`)}</CheckRow>
            ))}
          </div>
          <div className="space-y-3">
            {featureCards.map((card) => (
              <FeatureCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <BadgeCheck className="h-4 w-4" aria-hidden />
            {t("isoBadge")}
          </div>
          <p className="text-muted-foreground mt-6 leading-relaxed">{t("closing")}</p>
        </div>
      </div>
    </SectionShell>
  );
}
