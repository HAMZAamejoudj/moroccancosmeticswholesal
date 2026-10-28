import { getMessages } from "next-intl/server";
import {
  benefitGuides,
  getBenefitMetaBySlug,
  type BenefitGuide,
  type BenefitGuideCopy,
} from "@/lib/benefits";

function getGuideCopy(
  messages: Awaited<ReturnType<typeof getMessages>>,
  slug: string,
): BenefitGuideCopy | undefined {
  const items = messages.guides.items as Record<string, BenefitGuideCopy | undefined> | undefined;
  return items?.[slug];
}

export async function getLocalizedBenefitGuide(slug: string): Promise<BenefitGuide | undefined> {
  const meta = getBenefitMetaBySlug(slug);
  if (!meta) return undefined;
  const messages = await getMessages();
  const copy = getGuideCopy(messages, slug);
  if (!copy) return undefined;
  return { ...meta, ...copy };
}

export async function getLocalizedBenefitGuides(): Promise<BenefitGuide[]> {
  const messages = await getMessages();
  return benefitGuides.flatMap((meta) => {
    const copy = getGuideCopy(messages, meta.slug);
    return copy ? [{ ...meta, ...copy }] : [];
  });
}
