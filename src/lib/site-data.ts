import {
  BadgeCheck,
  FileText,
  FlaskConical,
  Globe2,
  Layers,
  Package,
  PackageSearch,
  Palette,
  ShoppingBag,
  Tag,
  Truck,
  type LucideIcon,
} from "lucide-react";

export const introFeatureCards = [
  {
    title: "Manufacturing Range",
    description:
      "Skincare, haircare, cosmetic oils, black soap, and Moroccan bath products — produced for wholesale and private label clients.",
    icon: PackageSearch,
  },
  {
    title: "ISO & GMP Standards",
    description:
      "Consistent factory quality with international certification standards for safe, effective products ready for export.",
    icon: BadgeCheck,
  },
  {
    title: "Worldwide Shipping",
    description:
      "Documentation, logistics, and export support for Europe, the Americas, Africa, and Gulf markets.",
    icon: Globe2,
  },
] as const;

export { faqItems } from "@/lib/faq";

export const heroHighlights = [
  "100% pure Moroccan cosmetics",
  "High quality and wholesale prices",
  "Authentic ingredients",
] as const;

export const manufacturingProducts = [
  "Skincare products",
  "Natural hair products",
  "Cosmetic oils",
  "Black soap and Moroccan bath products",
] as const;

export const stats = [
  { value: "500+", label: "Products" },
  { value: "ISO", label: "Certified" },
  { value: "GMP", label: "Compliant" },
] as const;

export type WholesalerAdvantage = {
  title: string;
  icon: LucideIcon;
  linkKey?: "wholesale" | "catalog" | "privateLabel" | "boutique";
};

export const wholesalerAdvantages: WholesalerAdvantage[] = [
  {
    title: "Competitive wholesale prices",
    icon: Tag,
    linkKey: "wholesale",
  },
  {
    title: "Wide variety of products",
    icon: Layers,
    linkKey: "catalog",
  },
  {
    title: "Custom packaging and branding",
    icon: Palette,
    linkKey: "privateLabel",
  },
  {
    title: "Flexibility in quantities and orders",
    icon: ShoppingBag,
    linkKey: "boutique",
  },
];

export const ingredients = [
  {
    slug: "cosmetic-food-argan-oil",
    name: "Cosmetic & Food Argan Oil",
    description: "Pure Moroccan liquid gold",
    image: "/assets/products/moroccan-argan-oil-wholesale.jpg",
    alt: "Authentic Moroccan Argan Oil in various grades for cosmetic and culinary use",
  },
  {
    slug: "prickly-pear-seed-oil",
    name: "Prickly Pear Seed Oil",
    description: "Intense anti-aging powerhouse",
    image: "/assets/products/prickly-pear-seed-oil-wholesale.jpg",
    alt: "Organic Prickly Pear Seed Oil, known for its powerful anti-aging properties",
  },
  {
    slug: "moroccan-nila-powder",
    name: "Nila",
    description: "Brightening blue powder for radiant skin",
    image: "/assets/products/moroccan-nila-powder.jpg",
    alt: "Pure Nila powder, a traditional Moroccan blue pigment for skin brightening",
  },
  {
    slug: "aker-fassi-powder",
    name: "Aker Fassi",
    description: "Traditional Moroccan beauty powders",
    image: "/assets/products/aker-fassi-powder.jpg",
    alt: "Aker Fassi, a natural Moroccan poppy and pomegranate powder for lips and cheeks",
  },
  {
    slug: "spa-ritual-essentials",
    name: "Spa Ritual Essentials",
    description: "Black Soap, Ghassoul & Rose Water",
    image: "/assets/products/moroccan-spa-ritual-essentials.jpg",
    alt: "Collection of traditional Moroccan spa products including Rose Water and Ghassoul",
  },
] as const;

export const exportSteps = [
  {
    step: "01",
    title: "Documentation",
    description: "Complete legal documentation",
    icon: FileText,
  },
  {
    step: "02",
    title: "Analysis",
    description: "Laboratory analysis of products",
    icon: FlaskConical,
  },
  {
    step: "03",
    title: "Standards",
    description: "Packaging that meets international standards",
    icon: Package,
  },
  {
    step: "04",
    title: "Logistics",
    description: "Efficient and fast logistics",
    icon: Truck,
  },
] as const;

