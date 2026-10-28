import { getTranslations } from "next-intl/server";
import { productTrustBadges } from "@/lib/products";

const trustLabelKeys = ["trustIso", "trustNatural", "trustExport", "trustMoq"] as const;

export async function ProductTrustBadges() {
  const t = await getTranslations("products.ui");

  return (
    <section className="border-y border-border/60 bg-section-alt py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap justify-center gap-3">
          {productTrustBadges.map(({ icon: Icon }, index) => (
            <li
              key={trustLabelKeys[index]}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold shadow-soft sm:text-sm"
            >
              <Icon className="h-4 w-4 text-primary" aria-hidden />
              {t(trustLabelKeys[index])}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
