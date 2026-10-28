import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Clock } from "lucide-react";
import { SectionShell } from "@/components/section-shell";
import { BlogCard } from "@/components/blog/blog-card";
import type { BlogPost } from "@/lib/blog";
import { formatBlogDate } from "@/lib/blog";
import { getLocalizedRelatedPosts } from "@/lib/blog-localize";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/constants";

export async function BlogArticle({ post, locale }: { post: BlogPost; locale: string }) {
  const t = await getTranslations("blog");
  const related = await getLocalizedRelatedPosts(post.relatedSlugs);

  return (
    <>
      <SectionShell>
        <article className="mx-auto max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {post.category}
            </span>
            <time dateTime={post.publishedAt} className="text-muted-foreground">
              {formatBlogDate(post.publishedAt, locale)}
            </time>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Clock className="h-4 w-4" aria-hidden />
              {t("minRead", { minutes: post.readMinutes })}
            </span>
          </div>

          <div className="mb-8 overflow-hidden rounded-3xl border border-border/60 shadow-soft">
            <Image
              src={post.image}
              alt={post.alt}
              width={960}
              height={540}
              className="aspect-[16/9] w-full object-cover"
              priority
            />
          </div>

          <div className="prose-blog space-y-6">
            {post.blocks.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={`${block.text}-${index}`}
                    className="font-heading mt-10 text-2xl font-bold tracking-tight first:mt-0"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul
                    key={`ul-${index}`}
                    className="text-muted-foreground list-disc space-y-2 ps-5 leading-relaxed"
                  >
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={`${block.text.slice(0, 24)}-${index}`} className="text-muted-foreground text-lg leading-relaxed">
                  {block.text}
                </p>
              );
            })}
          </div>

          <footer className="mt-10 rounded-2xl border border-border/60 bg-section-alt p-6">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("publishedBy")}{" "}
              <span className="font-semibold text-foreground">{SITE.name}</span> {t("publishedMid")}{" "}
              <Link href="/contact" className="font-semibold text-primary hover:underline">
                {t("contactTeam")}
              </Link>
              .
            </p>
          </footer>
        </article>
      </SectionShell>

      {related.length > 0 ? (
        <SectionShell variant="alt">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">{t("related")}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {related.map((relatedPost) => (
              <BlogCard key={relatedPost.slug} post={relatedPost} locale={locale} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-sm font-semibold text-primary hover:underline">
              {t("viewAll")}
            </Link>
          </div>
        </SectionShell>
      ) : null}
    </>
  );
}
