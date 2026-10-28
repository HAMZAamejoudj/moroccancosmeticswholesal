import { getLocale } from "next-intl/server";
import { Plus, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type TwoColumnFaqItem = {
  question: string;
  answer: string;
};

const latinLabels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"] as const;
const arabicLabels = ["أ", "ب", "ج", "د", "هـ", "و", "ز", "ح", "ط", "ي"] as const;

export async function TwoColumnFaq({
  items,
  idPrefix = "faq",
}: {
  items: readonly TwoColumnFaqItem[];
  idPrefix?: string;
}) {
  const locale = await getLocale();
  const labels = locale === "ar" ? arabicLabels : latinLabels;
  const faq = items.map((item, index) => ({
    ...item,
    label: `${labels[index] ?? index + 1}.`,
  }));
  const columnSize = Math.ceil(faq.length / 2);
  const columns = [faq.slice(0, columnSize), faq.slice(columnSize)];

  return (
    <Accordion
      multiple={false}
      className="grid w-full grid-cols-1 items-start gap-3 md:grid-cols-2 md:gap-x-5"
    >
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-3">
          {column.map((item, indexInColumn) => {
            const index = columnIndex * columnSize + indexInColumn;
            return (
              <AccordionItem
                key={item.question}
                value={`${idPrefix}-${index}`}
                className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-soft not-last:border-b data-open:border-primary data-open:bg-primary data-open:text-primary-foreground"
              >
                <AccordionTrigger className="items-center gap-3 px-4 py-3.5 text-start text-[15px] font-semibold hover:no-underline sm:px-5 [&_[data-slot=accordion-trigger-icon]]:hidden">
                  <span className="min-w-0 flex-1">
                    <span className="me-1.5">{item.label}</span>
                    {item.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-current/25">
                    <Plus className="h-4 w-4 group-aria-expanded/accordion-trigger:hidden" aria-hidden />
                    <X className="hidden h-4 w-4 group-aria-expanded/accordion-trigger:block" aria-hidden />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="h-auto px-4 pb-5 leading-relaxed sm:px-5">
                  <p className="text-primary-foreground/85">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </div>
      ))}
    </Accordion>
  );
}
