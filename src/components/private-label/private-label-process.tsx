import { getTranslations } from "next-intl/server";
import { privateLabelProcessSteps } from "@/lib/private-label";

export async function PrivateLabelProcess() {
  const t = await getTranslations("privateLabel");

  return (
    <ol className="grid gap-4 lg:grid-cols-5">
      {privateLabelProcessSteps.map((item) => (
        <li
          key={item.key}
          className="relative rounded-2xl border border-border/60 bg-card p-5 shadow-soft lg:flex lg:flex-col"
        >
          <p className="text-primary mb-2 text-xs font-bold tracking-widest">{item.step}</p>
          <h3 className="font-heading mb-2 text-base font-semibold sm:text-lg">
            {t(`process.${item.key}.title` as never)}
          </h3>
          <p className="text-muted-foreground flex-1 text-sm leading-relaxed">
            {t(`process.${item.key}.description` as never)}
          </p>
        </li>
      ))}
    </ol>
  );
}
