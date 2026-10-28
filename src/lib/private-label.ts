import {
  BadgeCheck,
  FlaskConical,
  Globe2,
  Package,
  Palette,
  Truck,
  type LucideIcon,
} from "lucide-react";

export const privateLabelServiceKeys = [
  "branding",
  "packaging",
  "formula",
  "quality",
  "logistics",
  "markets",
] as const;

export type PrivateLabelServiceKey = (typeof privateLabelServiceKeys)[number];

export const privateLabelServiceIcons: Record<PrivateLabelServiceKey, LucideIcon> = {
  branding: Palette,
  packaging: Package,
  formula: FlaskConical,
  quality: BadgeCheck,
  logistics: Truck,
  markets: Globe2,
};

export const privateLabelProcessKeys = ["brief", "select", "branding", "production", "export"] as const;

export type PrivateLabelProcessKey = (typeof privateLabelProcessKeys)[number];

export const privateLabelProcessSteps: { key: PrivateLabelProcessKey; step: string }[] = [
  { key: "brief", step: "01" },
  { key: "select", step: "02" },
  { key: "branding", step: "03" },
  { key: "production", step: "04" },
  { key: "export", step: "05" },
];

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
