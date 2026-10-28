import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

export function SiteLogo({ className, priority }: SiteLogoProps) {
  return (
    <Image
      src={SITE.logoSrc}
      alt={`${SITE.name} logo`}
      width={240}
      height={99}
      priority={priority}
      className={cn("w-auto object-contain object-left", className)}
    />
  );
}
