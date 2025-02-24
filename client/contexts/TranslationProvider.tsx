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
// import { Dictionary } from "@/types/dictonary";

interface TranslationContextType {
  t: (key: string) => string; // Функція для отримання перекладу за ключем
  locale: Locale; // Поточна мова
  setLocale: (locale: Locale) => void; // Функція для зміни мови
}

// Створюємо контекст
const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

// Провайдер
export function TranslationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const initialLocale = pathname.split("/")[1] as Locale; // Отримуємо поточну мову
  const [locale, setLocale] = useState<Locale>(initialLocale);
  //   const [dictionary, setDictionary] = useState<Dictionary>({});
  const [dictionary, setDictionary] = useState({});

  useEffect(() => {
    async function loadTranslations() {
      const dict = await getDictionary(locale);
      setDictionary(dict);
    }
    loadTranslations();
  }, [locale]);

  const t = (key: string): string => {
    const keys = key.split("."); // Розділяємо ключ на категорію і підключ
    const category = keys[0]; // Перша частина - категорія
    const subKey = keys[1]; // Друга частина - підключ

    // Повертаємо переклад, або сам ключ, якщо не знайдений
    return dictionary[category]?.[subKey] || key;
  };

  return (
    <TranslationContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </TranslationContext.Provider>
  );
}

// Хук для використання контексту
export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
//     {t(`navigation.${navItem.title}`)}
