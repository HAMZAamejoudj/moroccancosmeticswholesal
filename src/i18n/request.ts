import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const [common, products, posts, guides, privateLabel, faq] = await Promise.all([
    import(`../messages/${locale}.json`),
    import(`../messages/products/${locale}.json`),
    import(`../messages/blog/${locale}.json`),
    import(`../messages/benefits/${locale}.json`),
    import(`../messages/private-label/${locale}.json`),
    import(`../messages/faq/${locale}.json`),
  ]);

  return {
    locale,
    messages: {
      ...common.default,
      products: products.default,
      posts: posts.default,
      guides: guides.default,
      privateLabel: privateLabel.default,
      faq: faq.default,
    },
  };
});
