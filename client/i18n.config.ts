export const i18n = {
  defaultLocale: "uk",
  locales: ["ru", "uk", "en"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
