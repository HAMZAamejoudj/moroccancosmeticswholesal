import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/constants";

type CtaSectionProps = {
  title?: string;
  description?: string;
};

export async function CtaSection({ title, description }: CtaSectionProps) {
  const t = await getTranslations("cta");

  return (
    <section className="bg-primary py-14 text-primary-foreground lg:py-16">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {title ?? t("title")}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
          {description ?? t("description")}
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-full bg-cream px-8 text-sm font-semibold text-foreground transition-opacity hover:opacity-95"
          >
            {t("contactNow")}
          </Link>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-full border-2 border-cream/40 px-8 text-sm font-semibold text-cream transition-colors hover:border-cream/70 hover:bg-white/5"
          >
            {t("whatsappCatalog")}
          </a>
        </div>
      </div>
    </section>
  );
}
