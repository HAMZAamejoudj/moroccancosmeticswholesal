import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
  alt?: string;
};

export function SiteLogo({ className, priority, alt = SITE.name }: SiteLogoProps) {
  return (
    <Image
      src={SITE.logoSrc}
      alt={alt}
      width={240}
      height={99}
      priority={priority}
      className={cn("w-auto object-contain object-left", className)}
    />
  );
}
