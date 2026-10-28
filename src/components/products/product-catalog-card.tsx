import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/constants";
import type { CatalogProduct } from "@/lib/products";
import { localizeCatalogProduct } from "@/lib/products/localize";

export async function ProductCatalogCard({ product }: { product: CatalogProduct }) {
  const [localized, t] = await Promise.all([
    localizeCatalogProduct(product),
    getTranslations("products.ui"),
  ]);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
      <Link
        href={`/products/${localized.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-muted"
        tabIndex={-1}
        aria-hidden
      >
        <Image
          src={localized.image}
          alt={localized.alt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-primary mb-1 text-xs font-bold tracking-wide uppercase">
          {localized.categoryLabel}
        </p>
        <h3 className="font-heading mb-2 text-lg font-semibold leading-snug">
          <Link href={`/products/${localized.slug}`} className="hover:text-primary">
            {localized.title}
          </Link>
        </h3>
        <p className="text-muted-foreground mb-5 flex-1 text-sm leading-relaxed">
          {localized.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          <Link
            href={`/products/${localized.slug}`}
            className="inline-flex h-9 items-center justify-center rounded-full border border-border px-4 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            {t("viewDetails")}
          </Link>
          <a
            href={SITE.catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("getQuote")}
          </a>
        </div>
      </div>
    </article>
  );
}
