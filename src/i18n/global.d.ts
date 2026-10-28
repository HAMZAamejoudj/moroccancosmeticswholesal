import type en from "../messages/en.json";
import type productsEn from "../messages/products/en.json";
import type postsEn from "../messages/blog/en.json";
import type { routing } from "./routing";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof en & { products: typeof productsEn; posts: typeof postsEn };
  }
}
