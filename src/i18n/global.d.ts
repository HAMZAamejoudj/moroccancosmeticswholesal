import type en from "../messages/en.json";
import type productsEn from "../messages/products/en.json";
import type postsEn from "../messages/blog/en.json";
import type guidesEn from "../messages/benefits/en.json";
import type privateLabelEn from "../messages/private-label/en.json";
import type faqEn from "../messages/faq/en.json";
import type { routing } from "./routing";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof en & {
      products: typeof productsEn;
      posts: typeof postsEn;
      guides: typeof guidesEn;
      privateLabel: typeof privateLabelEn;
      faq: typeof faqEn;
    };
  }
}
