import { Building2, Handshake, MapPin, ShieldCheck, Users } from "lucide-react";

export const aboutSectionIds = {
  clients: "clients",
  production: "production",
  quality: "quality",
  export: "export",
} as const;

export const aboutPillars = [
  { key: "factory", icon: Building2 },
  { key: "partnerships", icon: Handshake },
  { key: "sourcing", icon: MapPin },
  { key: "compliance", icon: ShieldCheck },
] as const;

export const aboutStats = [
  { key: "moq", value: "MOQ 50" },
  { key: "refs", value: "500+" },
  { key: "b2b", value: "B2B" },
] as const;

export const aboutClientKeys = ["item1", "item2", "item3", "item4"] as const;
export const aboutQualityKeys = ["item1", "item2", "item3", "item4"] as const;
export const aboutAudienceIcon = Users;
