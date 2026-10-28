import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Link } from "@/i18n/navigation";

export async function HeroSection() {
  const t = await getTranslations("home.hero");
  const badges = [t("badgeQuality"), t("badgeAuthenticity"), t("badgeExport")];

  return (
    <section id="home" className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/moroccan-cosmetics-wholesale-hero.jpg"
          alt={t("imageAlt")}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1f1610]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f1610]/40 via-transparent to-[#1f1610]/60" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "18px 18px",
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center lg:max-w-5xl">
          <Eyebrow className="text-argan-gold-light">{t("eyebrow")}</Eyebrow>
          <h1 className="font-heading mx-auto mb-4 max-w-4xl text-[1.65rem] leading-[1.12] font-bold tracking-tight text-white uppercase min-[480px]:text-4xl sm:text-[2.35rem] md:text-5xl lg:text-6xl">
            <span className="block min-[480px]:hidden">{t("titleMobile1")}</span>
            <span className="block min-[480px]:hidden">{t("titleMobile2")}</span>
            <span className="hidden min-[480px]:block">{t("titleLine1")}</span>
            <span className="hidden min-[480px]:block">{t("titleLine2")}</span>
          </h1>
          <p className="mb-5 text-lg text-white/90 sm:text-xl">{t("subtitle")}</p>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-bold tracking-[0.18em] text-white/80 uppercase">
            {badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              {t("productsCta")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/35 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              {t("catalogCta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
