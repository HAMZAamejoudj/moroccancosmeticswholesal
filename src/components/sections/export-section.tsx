import { getTranslations } from "next-intl/server";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { exportSteps } from "@/lib/site-data";

const stepKeys = ["documentation", "analysis", "standards", "logistics"] as const;

export async function ExportSection() {
  const t = await getTranslations("home.export");

  return (
    <SectionShell variant="dark">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <Eyebrow className="text-argan-gold-light text-center">{t("eyebrow")}</Eyebrow>
        <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h2>
        <p className="text-lg text-cream/80">{t("intro")}</p>
        <p className="mt-4 font-medium text-argan-gold-light">{t("organized")}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {exportSteps.map((step, index) => {
          const Icon = step.icon;
          const key = stepKeys[index];
          return (
            <div
              key={step.step}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary px-3 py-0.5 text-xs font-semibold text-cream">
                {t("step")} {step.step}
              </span>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-argan-gold/30 bg-section-dark">
                <Icon className="h-7 w-7 text-argan-gold-light" aria-hidden />
              </div>
              <h3 className="font-heading mb-2 text-lg font-semibold">{t(`steps.${key}Title`)}</h3>
              <p className="text-sm leading-relaxed text-cream/75">{t(`steps.${key}Description`)}</p>
            </div>
          );
        })}
      </div>

      <p className="mx-auto mt-12 max-w-3xl text-center text-lg text-cream/80 italic">&ldquo;{t("quote")}&rdquo;</p>
    </SectionShell>
  );
}
