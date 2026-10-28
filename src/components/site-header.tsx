"use client";

import { Menu } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { SiteLogo } from "@/components/site-logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/blog", key: "blog" },
  { href: "/products", key: "products" },
  { href: "/benefits", key: "benefits" },
  { href: "/private-label", key: "privateLabel" },
  { href: "/faq", key: "faq" },
  { href: "/contact", key: "contact" },
] as const;

export function SiteHeader() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const isArabic = locale === "ar";

  const navLinkClassName = cn(
    "text-xs font-bold text-foreground/85 transition-colors hover:text-primary sm:text-sm",
    isArabic ? "tracking-normal" : "uppercase tracking-[0.12em]",
  );

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3 lg:h-[4.5rem]">
          <Link href="/" className="flex items-center gap-2" aria-label={SITE.name}>
            <SiteLogo className="h-14 lg:h-16" priority />
          </Link>

          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label={t("main")}>
            {navItems.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClassName}>
                {t(link.key)}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LocaleSwitcher />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LocaleSwitcher />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className="inline-flex rounded-lg p-2 text-foreground"
                aria-label={t("openMenu")}
              >
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side={isArabic ? "left" : "right"} className="bg-background">
                <SheetHeader>
                  <SheetTitle className="font-heading">{SITE.name}</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-4" aria-label={t("mobile")}>
                  {navItems.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`${navLinkClassName} text-base text-foreground/90`}
                    >
                      {t(link.key)}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
