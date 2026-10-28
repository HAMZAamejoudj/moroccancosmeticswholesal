"use client";

import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SITE } from "@/lib/constants";

const STORAGE_KEY = "mcw-catalog-modal-dismissed";

const featureKeys = ["privateLabel", "moq", "shipping", "samples"] as const;

export function CatalogModal() {
  const t = useTranslations("catalogModal");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = window.localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      const timer = window.setTimeout(() => setOpen(true), 1200);
      return () => window.clearTimeout(timer);
    }
  }, []);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      window.localStorage.setItem(STORAGE_KEY, "1");
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border/50 bg-card sm:max-w-md">
        <DialogHeader className="text-center sm:text-center">
          <DialogTitle className="font-heading text-2xl text-foreground">{SITE.name}</DialogTitle>
          <DialogDescription className="text-eyebrow text-base font-medium">{t("roles")}</DialogDescription>
        </DialogHeader>
        <ul className="space-y-3 py-2">
          {featureKeys.map((key) => (
            <li key={key} className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted">
                <Check className="h-4 w-4 text-primary" aria-hidden />
              </span>
              <span className="text-foreground/90">{t(`features.${key}`)}</span>
            </li>
          ))}
        </ul>
        <a
          href={SITE.catalogUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          {t("cta")}
        </a>
      </DialogContent>
    </Dialog>
  );
}
