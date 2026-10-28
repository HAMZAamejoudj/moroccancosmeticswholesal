import {
  Bubbles,
  Droplets,
  Flower2,
  Globe2,
  Layers,
  Package,
  Paintbrush,
  Palette,
  ShieldCheck,
  Sparkles,
  Sun,
  type LucideIcon,
} from "lucide-react";

export type CatalogProduct = {
  slug: string;
  categoryLabel: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  heroSubtitle: string;
  description: string;
  highlights: string[];
  benefits: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export const productTrustBadges = [
  { label: "ISO & GMP Certified", icon: ShieldCheck },
  { label: "100% Pure Natural Ingredients", icon: Droplets },
  { label: "Worldwide Export", icon: Globe2 },
  { label: "MOQ 50 PCS — Private Label", icon: Package },
] as const;

export const catalogProducts: CatalogProduct[] = [
  {
    slug: "cosmetic-food-argan-oil",
    categoryLabel: "Argan Oil — Bulk Supply",
    title: "Cosmetic & Food Argan Oil Wholesale",
    summary:
      "Pure Moroccan liquid gold for cosmetic brands, food-grade partners, spas, and wholesale distributors.",
    image: "/assets/products/moroccan-argan-oil-wholesale.jpg",
    alt: "Authentic Moroccan Argan Oil in various grades for cosmetic and culinary use",
    heroSubtitle: "Virgin argan oil from Moroccan manufacturers",
    description:
      "Our argan oil is sourced and processed in Morocco for cosmetic and culinary applications. As a Moroccan cosmetics manufacturer and wholesaler, we supply consistent batches with export documentation, flexible packaging, and private label options for international buyers.",
    highlights: [
      "Cosmetic and food-grade supply available",
      "Rich in vitamin E and essential fatty acids",
      "Ideal for serums, hair treatments, and formulations",
      "Private label bottles, drums, and bulk packaging",
      "Export-ready documentation and lab support",
    ],
    benefits: [
      {
        title: "Deep hydration",
        description:
          "Supports skin barrier recovery and moisture retention for face, body, and hair care lines.",
      },
      {
        title: "Anti-aging applications",
        description:
          "Popular in premium skincare formulas targeting elasticity, radiance, and mature skin.",
      },
      {
        title: "Multi-purpose wholesale",
        description:
          "Used across skincare, haircare, spa rituals, and culinary product ranges.",
      },
      {
        title: "Manufacturer direct pricing",
        description:
          "Buy from source with competitive Moroccan cosmetics wholesale rates and MOQ flexibility.",
      },
    ],
    faq: [
      {
        question: "Can I order argan oil for both cosmetic and food applications?",
        answer:
          "Yes. We supply cosmetic-grade and food-grade argan oil depending on your market and documentation requirements.",
      },
      {
        question: "What is the MOQ for wholesale argan oil?",
        answer:
          "Our wholesale service starts from 50 pieces depending on packaging format and product specification.",
      },
    ],
  },
  {
    slug: "prickly-pear-seed-oil",
    categoryLabel: "Prickly Pear Seed Oil",
    title: "Prickly Pear Seed Oil Wholesale",
    summary:
      "Intense anti-aging powerhouse oil for luxury skincare, serums, and professional cosmetic formulations.",
    image: "/assets/products/prickly-pear-seed-oil-wholesale.jpg",
    alt: "Organic Prickly Pear Seed Oil with powerful anti-aging properties",
    heroSubtitle: "Premium cactus seed oil for high-value skincare",
    description:
      "Prickly pear seed oil is one of the most sought-after Moroccan beauty oils for anti-aging and restorative skincare. We manufacture and export this ingredient for brands, distributors, and private label projects worldwide.",
    highlights: [
      "Highly valued in premium anti-aging formulas",
      "Light texture suitable for facial serums",
      "Export quality with manufacturer support",
      "Private label and custom packaging available",
      "Bulk supply for wholesalers and distributors",
    ],
    benefits: [
      {
        title: "Anti-aging focus",
        description:
          "Used in high-end creams and serums targeting fine lines, firmness, and skin renewal.",
      },
      {
        title: "Luxury positioning",
        description:
          "Helps brands build premium Moroccan natural cosmetics collections.",
      },
      {
        title: "Formulation friendly",
        description:
          "Suitable for facial oils, night treatments, and professional spa products.",
      },
      {
        title: "Global export",
        description:
          "Shipped with wholesale export documentation for international markets.",
      },
    ],
    faq: [
      {
        question: "Is prickly pear seed oil suitable for private label serums?",
        answer:
          "Yes. It is commonly used in private label facial serums, anti-aging oils, and premium skincare lines.",
      },
      {
        question: "Do you provide samples before bulk orders?",
        answer:
          "Sample requests can be discussed when you contact us for the wholesale catalog and quotation.",
      },
    ],
  },
  {
    slug: "moroccan-black-soap",
    categoryLabel: "Moroccan Black Soap",
    title: "Moroccan Black Soap (Savon Beldi) Wholesale",
    summary:
      "Traditional hammam black soap for spas, salons, distributors, and Moroccan bath product ranges.",
    image: "/assets/products/moroccan-black-soap.jpg",
    alt: "Traditional Moroccan black soap for hammam and spa wholesale",
    heroSubtitle: "Authentic savon beldi for spa and wholesale supply",
    description:
      "Moroccan black soap is a core product in hammam rituals and natural body care. We supply black soap in bulk for wholesalers, spa brands, and private label bath collections exported from Morocco.",
    highlights: [
      "Traditional Moroccan bath and hammam use",
      "Suitable for spa menus and body care brands",
      "Bulk and private label packaging options",
      "Part of our Moroccan bath product range",
      "Manufactured for consistent wholesale quality",
    ],
    benefits: [
      {
        title: "Spa ritual essential",
        description:
          "Ideal for hammam treatments, exfoliation rituals, and professional spa services.",
      },
      {
        title: "Wholesale bath category",
        description:
          "Complements ghassoul, rose water, and argan oil in complete Moroccan spa lines.",
      },
      {
        title: "Brand-ready supply",
        description:
          "Available for distributors building natural Moroccan cosmetics catalogs.",
      },
      {
        title: "Export support",
        description:
          "Documentation and logistics handled for international wholesale buyers.",
      },
    ],
    faq: [
      {
        question: "Can black soap be included in a private label spa range?",
        answer:
          "Yes. We support private label packaging for Moroccan bath and spa product collections.",
      },
    ],
  },
  {
    slug: "moroccan-nila-powder",
    categoryLabel: "Moroccan Nila Powder",
    title: "Moroccan Nila Powder Wholesale",
    summary:
      "Brightening blue powder for radiant skin, traditional beauty rituals, and natural cosmetic formulations.",
    image: "/assets/products/moroccan-nila-powder.jpg",
    alt: "Pure Nila powder, a traditional Moroccan blue pigment for skin brightening",
    heroSubtitle: "Traditional Moroccan nila for skincare and hair care",
    description:
      "Nila powder is a distinctive Moroccan beauty ingredient used in masks, brightening treatments, and traditional skincare rituals. We supply nila in bulk to wholesalers, manufacturers, and export partners.",
    highlights: [
      "Traditional Moroccan brightening ingredient",
      "Used in face masks and beauty rituals",
      "Bulk supply for distributors and formulators",
      "Suitable for spa and salon product lines",
      "Private label options available",
    ],
    benefits: [
      {
        title: "Ritual heritage",
        description:
          "Supports brands offering authentic Moroccan beauty experiences and treatments.",
      },
      {
        title: "Skincare versatility",
        description:
          "Used in masks, cleansers, and specialty brightening product concepts.",
      },
      {
        title: "Wholesale packaging",
        description:
          "Flexible order quantities for boutique and large-scale distributors.",
      },
      {
        title: "Natural positioning",
        description:
          "Fits 100% pure Moroccan cosmetics wholesale and export catalogs.",
      },
    ],
    faq: [
      {
        question: "Is nila powder sold for cosmetic manufacturing?",
        answer:
          "Yes. We supply nila for wholesale, formulation projects, and private label beauty lines.",
      },
    ],
  },
  {
    slug: "aker-fassi-powder",
    categoryLabel: "Aker Fassi — Natural Tint",
    title: "Aker Fassi Wholesale",
    summary:
      "Traditional Moroccan beauty powder for lips, cheeks, and natural tint formulations.",
    image: "/assets/products/aker-fassi-powder.jpg",
    alt: "Aker Fassi, a natural Moroccan poppy and pomegranate powder",
    heroSubtitle: "Authentic Moroccan aker fassi for beauty brands",
    description:
      "Aker fassi is a iconic Moroccan ingredient used in traditional beauty and natural color cosmetics. We export aker fassi for wholesalers, private label brands, and distributors serving global markets.",
    highlights: [
      "Traditional lip and cheek tint ingredient",
      "Popular in Moroccan natural beauty lines",
      "Bulk powder supply from manufacturer source",
      "Private label and custom packaging support",
      "Export-ready wholesale service",
    ],
    benefits: [
      {
        title: "Authentic branding",
        description:
          "Helps brands tell a genuine Moroccan beauty story with a recognized ingredient.",
      },
      {
        title: "Color cosmetics potential",
        description:
          "Used in powders, tints, and hybrid skincare-color product concepts.",
      },
      {
        title: "Wholesale flexibility",
        description:
          "Order quantities adapted to boutique brands and larger distributors.",
      },
      {
        title: "Manufacturer partnership",
        description:
          "Work directly with a Moroccan cosmetics manufacturer and exporter.",
      },
    ],
    faq: [
      {
        question: "Can aker fassi be used in private label beauty products?",
        answer:
          "Yes. It is suitable for private label powders, tints, and traditional Moroccan beauty collections.",
      },
    ],
  },
  {
    slug: "moroccan-rose-water",
    categoryLabel: "Organic Rose Water",
    title: "Moroccan Rose Water Wholesale",
    summary:
      "Steam-distilled rose water for toners, mists, spa treatments, and cosmetic formulations.",
    image: "/assets/products/moroccan-rose-water.jpg",
    alt: "Collection of traditional Moroccan spa products including Rose Water",
    heroSubtitle: "Moroccan rose water for skincare and spa lines",
    description:
      "Rose water is a staple in Moroccan skincare, spa rituals, and natural cosmetic manufacturing. We supply rose water wholesale with export support, private label bottles, and bulk options.",
    highlights: [
      "Ideal for toners, mists, and cleansers",
      "Popular spa and hammam companion product",
      "Bulk and private label packaging",
      "Part of Moroccan bath and skincare ranges",
      "Exported with wholesale documentation",
    ],
    benefits: [
      {
        title: "Spa and skincare use",
        description:
          "Used in facial mists, toners, masks, and professional treatment menus.",
      },
      {
        title: "Catalog anchor product",
        description:
          "Essential item for Moroccan cosmetics wholesale and retail assortments.",
      },
      {
        title: "Private label ready",
        description:
          "Custom labels and packaging for brands entering the market quickly.",
      },
      {
        title: "Global shipping",
        description:
          "Supported by our export and logistics process for international clients.",
      },
    ],
    faq: [
      {
        question: "Do you offer rose water for private label bottles?",
        answer:
          "Yes. Private label packaging and branding are part of our wholesale and manufacturing services.",
      },
    ],
  },
  {
    slug: "moroccan-ghassoul-clay",
    categoryLabel: "Ghassoul Clay — Bulk Supply",
    title: "Moroccan Ghassoul Clay Wholesale",
    summary:
      "Traditional rhassoul clay for hair masks, face masks, hammam rituals, and spa wholesale lines.",
    image: "/assets/products/moroccan-ghassoul-clay.jpg",
    alt: "Moroccan ghassoul clay for masks and hammam wholesale supply",
    heroSubtitle: "Atlas-style rhassoul clay for spa and hair care",
    description:
      "Ghassoul clay is a foundational Moroccan ingredient for cleansing masks, spa treatments, and natural hair care. We supply ghassoul in bulk to wholesalers, manufacturers, and export partners.",
    highlights: [
      "Used in face masks and hair cleansing rituals",
      "Core hammam and spa category product",
      "Bulk supply with export documentation",
      "Pairs with black soap and rose water",
      "MOQ-friendly wholesale orders",
    ],
    benefits: [
      {
        title: "Spa category strength",
        description:
          "Build complete Moroccan hammam assortments with ghassoul as a hero ingredient.",
      },
      {
        title: "Hair and skin applications",
        description:
          "Suitable for masks, clays, and treatment products for salons and spas.",
      },
      {
        title: "Wholesale export",
        description:
          "Shipped as part of our Moroccan cosmetics export service worldwide.",
      },
      {
        title: "Private label support",
        description:
          "Custom packaging available for brands and distributors.",
      },
    ],
    faq: [
      {
        question: "Can I mix ghassoul with other products in one wholesale order?",
        answer:
          "Yes. We offer flexible wholesale orders across skincare, haircare, oils, and Moroccan bath products.",
      },
    ],
  },
  {
    slug: "spa-ritual-essentials",
    categoryLabel: "Spa Ritual Essentials",
    title: "Moroccan Spa Ritual Essentials Wholesale",
    summary:
      "Black soap, ghassoul, and rose water combined for complete hammam and spa wholesale programs.",
    image: "/assets/products/moroccan-spa-ritual-essentials.jpg",
    alt: "Moroccan spa ritual essentials including black soap, ghassoul and rose water",
    heroSubtitle: "Complete Moroccan bath product assortment",
    description:
      "Our spa ritual essentials combine the most requested Moroccan bath products for distributors who want a ready-made category offer. Ideal for spas, hotels, salons, and private label hammam collections.",
    highlights: [
      "Bundle-friendly spa and hammam category",
      "Includes core Moroccan bath ingredients",
      "Wholesale and private label opportunities",
      "Strong catalog offer for export buyers",
      "Manufactured and supplied from Morocco",
    ],
    benefits: [
      {
        title: "Complete category offer",
        description:
          "Sell a full Moroccan spa story instead of single-ingredient listings.",
      },
      {
        title: "Faster market entry",
        description:
          "Help retailers and spas launch authentic ritual lines quickly.",
      },
      {
        title: "Export assortment",
        description:
          "Designed for international wholesalers and hospitality buyers.",
      },
      {
        title: "Custom branding",
        description:
          "Private label packaging tailored to your brand identity.",
      },
    ],
    faq: [
      {
        question: "Can spa essentials be customized for my brand?",
        answer:
          "Yes. We offer private label services with custom packaging and product selection for spa ranges.",
      },
    ],
  },
];

export type ProductCategory = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const productCategories: ProductCategory[] = [
  {
    slug: "cosmetic-food-argan-oil",
    title: "Argan Oil",
    description: "Bulk Moroccan argan oil for cosmetics, food partners, spas, and private label.",
    icon: Droplets,
  },
  {
    slug: "prickly-pear-seed-oil",
    title: "Prickly Pear Oil",
    description: "Premium anti-aging oil for high-value skincare and serum formulations.",
    icon: Sun,
  },
  {
    slug: "moroccan-black-soap",
    title: "Black Soap",
    description: "Traditional savon beldi for hammam programs and wholesale bath lines.",
    icon: Bubbles,
  },
  {
    slug: "moroccan-nila-powder",
    title: "Nila Powder",
    description: "Moroccan nila for brightening masks, rituals, and natural beauty products.",
    icon: Paintbrush,
  },
  {
    slug: "aker-fassi-powder",
    title: "Aker Fassi",
    description: "Natural Moroccan tint for lips, cheeks, and traditional beauty formulas.",
    icon: Palette,
  },
  {
    slug: "moroccan-rose-water",
    title: "Rose Water",
    description: "Moroccan rose water for toners, mists, spa menus, and skincare manufacturing.",
    icon: Flower2,
  },
  {
    slug: "moroccan-ghassoul-clay",
    title: "Ghassoul Clay",
    description: "Rhassoul clay for masks, spas, hair care, and hammam wholesale supply.",
    icon: Layers,
  },
];

export function getProductBySlug(slug: string): CatalogProduct | undefined {
  return catalogProducts.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 3): CatalogProduct[] {
  return catalogProducts.filter((product) => product.slug !== slug).slice(0, limit);
}

export { getFullProduct } from "@/lib/products/page-content";
export type { FullProduct } from "@/lib/products/page-content";
