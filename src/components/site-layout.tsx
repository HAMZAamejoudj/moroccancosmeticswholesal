import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <div className="flex min-h-full flex-1 flex-col pt-16 lg:pt-[4.5rem]">{children}</div>
      <SiteFooter />
    </>
  );
}
