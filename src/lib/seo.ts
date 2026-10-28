import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export type StaticMetaPage =
  | "home"
  | "about"
  | "products"
  | "benefits"
  | "privateLabel"
  | "blog"
  | "faq"
  | "contact";

type MetaPair = { title: string; description: string };

function ogLocale(locale: string) {
  return locale === "fr" ? "fr_FR" : locale === "ar" ? "ar_MA" : "en_US";
}

function toMetadata(pair: MetaPair, locale: string, absolute?: boolean): Metadata {
  return {
    title: absolute ? { absolute: pair.title } : pair.title,
    description: pair.description,
    openGraph: {
      title: pair.title,
      description: pair.description,
      locale: ogLocale(locale),
    },
    twitter: {
      title: pair.title,
      description: pair.description,
    },
  };
}

export async function pageMetadata(locale: string, page: StaticMetaPage): Promise<Metadata> {
  if (!hasLocale(routing.locales, locale)) return {};
  setRequestLocale(locale);
  const messages = await getMessages();
  return toMetadata(messages.meta.pages[page], locale, page === "home");
}

export async function entityMetadata(
  locale: string,
  group: "products" | "benefits" | "posts",
  slug: string,
  notFoundKey: "product" | "benefit" | "article",
): Promise<Metadata> {
  if (hasLocale(routing.locales, locale)) {
    setRequestLocale(locale);
  }
  const messages = await getMessages();
  const pair = (messages.meta[group] as Record<string, MetaPair | undefined>)[slug];
  if (!pair) {
    return { title: messages.meta.notFound[notFoundKey] };
  }
  return toMetadata(pair, locale);
}
