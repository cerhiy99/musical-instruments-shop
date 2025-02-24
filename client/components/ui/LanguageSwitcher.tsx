"use client";

import "./LanguageSwitcher.scss";
import { Locale } from "@/i18n.config";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
type Props = {
  lang: Locale;
};

export default function LanguageSwitcher({ lang }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: Locale) => {
    const currentPathname = pathname || "/";
    const newPathname = currentPathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="langSelect">
      <button
        className={`langSelect__btn ${lang === "uk" ? "active" : ""}`}
        onClick={() => switchLanguage("uk")}
      >
        UA{" "}
      </button>
      <span> | </span>
      <button
        className={`langSelect__btn ${lang === "ru" ? "active" : ""}`}
        onClick={() => switchLanguage("ru")}
      >
        {" "}
        RU{" "}
      </button>
      <span> | </span>
      <button
        className={`langSelect__btn ${lang === "en" ? "active" : ""}`}
        onClick={() => switchLanguage("en")}
      >
        {" "}
        EN{" "}
      </button>
    </div>
  );
}
