import { defineRouting } from "next-intl/routing";

/**
 * Final locale set for this site — the single source of truth.
 * `src/i18n/request.ts`, `src/components/language-switcher.tsx` and the files in
 * `src/locales/` must always stay in sync with this array.
 */
export const locales = ["en", "es", "pt-br", "id"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
