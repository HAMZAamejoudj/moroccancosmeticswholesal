export type BenefitGuide = {
  slug: string;
  title: string;
  cardTitle: string;
  summary: string;
  tags: string[];
  image: string;
  alt: string;
  productSlug: string;
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

export const benefitGuides: BenefitGuide[] = [
  {
    slug: "pure-argan-oil-skin-hair",
    title: "Pure Argan Oil Benefits for Skin & Hair",
    cardTitle: "Organic Argan Oil",
    summary: "Moisturizes skin, supports anti-aging routines, adds hair shine, and fits cosmetic and food-grade wholesale lines.",
    tags: ["Moisturizes", "Strengthens hair", "Anti-aging"],
    image: "/assets/products/moroccan-argan-oil-wholesale.jpg",
    alt: "Argan oil benefits for skin and hair",
    productSlug: "cosmetic-food-argan-oil",
    introTitle: "A versatile Moroccan oil for cosmetic formulations",
    introParagraphs: [
      "Argan oil is one of Morocco's most recognized natural ingredients. Rich in vitamin E and essential fatty acids, it is used worldwide in skincare, haircare, spa treatments, and premium cosmetic manufacturing.",
      "As a Moroccan cosmetics manufacturer and wholesaler, we supply argan oil for bulk export, private label brands, and professional formulation projects.",
    ],
    keyFacts: [
      "100% pure Moroccan argan oil for cosmetic and food applications",
      "Suitable for skin, hair, nails, and formulation bases",
      "Manufactured and exported with ISO & GMP oriented quality standards",
      "Available in bulk, retail-ready, and private label packaging",
    ],
    benefitsHeading: "Top benefits of argan oil",
    benefits: [
      {
        title: "Deep moisturization",
        description:
          "Supports long-lasting hydration for face, body, and dry skin product lines without heavy residue.",
      },
      {
        title: "Anti-aging support",
        description:
          "Popular in serums and creams targeting fine lines, elasticity, and skin radiance.",
      },
      {
        title: "Hair conditioning",
        description:
          "Used in hair oils, masks, and salon treatments to improve shine, softness, and manageability.",
      },
      {
        title: "Scalp comfort",
        description:
          "Helps nourish the scalp in haircare formulas designed for dryness and irritation.",
      },
      {
        title: "Nail and hand care",
        description:
          "Common in cuticle oils and intensive hand treatment products.",
      },
      {
        title: "Formulation flexibility",
        description:
          "Works in facial oils, body care, hair serums, and mixed Moroccan beauty assortments.",
      },
    ],
    wholesaleTitle: "Wholesale argan oil supply",
    wholesaleParagraph:
      "Buy argan oil directly from our Moroccan manufacturing and export operation. Request MOQ, documentation, and private label options for your market.",
    ctaTitle: "Need wholesale argan oil?",
    ctaDescription: "View product details and request a quote for bulk argan oil supply.",
  },
  {
    slug: "prickly-pear-seed-oil-benefits",
    title: "Prickly Pear Seed Oil Benefits",
    cardTitle: "Prickly Pear Seed Oil",
    summary: "Premium anti-aging oil that nourishes skin, supports hair treatments, and elevates luxury skincare catalogs.",
    tags: ["Hydration", "Anti-aging", "Luxury skincare"],
    image: "/assets/products/prickly-pear-seed-oil-wholesale.jpg",
    alt: "Prickly pear seed oil benefits",
    productSlug: "prickly-pear-seed-oil",
    introTitle: "Morocco's high-value anti-aging oil",
    introParagraphs: [
      "Prickly pear seed oil is prized for lightweight texture and intensive skin benefits. It is a key ingredient in premium facial oils, serums, and professional spa treatments.",
      "We export prickly pear seed oil wholesale to brands and distributors building high-margin natural skincare ranges.",
    ],
    keyFacts: [
      "Ideal for facial serums and anti-aging formulas",
      "Exported for international cosmetic brands and spas",
      "Private label and bulk packaging available",
      "MOQ from 50 pieces depending on format",
    ],
    benefitsHeading: "Benefits of prickly pear seed oil",
    benefits: [
      { title: "Intensive hydration", description: "Supports moisture retention in premium face and eye care products." },
      { title: "Anti-aging positioning", description: "Helps brands target firmness, radiance, and mature skin segments." },
      { title: "Light texture", description: "Preferred for serums where fast absorption and elegant feel matter." },
      { title: "Hair applications", description: "Used in luxury hair oils and treatment lines for shine and softness." },
      { title: "Brand differentiation", description: "Adds a high-value Moroccan story to wholesale catalogs." },
      { title: "Export-ready supply", description: "Documentation and logistics support for global distribution." },
    ],
    wholesaleTitle: "Bulk prickly pear seed oil",
    wholesaleParagraph: "Source prickly pear seed oil from a Moroccan cosmetics manufacturer with wholesale pricing and export services.",
    ctaTitle: "Order prickly pear oil in bulk?",
    ctaDescription: "See the wholesale product page and contact us for pricing.",
  },
  {
    slug: "moroccan-black-soap-benefits",
    title: "Benefits of Moroccan Black Soap",
    cardTitle: "Moroccan Black Soap",
    summary: "Deep cleansing savon beldi for hammam rituals, exfoliation, and natural body care wholesale programs.",
    tags: ["Exfoliates", "Moisturizes", "Hammam"],
    image: "/assets/products/moroccan-black-soap.jpg",
    alt: "Moroccan black soap benefits",
    productSlug: "moroccan-black-soap",
    introTitle: "Traditional savon beldi for spa and body care",
    introParagraphs: [
      "Moroccan black soap is essential to the hammam ritual. It cleanses, prepares skin for exfoliation, and supports smooth, refreshed skin feel in professional and retail bath products.",
      "We supply black soap wholesale for spas, hotels, beauty retailers, and private label bath brands.",
    ],
    keyFacts: [
      "Core hammam and Moroccan bath category ingredient",
      "Pairs with ghassoul clay and rose water",
      "Bulk and private label packaging options",
      "Manufactured for consistent wholesale quality",
    ],
    benefitsHeading: "Benefits of Moroccan black soap",
    benefits: [
      { title: "Deep cleansing", description: "Removes impurities while preparing skin for kessa exfoliation." },
      { title: "Ritual authenticity", description: "Supports authentic Moroccan spa experiences for hospitality and retail." },
      { title: "Body care formulations", description: "Used in shower gels, spa kits, and treatment menus." },
      { title: "Softening effect", description: "Leaves skin feeling smooth when used in traditional hammam steps." },
      { title: "Category bundling", description: "Combine with ghassoul and rose water in export assortments." },
      { title: "Wholesale scalability", description: "Order volumes adapted to spas, chains, and distributors." },
    ],
    wholesaleTitle: "Wholesale Moroccan black soap",
    wholesaleParagraph: "Add savon beldi to your catalog with manufacturer-direct supply and export support.",
    ctaTitle: "Source black soap wholesale?",
    ctaDescription: "Browse the black soap product page and request a wholesale quote.",
  },
  {
    slug: "moroccan-blue-nila-benefits",
    title: "Benefits of Moroccan Blue Nila",
    cardTitle: "Moroccan Nila Powder",
    summary: "Traditional blue nila for brightening rituals, even-looking skin, and authentic Moroccan beauty treatments.",
    tags: ["Radiance", "Clarity", "Rituals"],
    image: "/assets/products/moroccan-nila-powder.jpg",
    alt: "Moroccan blue nila benefits",
    productSlug: "moroccan-nila-powder",
    introTitle: "Moroccan nila in skincare and beauty rituals",
    introParagraphs: [
      "Blue nila powder is part of Morocco's traditional beauty heritage. It is used in masks and treatments valued for brightening and ritual skincare experiences.",
      "We export nila powder wholesale to formulators, spas, and brands creating authentic Moroccan product lines.",
    ],
    keyFacts: [
      "Used in masks and brightening treatment concepts",
      "Bulk powder supply for manufacturers and distributors",
      "Private label jars and kits available",
      "Export documentation provided as required",
    ],
    benefitsHeading: "Benefits of Moroccan nila",
    benefits: [
      { title: "Brightening rituals", description: "Supports traditional mask treatments focused on radiant-looking skin." },
      { title: "Even tone appearance", description: "Popular in beauty routines targeting clarity and glow." },
      { title: "Spa differentiation", description: "Helps spas offer signature Moroccan nila treatments." },
      { title: "Formulation use", description: "Suitable for powder masks, cleansers, and specialty SKUs." },
      { title: "Cultural authenticity", description: "Strong storytelling for natural Moroccan cosmetics brands." },
      { title: "Wholesale export", description: "Ship nila powder internationally with our export workflow." },
    ],
    wholesaleTitle: "Wholesale nila powder supply",
    wholesaleParagraph: "Order Moroccan nila in bulk for manufacturing, retail, or private label collections.",
    ctaTitle: "Need nila powder wholesale?",
    ctaDescription: "View nila product details and request pricing from our team.",
  },
  {
    slug: "aker-fassi-benefits",
    title: "Benefits of Aker Fassi",
    cardTitle: "Aker Fassi",
    summary: "Traditional Moroccan tint from poppy and pomegranate notes for lips, cheeks, and natural color cosmetics.",
    tags: ["Poppy", "Pomegranate", "Natural tint"],
    image: "/assets/products/aker-fassi-powder.jpg",
    alt: "Aker fassi benefits",
    productSlug: "aker-fassi-powder",
    introTitle: "Authentic aker fassi for traditional beauty",
    introParagraphs: [
      "Aker fassi is handcrafted from traditional Moroccan ingredients and used for lip and cheek color rituals. It connects modern brands to heritage beauty practices.",
      "We supply aker fassi wholesale for powder products, kits, and private label beauty lines.",
    ],
    keyFacts: [
      "Traditional lip and cheek tint ingredient",
      "Bulk powder for brands and distributors",
      "Private label packaging support",
      "Part of Moroccan natural cosmetics export range",
    ],
    benefitsHeading: "Benefits of aker fassi",
    benefits: [
      { title: "Natural color story", description: "Ideal for clean beauty and heritage-inspired product lines." },
      { title: "Lip and cheek use", description: "Used in tints, powders, and multi-use cosmetic formats." },
      { title: "Retail appeal", description: "Recognizable Moroccan ingredient for boutique beauty shelves." },
      { title: "Ritual kits", description: "Combine in gift sets with nila, ghassoul, or rose water." },
      { title: "Brand authenticity", description: "Supports credible Moroccan positioning in global markets." },
      { title: "Wholesale supply", description: "Manufacturer-direct pricing and export options." },
    ],
    wholesaleTitle: "Wholesale aker fassi powder",
    wholesaleParagraph: "Source aker fassi for your brand or distribution network with flexible MOQ terms.",
    ctaTitle: "Order aker fassi in bulk?",
    ctaDescription: "See the wholesale product page and contact us for a quote.",
  },
  {
    slug: "moroccan-rhassoul-clay-benefits",
    title: "Moroccan Rhassoul Clay Benefits",
    cardTitle: "Moroccan Ghassoul Clay",
    summary: "Detoxifying rhassoul clay for glowing skin, hair masks, and hammam wholesale categories.",
    tags: ["Detoxifies", "Balances", "Refines"],
    image: "/assets/products/moroccan-ghassoul-clay.jpg",
    alt: "Moroccan rhassoul clay benefits",
    productSlug: "moroccan-ghassoul-clay",
    introTitle: "Rhassoul clay for skin and hair rituals",
    introParagraphs: [
      "Ghassoul (rhassoul) clay is used in face masks, hair cleansing, and hammam treatments. Its mineral content makes it a staple in natural spa and salon assortments.",
      "We export ghassoul clay wholesale with bulk packaging and private label options.",
    ],
    keyFacts: [
      "Face mask and hair cleansing applications",
      "Essential hammam category product",
      "Bulk powder export from Morocco",
      "Pairs with black soap in spa programs",
    ],
    benefitsHeading: "Benefits of Moroccan ghassoul clay",
    benefits: [
      { title: "Deep cleansing masks", description: "Used in clay masks that leave skin feeling refreshed and refined." },
      { title: "Hair care rituals", description: "Popular in natural hair cleansing and treatment protocols." },
      { title: "Mineral-rich profile", description: "Supports positioning as a authentic Moroccan earth clay." },
      { title: "Spa menus", description: "Standard item for hotels, hammams, and wellness centers." },
      { title: "Product bundling", description: "Build complete bath categories for wholesale buyers." },
      { title: "Export supply", description: "International shipping with required documentation." },
    ],
    wholesaleTitle: "Bulk rhassoul clay supply",
    wholesaleParagraph: "Add ghassoul clay to your wholesale catalog with manufacturer support and export logistics.",
    ctaTitle: "Need ghassoul clay wholesale?",
    ctaDescription: "View the ghassoul product page and request bulk pricing.",
  },
  {
    slug: "moroccan-rose-water-benefits",
    title: "Moroccan Rose Water Benefits",
    cardTitle: "Moroccan Rose Water",
    summary: "Soothing floral water for toners, mists, spa treatments, and gentle skincare formulations.",
    tags: ["Soothes", "Tones", "Spa mist"],
    image: "/assets/products/moroccan-rose-water.jpg",
    alt: "Moroccan rose water benefits",
    productSlug: "moroccan-rose-water",
    introTitle: "Rose water in Moroccan skincare and spa care",
    introParagraphs: [
      "Moroccan rose water is used in toners, facial mists, cleansers, and hammam rituals. It is a high-turnover item for skincare brands and spa suppliers.",
      "We manufacture and export rose water for wholesale, private label, and hospitality programs.",
    ],
    keyFacts: [
      "Facial mist and toner base ingredient",
      "Hammam and spa companion product",
      "Private label bottles available",
      "Export-ready wholesale supply",
    ],
    benefitsHeading: "Benefits of Moroccan rose water",
    benefits: [
      { title: "Skin soothing", description: "Used in gentle toners and mists for daily skincare routines." },
      { title: "Spa refreshment", description: "Applied in treatments and hospitality amenity lines." },
      { title: "Formulation base", description: "Blends into cleansers, masks, and water-based products." },
      { title: "Retail velocity", description: "Strong catalog item for beauty retailers and e-commerce." },
      { title: "Hammam pairing", description: "Works with black soap and ghassoul in ritual kits." },
      { title: "Wholesale export", description: "Bulk and labeled formats for international markets." },
    ],
    wholesaleTitle: "Wholesale Moroccan rose water",
    wholesaleParagraph: "Order rose water in bulk or private label formats from our Moroccan factory export team.",
    ctaTitle: "Source rose water wholesale?",
    ctaDescription: "See product specifications and request a quote online.",
  },
];

export function getBenefitBySlug(slug: string): BenefitGuide | undefined {
  return benefitGuides.find((item) => item.slug === slug);
}
