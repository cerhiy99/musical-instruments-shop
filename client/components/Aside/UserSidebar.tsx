"use client";
import Link from "next/link";
import "./UserSidebar.scss";
import { useState } from "react";
import ArrowIcon from "@/public/arrow.svg";
import Image from "next/image";
import SideNews from "./SideNews";
import { useTranslation } from "@/contexts/TranslationProvider";
import { Locale } from "@/i18n.config";
import { usePathname } from "next/navigation";

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
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { t } = useTranslation();
  const currentPath = usePathname();

  return (
    <aside className="sidebar">
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
              <Link href={navigation.link} />
              <div>
                <div className="categoryItem__wrapper">
                  <h3>{navigation.title}</h3>
                </div>
              </div>

              <span className="categoryItem__underline"></span>
            </li>
          ))}
        </ul>
      </nav>
      <SideNews lang={lang} />
    </aside>
  );
}
