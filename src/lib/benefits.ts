export type BenefitGuideMeta = {
  slug: string;
  image: string;
  productSlug: string;
};

export type BenefitGuideCopy = {
  title: string;
  cardTitle: string;
  summary: string;
  tags: string[];
  alt: string;
  introTitle: string;
  introParagraphs: string[];
  keyFacts: string[];
  benefitsHeading: string;
  benefits: { title: string; description: string }[];
  wholesaleTitle: string;
  wholesaleParagraph: string;
  ctaTitle: string;
  ctaDescription: string;
};

export type BenefitGuide = BenefitGuideMeta & BenefitGuideCopy;

export const benefitGuides: BenefitGuideMeta[] = [
  {
    slug: "pure-argan-oil-skin-hair",
    image: "/assets/products/moroccan-argan-oil-wholesale.jpg",
    productSlug: "cosmetic-food-argan-oil",
  },
  {
    slug: "prickly-pear-seed-oil-benefits",
    image: "/assets/products/prickly-pear-seed-oil-wholesale.jpg",
    productSlug: "prickly-pear-seed-oil",
  },
  {
    slug: "moroccan-black-soap-benefits",
    image: "/assets/products/moroccan-black-soap.jpg",
    productSlug: "moroccan-black-soap",
  },
  {
    slug: "moroccan-blue-nila-benefits",
    image: "/assets/products/moroccan-nila-powder.jpg",
    productSlug: "moroccan-nila-powder",
  },
  {
    slug: "aker-fassi-benefits",
    image: "/assets/products/aker-fassi-powder.jpg",
    productSlug: "aker-fassi-powder",
  },
  {
    slug: "moroccan-rhassoul-clay-benefits",
    image: "/assets/products/moroccan-ghassoul-clay.jpg",
    productSlug: "moroccan-ghassoul-clay",
  },
  {
    slug: "moroccan-rose-water-benefits",
    image: "/assets/products/moroccan-rose-water.jpg",
    productSlug: "moroccan-rose-water",
  },
];

export function getBenefitMetaBySlug(slug: string): BenefitGuideMeta | undefined {
  return benefitGuides.find((item) => item.slug === slug);
}
