"use client";

import Link from "next/link";
import "./UserSidebar.scss";
import ArrowIcon from "@/public/arrow.svg";
import SideNews from "./SideNews";
import { useTranslation } from "@/contexts/TranslationProvider";
import { Locale } from "@/i18n.config";
import { usePathname, useRouter } from "next/navigation";

const DashboardNavigation = [
  { title: "Мій кабінет", link: "/dashboard" },
  { title: "Поточні замовлення", link: "/dashboard/orders" },
  { title: "Особисті дані", link: "/dashboard/user-info" },
  { title: "Змінити пароль", link: "/dashboard/reset-password" },
  { title: "Історія замовлень", link: "/dashboard/orders-history" },
  { title: "Кошик", link: "/cart" },
  { title: "Контакти", link: "/contacts" },
];

export default function UserSidebar({ lang }: { lang: Locale }) {
  const { t } = useTranslation();
  const currentPath = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push(`/${lang}`);
    console.log("Log out");
  };

  return (
    <aside className="sidebar-user">
      <nav className="categories">
        <ul>
          {DashboardNavigation.map((navigation) => (
            <li
              key={navigation.title}
              className={`categoryItem ${
                currentPath === `/${lang}${navigation.link}`
                  ? "activeNavLink"
                  : ""
              }`}
            >
              <Link href={`/${lang}${navigation.link}`} />
              <div>
                <div className="categoryItem__wrapper">
                  <h3>{navigation.title}</h3>
                </div>
              </div>
              <span className="categoryItem__underline"></span>
            </li>
          ))}
        </ul>
        <button className="sidebar-logout" onClick={handleLogout}>
          <div>
            <ArrowIcon height={8} />
          </div>
          <div>
            <p>Выйти</p>
          </div>
        </button>
      </nav>

      <SideNews lang={lang} />
    </aside>
  );
}
