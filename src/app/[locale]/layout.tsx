import type { Metadata } from "next";
import { Cairo, Chivo, DM_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Toaster } from "@/components/ui/sonner";
import { localeDir } from "@/i18n/config";
import { routing } from "@/i18n/routing";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const chivo = Chivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://www.moroccancosmeticswholesale.com";

type LocaleLayoutProps = LayoutProps<"/[locale]">;

export const instant = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : locale === "ar" ? "ar_MA" : "en_US",
      url: siteUrl,
      siteName: t("title"),
      title: t("ogTitle"),
      description: t("description"),
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t("ogTitle"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("description"),
      images: ["/og-image.jpg"],
    },
    alternates: {
      languages: {
        en: "/",
        fr: "/fr",
        ar: "/ar",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = localeDir(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${dmSans.variable} ${chivo.variable} ${cairo.variable} scroll-smooth h-full antialiased ${locale === "ar" ? "font-arabic" : ""}`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster richColors closeButton position="top-right" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
