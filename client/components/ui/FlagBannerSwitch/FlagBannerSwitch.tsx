"use client";

import { Locale } from "@/i18n.config";
import { usePathname, useRouter } from "next/navigation";
import "./FlagBannerSwitch.scss";

const SwitchFlagBanner: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const switchLanguage = (newLocale: Locale) => {
    const currentPathname = pathname || "/";
    const newPathname = currentPathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="language-banner" onClick={() => switchLanguage("uk")}>
      <span>Читай сторінку рідною мовою!</span>
    </div>
  );
};
export default SwitchFlagBanner;
