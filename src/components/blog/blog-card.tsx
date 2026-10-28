import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { BlogPost } from "@/lib/blog";
import { formatBlogDate } from "@/lib/blog";

export async function BlogCard({
  post,
  featured,
  locale,
}: {
  post: BlogPost;
  featured?: boolean;
  locale: string;
}) {
  const t = await getTranslations("blog");

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-elevated ${
        featured ? "lg:flex-row lg:items-stretch" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-muted ${
          featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-[280px] lg:w-[45%]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={post.image}
          alt={post.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 45vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
        />
      </div>
      <div className={`flex flex-1 flex-col p-5 ${featured ? "lg:justify-center lg:p-8" : ""}`}>
        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
            {post.category}
          </span>
          <time dateTime={post.publishedAt} className="text-muted-foreground">
            {formatBlogDate(post.publishedAt, locale)}
          </time>
          <span className="text-muted-foreground inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            {t("minRead", { minutes: post.readMinutes })}
          </span>
        </div>
        <h3
          className={`font-heading mb-2 font-semibold leading-snug ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {post.title}
        </h3>
        <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed sm:text-base">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
          {t("readArticle")}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
