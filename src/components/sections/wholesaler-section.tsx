import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/constants";
import { wholesalerAdvantages } from "@/lib/site-data";

export async function WholesalerSection() {
  const t = await getTranslations("home.wholesaler");

  const descriptions = {
    wholesale: {
      before: t("items.wholesaleBefore"),
      link: t("items.wholesaleLink"),
      after: t("items.wholesaleAfter"),
      href: "/contact" as const,
      title: t("items.wholesaleTitle"),
      external: false,
    },
    catalog: {
      before: t("items.catalogBefore"),
      link: t("items.catalogLink"),
      after: t("items.catalogAfter"),
      href: "/#product" as const,
      title: t("items.catalogTitle"),
      external: false,
    },
    privateLabel: {
      before: t("items.privateLabelBefore"),
      link: t("items.privateLabelLink"),
      after: t("items.privateLabelAfter"),
      href: "/private-label" as const,
      title: t("items.privateLabelTitle"),
      external: false,
    },
    boutique: {
      before: t("items.boutiqueBefore"),
      link: t("items.boutiqueLink"),
      after: t("items.boutiqueAfter"),
      href: SITE.catalogUrl,
      title: t("items.boutiqueTitle"),
      external: true,
    },
  };

  return (
    <SectionShell variant="alt">
      <div className="mx-auto mb-12 max-w-3xl text-center lg:max-w-6xl">
        <Eyebrow className="text-center">{t("eyebrow")}</Eyebrow>
        <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {t("title")}
        </h2>
        <p className="text-muted-foreground mx-auto max-w-3xl text-lg">{t("intro")}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {wholesalerAdvantages.map((item) => {
          const Icon = item.icon;
          const copy = item.linkKey ? descriptions[item.linkKey] : null;
          return (
            <article
              key={item.linkKey ?? item.title}
              className="group flex h-full flex-col rounded-2xl border border-border/50 bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-elevated"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <p className="font-heading mb-2 text-lg font-semibold text-foreground">{copy?.title ?? item.title}</p>
              <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
                {copy ? (
                  <>
                    {copy.before}{" "}
                    {copy.external ? (
                      <a
                        href={copy.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium hover:underline"
                      >
                        {copy.link}
                      </a>
                    ) : (
                      <Link href={copy.href} className="text-primary font-medium hover:underline">
                        {copy.link}
                      </Link>
                    )}{" "}
                    {copy.after}
                  </>
                ) : null}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                {t("learnMore")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
              </span>
            </article>
          );
        })}
      </div>

      <p className="text-muted-foreground mx-auto mt-10 max-w-3xl text-center text-lg">{t("closing")}</p>
    </SectionShell>
  );
}
