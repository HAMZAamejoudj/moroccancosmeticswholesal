export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPostMeta = {
  slug: string;
  readMinutes: number;
  publishedAt: string;
  image: string;
  relatedSlugs: string[];
};

export type BlogPostCopy = {
  title: string;
  excerpt: string;
  category: string;
  alt: string;
  blocks: BlogBlock[];
};

export type BlogPost = BlogPostMeta & BlogPostCopy;

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "vetting-a-moroccan-cosmetics-wholesaler",
    readMinutes: 12,
    publishedAt: "2026-01-14",
    image: "/assets/blog/vetting-factory.jpg",
    relatedSlugs: ["export-documents-for-moroccan-beauty-orders", "iso-gmp-questions-for-b2b-buyers"],
  },
  {
    slug: "export-documents-for-moroccan-beauty-orders",
    readMinutes: 11,
    publishedAt: "2026-01-28",
    image: "/assets/blog/export-documents.jpg",
    relatedSlugs: ["vetting-a-moroccan-cosmetics-wholesaler", "moq-planning-for-first-wholesale-order"],
  },
  {
    slug: "building-a-hammam-category-for-spa-wholesale",
    readMinutes: 13,
    publishedAt: "2026-02-10",
    image: "/assets/blog/hammam-spa.jpg",
    relatedSlugs: ["black-soap-ghassoul-bundle-for-retailers", "private-label-first-collection-roadmap"],
  },
  {
    slug: "private-label-first-collection-roadmap",
    readMinutes: 14,
    publishedAt: "2026-02-22",
    image: "/assets/blog/private-label.jpg",
    relatedSlugs: ["moq-planning-for-first-wholesale-order", "prickly-pear-as-a-premium-line-item"],
  },
  {
    slug: "moq-planning-for-first-wholesale-order",
    readMinutes: 10,
    publishedAt: "2026-03-05",
    image: "/assets/blog/moq-production.jpg",
    relatedSlugs: ["export-documents-for-moroccan-beauty-orders", "vetting-a-moroccan-cosmetics-wholesaler"],
  },
  {
    slug: "iso-gmp-questions-for-b2b-buyers",
    readMinutes: 12,
    publishedAt: "2026-03-18",
    image: "/assets/blog/iso-gmp-factory.jpg",
    relatedSlugs: ["vetting-a-moroccan-cosmetics-wholesaler", "export-documents-for-moroccan-beauty-orders"],
  },
  {
    slug: "black-soap-ghassoul-bundle-for-retailers",
    readMinutes: 10,
    publishedAt: "2026-03-29",
    image: "/assets/blog/black-soap-ghassoul.jpg",
    relatedSlugs: ["building-a-hammam-category-for-spa-wholesale", "private-label-first-collection-roadmap"],
  },
  {
    slug: "prickly-pear-as-a-premium-line-item",
    readMinutes: 11,
    publishedAt: "2026-04-08",
    image: "/assets/blog/premium-argan.jpg",
    relatedSlugs: ["private-label-first-collection-roadmap", "moq-planning-for-first-wholesale-order"],
  },
];

export function getBlogPostMetaBySlug(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(isoDate: string, locale: string): string {
  const intlLocale = locale === "fr" ? "fr-FR" : locale === "ar" ? "ar-MA" : "en-GB";
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString(intlLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
