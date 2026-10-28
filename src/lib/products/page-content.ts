import { catalogProducts, type CatalogProduct } from "@/lib/products";

export type ProductSpec = { label: string; value: string };
export type ProductStep = { title: string; description: string };

export type ProductPageContent = {
  benefitsIntro: string;
  detailsHeading: string;
  detailsParagraphs: string[];
  detailsNote?: string;
  usageHeading: string;
  usageSubtitle: string;
  usageSteps: ProductStep[];
  faqIntro: string;
  specs: ProductSpec[];
  ctaTitle: string;
  ctaDescription: string;
  extraBenefits: { title: string; description: string }[];
  extraFaq: { question: string; answer: string }[];
};

const exportSpecs: ProductSpec[] = [
  { label: "Origin", value: "Morocco" },
  { label: "MOQ", value: "From 50 pieces" },
  { label: "Certification", value: "ISO & GMP manufacturing standards" },
  { label: "Services", value: "Bulk supply, private label, export" },
];

export const productPageContent: Record<string, ProductPageContent> = {
  "cosmetic-food-argan-oil": {
    benefitsIntro:
      "Cold-pressed Moroccan argan oil with consistent wholesale quality — ideal for cosmetic formulations, haircare, spa lines, and export programs.",
    detailsHeading: "100% pure Moroccan argan oil — wholesale supply",
    detailsParagraphs: [
      "Argan oil remains the flagship ingredient of Moroccan natural cosmetics. Our manufacturing and wholesale service supplies cosmetic-grade and food-grade argan oil with export documentation for international distributors and brands.",
      "We support bulk drums, retail-ready bottles, and private label packaging. Every order is prepared according to approved quality standards for Moroccan cosmetics export markets.",
    ],
    detailsNote:
      "Storage: keep in a cool, dry place away from direct light. Shelf life depends on grade and packaging — details provided with your quotation.",
    usageHeading: "How to use argan oil in your product line",
    usageSubtitle: "For skincare, haircare, spa treatments, and wholesale formulations.",
    usageSteps: [
      {
        title: "Define grade",
        description:
          "Choose cosmetic or food application, packaging format, and target market documentation needs.",
      },
      {
        title: "Request quote",
        description:
          "Contact us with volume, packaging, and destination for MOQ and wholesale pricing.",
      },
      {
        title: "Sample & approve",
        description:
          "Evaluate quality and documentation before confirming bulk production or private label run.",
      },
      {
        title: "Export & scale",
        description:
          "We prepare export documents, logistics, and repeat orders for long-term wholesale partnerships.",
      },
    ],
    faqIntro:
      "We supply wholesale argan oil directly from our Moroccan cosmetics manufacturing and export operation. Contact us for MOQ, samples, and private label options.",
    specs: [
      ...exportSpecs,
      { label: "Applications", value: "Skin, hair, nails, culinary (food grade)" },
      { label: "Packaging", value: "Bottles, bulk containers, private label" },
    ],
    ctaTitle: "Looking for a reliable argan oil wholesaler?",
    ctaDescription:
      "Request a quote for bulk argan oil, private label bottles, or export supply. We respond quickly to distributors and brands worldwide.",
    extraBenefits: [
      {
        title: "Hair repair & shine",
        description:
          "Popular in hair serums, conditioners, and salon treatment lines exported from Morocco.",
      },
      {
        title: "Global export ready",
        description:
          "Documentation, laboratory support, and logistics for international wholesale buyers.",
      },
    ],
    extraFaq: [
      {
        question: "How do I request a bulk argan oil quote?",
        answer:
          "Use our catalog contact form or WhatsApp. Share quantity, packaging, grade, and shipping destination for a tailored wholesale quotation.",
      },
      {
        question: "Is private label available for argan oil?",
        answer:
          "Yes. We offer private label services including custom bottles, labels, and brand packaging with competitive MOQ terms.",
      },
      {
        question: "What export documents do you provide?",
        answer:
          "We support export documentation including commercial invoice, certificate of origin, and product analysis according to order requirements.",
      },
    ],
  },
  "prickly-pear-seed-oil": {
    benefitsIntro:
      "Premium prickly pear seed oil for luxury anti-aging skincare — manufactured and exported for wholesalers and private label brands.",
    detailsHeading: "Moroccan prickly pear seed oil — bulk wholesale",
    detailsParagraphs: [
      "Prickly pear seed oil is one of the highest-value oils in Moroccan beauty. We supply this ingredient to cosmetic manufacturers, spas, and distributors building premium skincare catalogs.",
      "Our wholesale service includes flexible packaging, private label options, and export support for Europe, the Americas, Africa, and Gulf markets.",
    ],
    detailsNote: "Store sealed, away from heat and sunlight. Batch specifications provided on request.",
    usageHeading: "How to launch prickly pear oil products",
    usageSubtitle: "Ideal for serums, facial oils, and anti-aging wholesale lines.",
    usageSteps: [
      { title: "Select format", description: "Choose bulk oil, retail size, or private label packaging." },
      { title: "Confirm MOQ", description: "We align order size with your launch or replenishment plan." },
      { title: "Validate quality", description: "Review samples and documentation before bulk confirmation." },
      { title: "Ship worldwide", description: "Export-ready logistics from our Moroccan operation." },
    ],
    faqIntro: "Wholesale prickly pear seed oil from a Moroccan manufacturer, wholesaler, and exporter.",
    specs: [...exportSpecs, { label: "Profile", value: "Premium anti-aging facial oil" }],
    ctaTitle: "Need prickly pear seed oil in bulk?",
    ctaDescription: "Get wholesale pricing and export details for your skincare brand or distribution business.",
    extraBenefits: [
      { title: "Flexible packaging", description: "From sample sizes to bulk supply for growing brands." },
      { title: "Certified production", description: "Prepared under ISO and GMP oriented manufacturing controls." },
    ],
    extraFaq: [
      {
        question: "What is the MOQ for prickly pear oil?",
        answer: "MOQ starts from 50 pieces depending on packaging and product specification.",
      },
      {
        question: "Can I use this oil in private label serums?",
        answer: "Yes. It is widely used in private label anti-aging and facial oil collections.",
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes. We provide export services with documentation and international shipping support.",
      },
    ],
  },
  "moroccan-black-soap": {
    benefitsIntro:
      "Traditional savon beldi for hammam rituals, spa menus, and Moroccan bath wholesale catalogs.",
    detailsHeading: "Moroccan black soap — savon beldi wholesale",
    detailsParagraphs: [
      "Black soap is essential for authentic Moroccan hammam experiences and natural body care ranges. We manufacture and supply black soap for wholesalers, hotels, spas, and private label bath brands.",
      "Pair black soap with ghassoul clay and rose water to build a complete export-ready spa category.",
    ],
    usageHeading: "How to sell Moroccan black soap wholesale",
    usageSubtitle: "For spas, salons, e-commerce bath brands, and hospitality suppliers.",
    usageSteps: [
      { title: "Choose packaging", description: "Bulk, retail jars, or private label hammam sets." },
      { title: "Build your range", description: "Combine with ghassoul, rose water, and argan oil." },
      { title: "Request pricing", description: "Share volumes and markets for MOQ and quote." },
      { title: "Export", description: "Ship internationally with our documentation support." },
    ],
    faqIntro: "Wholesale Moroccan black soap from manufacturer source in Marrakesh, Morocco.",
    specs: [...exportSpecs, { label: "Category", value: "Moroccan bath & hammam" }],
    ctaTitle: "Wholesale black soap for your spa or brand?",
    ctaDescription: "Contact us for savon beldi pricing, private label, and export supply.",
    extraBenefits: [
      { title: "Flexible packaging", description: "Pack sizes adapted to spas, retailers, and distributors." },
      { title: "Global export ready", description: "Export documentation and logistics for bath product orders." },
    ],
    extraFaq: [
      {
        question: "Can black soap be sold as part of a hammam kit?",
        answer: "Yes. Many clients combine black soap with ghassoul and rose water in spa assortments.",
      },
      {
        question: "Is private label available?",
        answer: "Yes. We offer custom labels and packaging for Moroccan bath product lines.",
      },
      {
        question: "What is the wholesale MOQ?",
        answer: "MOQ starts from 50 pieces depending on product format and packaging.",
      },
    ],
  },
  "moroccan-nila-powder": {
    benefitsIntro: "Traditional Moroccan nila powder for brightening rituals, masks, and natural beauty wholesale.",
    detailsHeading: "Moroccan nila powder — wholesale supplier",
    detailsParagraphs: [
      "Nila is a signature Moroccan beauty powder used in skincare rituals and specialty formulations. We export nila powder to wholesalers, formulators, and private label brands worldwide.",
      "Our manufacturing quality standards support consistent batches for professional and retail product lines.",
    ],
    usageHeading: "How to use nila in wholesale product development",
    usageSubtitle: "Masks, brightening treatments, and traditional beauty formulas.",
    usageSteps: [
      { title: "Define use case", description: "Spa treatment, retail mask, or formulation ingredient." },
      { title: "Order bulk", description: "Request MOQ and packaging for powder supply." },
      { title: "Private label", description: "Optional branded jars and ritual kits." },
      { title: "Distribute", description: "Export to your markets with our documentation support." },
    ],
    faqIntro: "Bulk Moroccan nila powder for cosmetics wholesalers and manufacturers.",
    specs: [...exportSpecs, { label: "Form", value: "Fine powder" }],
    ctaTitle: "Need nila powder for your catalog?",
    ctaDescription: "Request wholesale pricing and export details for Moroccan nila supply.",
    extraBenefits: [
      { title: "Flexible packaging", description: "Bulk and labeled options for different channel needs." },
      { title: "Global export ready", description: "International shipping for powder cosmetic ingredients." },
    ],
    extraFaq: [
      {
        question: "Is nila suitable for cosmetic manufacturing?",
        answer: "Yes. We supply nila for wholesale, formulation, and private label beauty products.",
      },
      {
        question: "Can I order nila with other Moroccan powders?",
        answer: "Yes. Mix products such as nila, aker fassi, and ghassoul in one wholesale order.",
      },
      {
        question: "Do you provide export documents?",
        answer: "Yes. Export documentation is included according to your destination requirements.",
      },
    ],
  },
  "aker-fassi-powder": {
    benefitsIntro: "Authentic aker fassi for traditional tint products, powders, and Moroccan beauty wholesale lines.",
    detailsHeading: "Aker fassi — natural Moroccan beauty powder",
    detailsParagraphs: [
      "Aker fassi is valued for lips, cheeks, and traditional Moroccan beauty rituals. We supply this powder wholesale to brands, distributors, and exporters seeking authentic ingredients.",
      "Private label packaging helps you launch quickly with a recognizable Moroccan cosmetics story.",
    ],
    usageHeading: "How to wholesale aker fassi products",
    usageSubtitle: "Tint powders, ritual kits, and natural color cosmetic concepts.",
    usageSteps: [
      { title: "Product concept", description: "Define retail powder, kit, or bulk ingredient supply." },
      { title: "Packaging", description: "Choose bulk bags or private label jars." },
      { title: "Quote & MOQ", description: "Receive pricing based on volume and export terms." },
      { title: "Launch", description: "Scale reorders through our wholesale partnership model." },
    ],
    faqIntro: "Wholesale aker fassi from Moroccan cosmetics manufacturer and exporter.",
    specs: [...exportSpecs, { label: "Use", value: "Lip/cheek tint, traditional beauty" }],
    ctaTitle: "Source aker fassi for your brand?",
    ctaDescription: "Contact us for bulk aker fassi, private label, and export pricing.",
    extraBenefits: [
      { title: "Flexible packaging", description: "Bulk and branded formats for retail and professional use." },
      { title: "Global export ready", description: "Ship aker fassi worldwide with export support." },
    ],
    extraFaq: [
      {
        question: "Can aker fassi be private labeled?",
        answer: "Yes. We support custom packaging and branding for powder and tint product lines.",
      },
      {
        question: "What MOQ applies?",
        answer: "MOQ starts from 50 pieces depending on packaging and product type.",
      },
      {
        question: "Can I combine with nila or ghassoul?",
        answer: "Yes. Multi-product wholesale orders are available across our Moroccan ingredient range.",
      },
    ],
  },
  "moroccan-rose-water": {
    benefitsIntro: "Moroccan rose water for toners, mists, cleansers, and spa wholesale programs.",
    detailsHeading: "Organic Moroccan rose water — bulk supply",
    detailsParagraphs: [
      "Rose water is a high-demand item in Moroccan skincare and hammam assortments. We manufacture and export rose water for wholesalers, cosmetic brands, and hospitality suppliers.",
      "Available in bulk and private label bottles with export documentation for global markets.",
    ],
    usageHeading: "How to use rose water in wholesale assortments",
    usageSubtitle: "Facial mists, toners, spa menus, and formulation bases.",
    usageSteps: [
      { title: "Select volume", description: "Bulk liquid supply or labeled retail bottles." },
      { title: "Brand option", description: "Private label design for fast market entry." },
      { title: "Quality check", description: "Confirm specifications before production run." },
      { title: "Export", description: "International delivery with required documents." },
    ],
    faqIntro: "Wholesale Moroccan rose water from manufacturer and exporter in Morocco.",
    specs: [...exportSpecs, { label: "Type", value: "Floral water / toner base" }],
    ctaTitle: "Need rose water for wholesale or private label?",
    ctaDescription: "Request pricing for bulk rose water and export supply programs.",
    extraBenefits: [
      { title: "Flexible packaging", description: "Multiple bottle and bulk formats for distributors." },
      { title: "Global export ready", description: "Logistics and documents for international clients." },
    ],
    extraFaq: [
      {
        question: "Do you offer private label rose water bottles?",
        answer: "Yes. Custom labels and packaging are part of our private label services.",
      },
      {
        question: "Can rose water be exported to my country?",
        answer: "We export to many regions. Share your destination for compliance and shipping details.",
      },
      {
        question: "What is the MOQ?",
        answer: "MOQ starts from 50 pieces depending on bottle size and order mix.",
      },
    ],
  },
  "moroccan-ghassoul-clay": {
    benefitsIntro: "Rhassoul clay for face masks, hair cleansing, and authentic hammam wholesale categories.",
    detailsHeading: "Moroccan ghassoul clay — bulk rhassoul supplier",
    detailsParagraphs: [
      "Ghassoul clay is a cornerstone of Moroccan spa and hair care. We supply bulk ghassoul to wholesalers, salons, and brands building natural mask and cleansing lines.",
      "Export programs include documentation, flexible MOQ, and private label packaging options.",
    ],
    usageHeading: "How to build a ghassoul wholesale line",
    usageSubtitle: "Masks, clays, spa treatments, and hammam retail products.",
    usageSteps: [
      { title: "Choose grade & pack", description: "Bulk powder or private label retail jars." },
      { title: "Pair products", description: "Combine with black soap and rose water for kits." },
      { title: "Get quote", description: "Volume-based wholesale pricing and MOQ confirmation." },
      { title: "Scale export", description: "Repeat orders with consistent manufacturing quality." },
    ],
    faqIntro: "Wholesale Moroccan ghassoul clay for spas, distributors, and cosmetic brands.",
    specs: [...exportSpecs, { label: "Form", value: "Natural clay powder" }],
    ctaTitle: "Bulk ghassoul clay for your business?",
    ctaDescription: "Contact us for rhassoul wholesale, private label, and international shipping.",
    extraBenefits: [
      { title: "Flexible packaging", description: "From bulk sacks to branded spa retail formats." },
      { title: "Global export ready", description: "Full export workflow for clay cosmetic ingredients." },
    ],
    extraFaq: [
      {
        question: "Can I order ghassoul with black soap?",
        answer: "Yes. Mixed wholesale orders across bath products are supported.",
      },
      {
        question: "Is private label available for ghassoul?",
        answer: "Yes. Custom packaging and branding are available for spa and retail lines.",
      },
      {
        question: "What documentation is included for export?",
        answer: "Documentation is prepared according to destination and product requirements.",
      },
    ],
  },
  "spa-ritual-essentials": {
    benefitsIntro: "Complete Moroccan spa assortment — black soap, ghassoul, rose water, and related bath essentials.",
    detailsHeading: "Moroccan spa ritual essentials — wholesale program",
    detailsParagraphs: [
      "This category is designed for buyers who want a ready-made hammam and spa offer instead of sourcing items one by one. Ideal for hotels, spas, beauty retailers, and export distributors.",
      "We customize assortments, packaging, and private label branding for your market and channel.",
    ],
    usageHeading: "How to launch a Moroccan spa wholesale program",
    usageSubtitle: "Hospitality, retail, e-commerce, and professional spa channels.",
    usageSteps: [
      { title: "Define assortment", description: "Select products and pack sizes for your spa concept." },
      { title: "Branding", description: "Private label boxes, kits, and multilingual labels if needed." },
      { title: "MOQ & pricing", description: "Receive a wholesale quote for the full program." },
      { title: "Export rollout", description: "Ship complete spa categories to your target markets." },
    ],
    faqIntro: "Wholesale Moroccan spa essentials with manufacturing, private label, and export support.",
    specs: [...exportSpecs, { label: "Program", value: "Multi-product spa assortment" }],
    ctaTitle: "Build your Moroccan spa wholesale line?",
    ctaDescription: "Tell us your product mix and quantities — we prepare a competitive wholesale quote.",
    extraBenefits: [
      { title: "Flexible packaging", description: "Kits, individual SKUs, and hospitality-sized formats." },
      { title: "Global export ready", description: "One export workflow for your full spa category." },
    ],
    extraFaq: [
      {
        question: "Can I customize which products are included?",
        answer: "Yes. Spa programs are tailored to your brand, channel, and price positioning.",
      },
      {
        question: "Is this suitable for hotels and spas?",
        answer: "Yes. Many hospitality and spa clients use this assortment for treatment menus and retail.",
      },
      {
        question: "What MOQ applies to spa kits?",
        answer: "MOQ depends on kit composition and packaging — contact us for details.",
      },
    ],
  },
};

export type FullProduct = CatalogProduct & ProductPageContent;

export function getFullProduct(slug: string): FullProduct | undefined {
  const extra = productPageContent[slug];
  const product = catalogProducts.find((item) => item.slug === slug);
  if (!product || !extra) return undefined;

  return {
    ...product,
    ...extra,
    benefits: [...product.benefits, ...extra.extraBenefits],
    faq: [...product.faq, ...extra.extraFaq],
  };
}
