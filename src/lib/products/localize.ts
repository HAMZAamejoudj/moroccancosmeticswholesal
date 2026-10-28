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

type ProductItems = Awaited<ReturnType<typeof getMessages>>["products"]["items"];
type LocalizedProductCopy = ProductItems[keyof ProductItems];

function getItemCopy(
  messages: Awaited<ReturnType<typeof getMessages>>,
  slug: string,
): LocalizedProductCopy | undefined {
  return (messages.products.items as Record<string, LocalizedProductCopy | undefined>)[slug];
}

export async function localizeCatalogProduct(product: CatalogProduct): Promise<CatalogProduct> {
  const messages = await getMessages();
  const copy = getItemCopy(messages, product.slug);
  if (!copy) return product;

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

  const messages = await getMessages();
  const copy = getItemCopy(messages, slug);
  if (!copy) return product;

  return {
    ...product,
    ...copy,
    image: product.image,
  };
}
