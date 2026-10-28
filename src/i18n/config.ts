import { routing, type AppLocale } from "./routing";

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;

export function isRtlLocale(locale: string): boolean {
  return locale === "ar";
}

export function localeDir(locale: string): "rtl" | "ltr" {
  return isRtlLocale(locale) ? "rtl" : "ltr";
}

export const localeLabels: Record<AppLocale, string> = {
  en: "EN",
  fr: "FR",
  ar: "AR",
};