export const buyingGuideParagraphs = [
  "We offer private label services for Moroccan cosmetics, with the ability to customize the formula, packaging, and brand identity, making us the ideal partner for anyone seeking a Moroccan cosmetics manufacturer and wholesaler. All products are prepared according to approved quality standards for export to international markets.",
  "As a Moroccan cosmetics exporter, we provide comprehensive export solutions, including documentation, international shipping, and customized packaging, with a minimum order quantity (MOQ) of 50 pieces and competitive wholesale prices. Our products include skincare, haircare, beauty oils, and Moroccan bath products.",
  "Our Moroccan cosmetics wholesale service is characterized by flexibility, consistent quality, and fast turnaround, ensuring long-term partnerships with distributors and brands worldwide.",
] as const;

export const catalogFeatures = [
  "Private Label Available",
  "MOQ: 50 PCS",
  "Worldwide Shipping Available",
  "Free Samples Available",
] as const;

export type FooterBrandLogo = {
  name: string;
  src: string;
  /** Extra classes for logos that need a brand-colored tile. */
  tileClassName?: string;
};

export const footerPaymentLogos: FooterBrandLogo[] = [
  { name: "Mastercard", src: "/assets/footer/logos/mastercard.svg" },
  { name: "Visa", src: "/assets/footer/logos/visa.svg" },
  { name: "American Express", src: "/assets/footer/logos/amex.svg" },
  { name: "Discover", src: "/assets/footer/logos/discover.svg" },
  {
    name: "Western Union",
    src: "/assets/footer/logos/western-union.svg",
    tileClassName: "bg-black p-0",
  },
  { name: "MoneyGram", src: "/assets/footer/logos/moneygram.svg" },
  { name: "Attijariwafa Bank", src: "/assets/footer/logos/attijariwafa-mark.svg" },
  { name: "Wise", src: "/assets/footer/logos/wise.svg" },
  { name: "Stripe", src: "/assets/footer/logos/stripe.svg" },
];

export const footerShippingLogos: FooterBrandLogo[] = [
  { name: "FedEx", src: "/assets/footer/logos/fedex.svg" },
  { name: "UPS", src: "/assets/footer/logos/ups.svg" },
  {
    name: "DHL Express",
    src: "/assets/footer/logos/dhl-express.svg",
    tileClassName: "bg-[#FFCC00] p-1.5",
  },
  { name: "EMS", src: "/assets/footer/logos/ems.svg" },
  { name: "Aramex", src: "/assets/footer/logos/aramex.svg" },
  { name: "TNT", src: "/assets/footer/logos/tnt.svg" },
  { name: "Chronopost", src: "/assets/footer/logos/chronopost.svg" },
];

export const footerCompanyLinks = [
  { key: "aboutUs", href: "/about" },
  { key: "whoWeServe", href: "/about#clients" },
  { key: "manufacturing", href: "/about#production" },
  { key: "ourQuality", href: "/about#quality" },
  { key: "exportServices", href: "/about#export" },
  { key: "benefitsGuides", href: "/benefits" },
  { key: "blog", href: "/blog" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
] as const;

export const footerProductLinks = [
  { key: "arganOil", href: "/products/cosmetic-food-argan-oil" },
  { key: "pricklyPearOil", href: "/products/prickly-pear-seed-oil" },
  { key: "ghassoul", href: "/products/moroccan-ghassoul-clay" },
  { key: "roseWater", href: "/products/moroccan-rose-water" },
  { key: "blackSoap", href: "/products/moroccan-black-soap" },
] as const;

export const footerServiceLinks = [
  { key: "wholesaleSupply", href: "/private-label" },
  { key: "privateLabel", href: "/private-label" },
  { key: "bulkPackaging", href: "/private-label" },
  { key: "customFormulas", href: "/private-label" },
  { key: "globalShipping", href: "/private-label" },
] as const;
