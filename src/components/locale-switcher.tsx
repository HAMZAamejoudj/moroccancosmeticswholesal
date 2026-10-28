"use client";

import { useLocale } from "next-intl";
import { localeLabels, locales } from "@/i18n/config";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-card p-0.5 text-[11px] font-bold tracking-wide",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {locales.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => router.replace(pathname, { locale: code as AppLocale })}
            className={cn(
              "rounded-full px-2.5 py-1 transition-colors",
              active
                ? "bg-primary text-primary-foreground"
                : "text-foreground/70 hover:text-primary",
            )}
            aria-current={active ? "true" : undefined}
          >
            {localeLabels[code]}
          </button>
        );
      })}
    </div>
  );
}
