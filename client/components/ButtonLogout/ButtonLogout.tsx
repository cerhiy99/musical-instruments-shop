"use client";

import { useTranslation } from "@/contexts/TranslationProvider";
import { Locale } from "@/i18n.config";
import LogOut from "@/public/dashboard/logOut.svg";
import { useRouter } from "next/navigation";
import ArrowIcon from "@/public/arrow.svg";
import "./ButtonLogout.scss";

export default function ButtonLogout({ lang }: { lang: Locale }) {
  const { t } = useTranslation();
  const router = useRouter();

  const handleLogout = () => {
    router.push(`/${lang}`);
    console.log("Log out");
  };
  return (
    <button className="dashboard__grid--item" onClick={handleLogout}>
      <LogOut width={50} height={50} strokeWidth={1.5} />
      <p>Выйти</p>
    </button>
    // <button className="button-logout" onClick={handleLogout}>
    //   <div>
    //     <ArrowIcon height={8} />
    //   </div>
    //   <div>
    //     <p>Выйти</p>
    //   </div>
    // </button>
  );
}
