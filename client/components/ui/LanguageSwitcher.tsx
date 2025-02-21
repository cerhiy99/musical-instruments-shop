"use client";

import "./LanguageSwitcher.scss";

import { Locale } from "@/i18n.config";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: Locale) => {
    const currentPathname = pathname || "/";
    const newPathname = currentPathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="langSelect">
      <button className="langSelect__btn" onClick={() => switchLanguage("uk")}>
        UA{" "}
      </button>
      <span> | </span>
      <button className="langSelect__btn" onClick={() => switchLanguage("ru")}>
        {" "}
        RU{" "}
      </button>
      <span> | </span>
      <button className="langSelect__btn" onClick={() => switchLanguage("en")}>
        {" "}
        EN{" "}
      </button>
    </div>
  );
}
