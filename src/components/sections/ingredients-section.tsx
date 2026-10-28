import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Link } from "@/i18n/navigation";
import { ingredients } from "@/lib/site-data";

export async function IngredientsSection() {
  const t = await getTranslations("home.ingredients");

  return (
    <SectionShell id="product">
      <span id="ingredients" className="sr-only" />
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <Eyebrow className="text-center">{t("eyebrow")}</Eyebrow>
        <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h2>
        <p className="text-muted-foreground text-lg">{t("intro")}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {ingredients.map((item) => (
          <Link
            key={item.slug}
            href={`/products/${item.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-elevated"
          >
            <div className="relative aspect-square overflow-hidden bg-muted">
              <Image
                src={item.image}
                alt={t(`items.${item.slug}.alt`)}
                width={320}
                height={320}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="text-primary mb-1 text-xs font-semibold tracking-wide uppercase">{t("badge")}</p>
              <h3 className="font-heading mb-2 line-clamp-2 text-base font-semibold leading-snug">
                {t(`items.${item.slug}.name`)}
              </h3>
              <p className="text-muted-foreground mb-3 flex-1 text-sm">{t(`items.${item.slug}.description`)}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                {t("viewProduct")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
