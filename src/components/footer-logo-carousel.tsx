import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { FooterBrandLogo } from "@/lib/site-data";

type FooterLogoCarouselProps = {
  logos: FooterBrandLogo[];
  label: string;
  reverse?: boolean;
  duration?: string;
};

function fillRow(logos: FooterBrandLogo[], minCount = 12) {
  const copies = Math.max(1, Math.ceil(minCount / logos.length));
  return Array.from({ length: copies }, () => logos).flat();
}

export function FooterLogoCarousel({
  logos,
  label,
  reverse = false,
  duration = "38s",
}: FooterLogoCarouselProps) {
  const row = fillRow(logos);

  return (
    <div
      dir="ltr"
      className="footer-logo-mask relative overflow-hidden"
      role="region"
      aria-label={label}
      style={{ "--footer-marquee-duration": duration } as CSSProperties}
    >
      <div
        className={cn(
          "flex w-max py-1 will-change-transform",
          reverse ? "footer-marquee-track-reverse" : "footer-marquee-track",
        )}
      >
        <LogoRow logos={row} />
        <LogoRow logos={row} decorative />
      </div>
    </div>
  );
}

function LogoRow({
  logos,
  decorative = false,
  className,
}: {
  logos: FooterBrandLogo[];
  decorative?: boolean;
  className?: string;
}) {
  return (
    <ul
      className={cn("flex shrink-0 items-stretch gap-3 pe-3", className)}
      aria-hidden={decorative || undefined}
    >
      {logos.map((logo, index) => (
        <li key={`${logo.name}-${index}`}>
          <LogoTile logo={logo} decorative={decorative} />
        </li>
      ))}
    </ul>
  );
}

function LogoTile({ logo, decorative = false }: { logo: FooterBrandLogo; decorative?: boolean }) {
  return (
    <div
      className={cn(
        "flex h-20 w-[9.5rem] items-center justify-center rounded-xl bg-card p-2.5 shadow-soft ring-1 ring-border/50",
        logo.tileClassName,
      )}
    >
      <img
        src={logo.src}
        alt={decorative ? "" : logo.name}
        width={148}
        height={64}
        className="h-auto max-h-[3.25rem] w-auto max-w-full object-contain"
        loading={decorative ? "lazy" : "eager"}
      />
    </div>
  );
}
