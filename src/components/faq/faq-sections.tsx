import { TwoColumnFaq } from "@/components/faq/two-column-faq";
import { Eyebrow } from "@/components/ui/eyebrow";
import type { FaqSection } from "@/lib/faq";

export function FaqSections({ sections }: { sections: FaqSection[] }) {
  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-28">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <Eyebrow className="text-center">{section.title}</Eyebrow>
            <h2 className="font-heading mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {section.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{section.description}</p>
          </div>
          <TwoColumnFaq items={section.items} idPrefix={section.id} />
        </section>
      ))}
    </div>
  );
}
