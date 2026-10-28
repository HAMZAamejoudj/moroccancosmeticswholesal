"use client";

import { useTranslations } from "next-intl";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { SITE } from "@/lib/constants";

const fieldClassName =
  "h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

const subjectKeys = ["wholesale", "privateLabel", "samples", "export", "other"] as const;

type SubjectKey = (typeof subjectKeys)[number];

function isSubjectKey(value: string): value is SubjectKey {
  return (subjectKeys as readonly string[]).includes(value);
}

export function ContactForm() {
  const t = useTranslations("contact");
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subjectKey = String(data.get("subject") ?? "").trim();

    if (!name || !email || !message || !isSubjectKey(subjectKey)) {
      toast.error(t("required"));
      return;
    }

    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const subjectLabel = t(`subjects.${subjectKey}`);
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      company ? `Company: ${company}` : null,
      `Subject: ${subjectLabel}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    setSubmitting(true);
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subjectLabel)}&body=${encodeURIComponent(body)}`;
    toast.success(t("sent"));
    form.reset();
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          {t("name")} <span className="text-primary">*</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={t("namePlaceholder")}
            className={`${fieldClassName} mt-2`}
          />
        </label>
        <label className="block text-sm font-semibold">
          {t("phone")}
          <input
            name="phone"
            type="tel"
            dir="ltr"
            autoComplete="tel"
            placeholder={t("phonePlaceholder")}
            className={`${fieldClassName} mt-2`}
          />
        </label>
        <label className="block text-sm font-semibold">
          {t("email")} <span className="text-primary">*</span>
          <input
            name="email"
            type="email"
            required
            dir="ltr"
            autoComplete="email"
            placeholder={t("emailPlaceholder")}
            className={`${fieldClassName} mt-2`}
          />
        </label>
        <label className="block text-sm font-semibold">
          {t("company")}
          <input
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={t("companyPlaceholder")}
            className={`${fieldClassName} mt-2`}
          />
        </label>
      </div>

      <label className="block text-sm font-semibold">
        {t("subject")} <span className="text-primary">*</span>
        <select name="subject" required defaultValue="" className={`${fieldClassName} mt-2`}>
          <option value="" disabled>
            {t("subjectPlaceholder")}
          </option>
          {subjectKeys.map((key) => (
            <option key={key} value={key}>
              {t(`subjects.${key}`)}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-semibold">
        {t("message")} <span className="text-primary">*</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t("messagePlaceholder")}
          className="mt-2 min-h-32 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
        />
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-95 disabled:opacity-60 sm:w-auto"
      >
        {t("submit")}
      </button>
    </form>
  );
}
