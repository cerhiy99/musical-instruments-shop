"use client";

import { useTranslation } from "@/contexts/TranslationProvider";
import { Locale } from "@/i18n.config";
import { usePathname, useRouter } from "next/navigation";
import ArrowIcon from "@/public/arrow.svg";
import "./ButtonBack.scss";

export default function ButtonBack({ lang }: { lang: Locale }) {
  const { t } = useTranslation();
  const router = useRouter();
  const currentPath = usePathname();

  const handleLogout = () => {
    router.back();
  };
  if (
    currentPath === "/en/dashboard" ||
    currentPath === "/ru/dashboard" ||
    currentPath === "/uk/dashboard"
  )
    return null;
  return (
    <button className="button-back" onClick={handleLogout}>
      <div>
        <ArrowIcon height={8} />
      </div>
      <div>
        <p>Вернуться</p>
      </div>
    </button>
  );
}
