import { getMessages } from "next-intl/server";
import {
  blogPosts,
  getBlogPostMetaBySlug,
  type BlogPost,
  type BlogPostCopy,
} from "@/lib/blog";

function getPostCopy(messages: Awaited<ReturnType<typeof getMessages>>, slug: string): BlogPostCopy | undefined {
  const posts = messages.posts as Record<string, BlogPostCopy | undefined> | undefined;
  return posts?.[slug];
}

export async function getLocalizedBlogPost(slug: string): Promise<BlogPost | undefined> {
  const meta = getBlogPostMetaBySlug(slug);
  if (!meta) return undefined;
  const messages = await getMessages();
  const copy = getPostCopy(messages, slug);
  if (!copy) return undefined;
  return { ...meta, ...copy };
}

export async function getLocalizedBlogPosts(): Promise<BlogPost[]> {
  const messages = await getMessages();
  return blogPosts.flatMap((meta) => {
    const copy = getPostCopy(messages, meta.slug);
    return copy ? [{ ...meta, ...copy }] : [];
  });
}

export async function getLocalizedRelatedPosts(slugs: string[]): Promise<BlogPost[]> {
  const posts = await Promise.all(slugs.map((slug) => getLocalizedBlogPost(slug)));
  return posts.filter((post): post is BlogPost => Boolean(post));
}
