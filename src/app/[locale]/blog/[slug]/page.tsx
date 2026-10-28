import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { BlogArticle } from "@/components/blog/blog-article";
import { PageHero } from "@/components/products/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { SiteLayout } from "@/components/site-layout";
import { blogPosts } from "@/lib/blog";
import { getLocalizedBlogPost } from "@/lib/blog-localize";
import { routing } from "@/i18n/routing";
import { entityMetadata } from "@/lib/seo";

export const instant = false;

type BlogPostPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  return entityMetadata(locale, "posts", slug, "article");
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const post = await getLocalizedBlogPost(slug);
  if (!post) notFound();

  const t = await getTranslations("blog");
  const tNav = await getTranslations("nav");
  const currentLocale = await getLocale();

  return (
    <SiteLayout>
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: tNav("home"), href: "/" },
          { label: tNav("blog"), href: "/blog" },
          { label: post.category },
        ]}
      />
      <BlogArticle post={post} locale={currentLocale} />
      <CtaSection title={t("articleCtaTitle")} description={t("articleCtaDescription")} />
    </SiteLayout>
  );
}
