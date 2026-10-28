import {
  BadgeCheck,
  FlaskConical,
  Globe2,
  Package,
  Palette,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type PrivateLabelService = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const privateLabelServices: PrivateLabelService[] = [
  {
    title: "Custom branding",
    description:
      "Your logo, label design, and brand story on Moroccan cosmetics manufactured for your market.",
    icon: Palette,
  },
  {
    title: "Packaging options",
    description:
      "Bottles, jars, pouches, and spa kits — retail-ready formats or bulk supply for your own filling line.",
    icon: Package,
  },
  {
    title: "Formula support",
    description:
      "Start from proven Moroccan bases or adapt ingredients and concentrations with our formulation team.",
    icon: FlaskConical,
  },
  {
    title: "Quality & compliance",
    description:
      "ISO and GMP oriented production with documentation suited to export and retail compliance needs.",
    icon: BadgeCheck,
  },
  {
    title: "Export logistics",
    description:
      "International shipping, customs documentation, and coordination with major carriers worldwide.",
    icon: Truck,
  },
  {
    title: "Global markets",
    description:
      "Programs for Europe, the Americas, Africa, and Gulf distributors building Moroccan beauty lines.",
    icon: Globe2,
  },
];

export const privateLabelProcess = [
  {
    step: "01",
    title: "Share your brief",
    description:
      "Tell us your product idea, target market, packaging preferences, and estimated volumes.",
  },
  {
    step: "02",
    title: "Select products & formats",
    description:
      "Choose from our catalog — oils, clays, soaps, waters, powders — or discuss a custom assortment.",
  },
  {
    step: "03",
    title: "Branding & samples",
    description:
      "We align on labels, artwork, and specifications. Samples can be arranged before production.",
  },
  {
    step: "04",
    title: "Production & QC",
    description:
      "Manufacturing in Morocco with quality checks and preparation for wholesale or retail dispatch.",
  },
  {
    step: "05",
    title: "Export & delivery",
    description:
      "Documentation, packing lists, and shipment to your warehouse or distribution partner.",
  },
] as const;

export const privateLabelHighlights = [
  "MOQ from 50 pieces depending on product and packaging",
  "Argan oil, prickly pear, black soap, ghassoul, nila, aker fassi, rose water, and spa kits",
  "Wholesale pricing with manufacturer-direct supply",
  "Private label for spas, hotels, e-commerce brands, and distributors",
] as const;

export const privateLabelFaq = [
  {
    question: "What is private label Moroccan cosmetics manufacturing?",
    answer:
      "Private label means we produce Moroccan cosmetics under your brand — with your packaging and identity — while you benefit from our factory, ingredients, and export infrastructure in Marrakesh.",
  },
  {
    question: "Which products can I private label?",
    answer:
      "Most of our wholesale range is available for private label, including argan oil, prickly pear seed oil, black soap, ghassoul clay, nila powder, aker fassi, rose water, and curated spa ritual sets.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "MOQ typically starts at 50 pieces depending on the product type, bottle size, and label run. Contact us for exact terms on your SKU mix.",
  },
  {
    question: "Can you help with label design and regulatory documents?",
    answer:
      "We support label application, product specifications, and export documentation. Share your market requirements so we can align ingredients lists and compliance paperwork.",
  },
  {
    question: "Do you ship private label orders internationally?",
    answer:
      "Yes. We export worldwide with established shipping partners and provide the documentation needed for customs clearance.",
  },
] as const;

export const privateLabelProductSlugs = [
  "cosmetic-food-argan-oil",
  "prickly-pear-seed-oil",
  "moroccan-black-soap",
  "moroccan-ghassoul-clay",
  "moroccan-nila-powder",
  "aker-fassi-powder",
  "moroccan-rose-water",
  "spa-ritual-essentials",
] as const;

export const privateLabelIntro = {
  eyebrow: "Private label manufacturing",
  title: "Launch your Moroccan beauty brand with our factory",
  paragraphs: [
    "Moroccan Cosmetics Wholesale is a manufacturer, wholesaler, and exporter based in Marrakesh. We help brands, spas, and distributors create private label lines using authentic Moroccan ingredients and export-ready quality standards.",
    "From single hero SKUs to full hammam and skincare collections, we combine traditional know-how with modern production — so you can sell under your name without building a factory from scratch.",
  ],
  badgeIcon: Sparkles,
  badgeText: "Formula · Packaging · Brand · Export",
} as const;
