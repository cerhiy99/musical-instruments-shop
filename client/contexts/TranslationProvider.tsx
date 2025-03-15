"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getDictionary } from "@/lib/dictionary";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n.config";

interface TranslationContextType {
  t: (key: string) => string;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocale] = useState<Locale>(
    (pathname.split("/")[1] as Locale) || "uk"
  );
  const [dictionary, setDictionary] = useState({});

  // Этот эффект будет следить за изменениями пути и обновлять локаль
  useEffect(() => {
    const pathLocale = pathname.split("/")[1] as Locale;
    if (pathLocale && pathLocale !== locale) {
      setLocale(pathLocale);
    }
  }, [pathname, locale]);

  useEffect(() => {
    async function loadTranslations() {
      const dict = await getDictionary(locale);
      setDictionary(dict);
    }
    loadTranslations();
  }, [locale]);

  const t = (key: string): string => {
    const keys = key.split(".");
    const category = keys[0];
    const subKey = keys[1];

    return dictionary[category]?.[subKey] || key;
  };

  return (
    <TranslationContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
