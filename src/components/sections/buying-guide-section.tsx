import { getTranslations } from "next-intl/server";
import { TwoColumnFaq } from "@/components/faq/two-column-faq";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Link } from "@/i18n/navigation";

export async function BuyingGuideSection() {
  const t = await getTranslations("home.buyingGuide");
  const faq = (
    [
      ["q1", "a1"],
      ["q2", "a2"],
      ["q3", "a3"],
      ["q4", "a4"],
      ["q5", "a5"],
      ["q6", "a6"],
      ["q7", "a7"],
      ["q8", "a8"],
      ["q9", "a9"],
      ["q10", "a10"],
    ] as const
  ).map(([questionKey, answerKey]) => ({
    question: t(`faq.${questionKey}`),
    answer: t(`faq.${answerKey}`),
  }));

  return (
    <SectionShell variant="alt">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <Eyebrow className="text-center">{t("faqEyebrow")}</Eyebrow>
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">{t("faqTitle")}</h2>
      </div>

      <TwoColumnFaq items={faq} />

      <p className="mt-8 text-center">
        <Link href="/faq" className="text-sm font-semibold text-primary hover:underline">
          {t("viewAllFaq")}
        </Link>
      </p>
    </SectionShell>
  );
}
