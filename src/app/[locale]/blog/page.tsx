import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { BlogCard } from "@/components/blog/blog-card";
import { PageHero } from "@/components/products/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionShell } from "@/components/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SiteLayout } from "@/components/site-layout";
import { getLocalizedBlogPosts } from "@/lib/blog-localize";
import { routing } from "@/i18n/routing";

export const instant = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "blog");
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return null;
  }
  setRequestLocale(locale);

  const t = await getTranslations("blog");
  const tNav = await getTranslations("nav");
  const currentLocale = await getLocale();
  const posts = await getLocalizedBlogPosts();
  const [featured, ...rest] = posts;

  return (
    <SiteLayout>
      <PageHero
        title={t("heroTitle")}
        breadcrumbs={[{ label: tNav("home"), href: "/" }, { label: tNav("blog") }]}
      />

      <SectionShell>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Eyebrow className="text-center">{t("eyebrow")}</Eyebrow>
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("introTitle")}
          </h2>
          <p className="text-muted-foreground text-lg">{t("intro")}</p>
        </div>

        {featured ? (
          <div className="mb-8">
            <BlogCard post={featured} featured locale={currentLocale} />
          </div>
        ) : null}

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} locale={currentLocale} />
          ))}
        </div>
      </SectionShell>

      <CtaSection title={t("ctaTitle")} description={t("ctaDescription")} />
    </SiteLayout>
  );
}
