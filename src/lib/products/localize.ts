import { getMessages } from "next-intl/server";
import type { CatalogProduct } from "@/lib/products";
import { getFullProduct, type FullProduct } from "@/lib/products/page-content";

export const homeProductSlugs = [
  "cosmetic-food-argan-oil",
  "prickly-pear-seed-oil",
  "moroccan-nila-powder",
  "aker-fassi-powder",
  "spa-ritual-essentials",
] as const;

type HomeProductSlug = (typeof homeProductSlugs)[number];

function isHomeProductSlug(slug: string): slug is HomeProductSlug {
  return (homeProductSlugs as readonly string[]).includes(slug);
}

type LocalizedProductCopy = Pick<
  FullProduct,
  | "categoryLabel"
  | "title"
  | "summary"
  | "alt"
  | "heroSubtitle"
  | "description"
  | "highlights"
  | "benefits"
  | "faq"
  | "benefitsIntro"
  | "detailsHeading"
  | "detailsParagraphs"
  | "detailsNote"
  | "usageHeading"
  | "usageSubtitle"
  | "usageSteps"
  | "faqIntro"
  | "specs"
  | "ctaTitle"
  | "ctaDescription"
>;

async function getProductCopy(slug: HomeProductSlug): Promise<LocalizedProductCopy> {
  const messages = await getMessages();
  return messages.products.items[slug] as LocalizedProductCopy;
}

export async function localizeCatalogProduct(product: CatalogProduct): Promise<CatalogProduct> {
  if (!isHomeProductSlug(product.slug)) return product;

  const copy = await getProductCopy(product.slug);
  return {
    ...product,
    categoryLabel: copy.categoryLabel,
    title: copy.title,
    summary: copy.summary,
    alt: copy.alt,
    heroSubtitle: copy.heroSubtitle,
    description: copy.description,
    highlights: copy.highlights,
    benefits: copy.benefits,
    faq: copy.faq,
  };
}

export async function getLocalizedFullProduct(slug: string): Promise<FullProduct | undefined> {
  const product = getFullProduct(slug);
  if (!product) return undefined;
  if (!isHomeProductSlug(slug)) return product;

  const copy = await getProductCopy(slug);
  return {
    ...product,
    ...copy,
    image: product.image,
  };
}
