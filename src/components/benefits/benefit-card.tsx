import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import type { BenefitGuide } from "@/lib/benefits";

export async function BenefitCard({ guide }: { guide: BenefitGuide }) {
  const t = await getTranslations("guides.ui");

  return (
    <Link
      href={`/benefits/${guide.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-elevated"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={guide.image}
          alt={guide.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading mb-2 text-xl font-semibold leading-snug">{guide.cardTitle}</h3>
        <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">{guide.summary}</p>
        <ul className="mb-4 flex flex-wrap gap-2">
          {guide.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary"
            >
              {tag}
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
          {t("readGuide")}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
        </span>
      </div>
    </Link>
  );
}
