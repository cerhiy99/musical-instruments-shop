"use client";

import Link from "next/link";
import "./NavBar.scss";
import { Locale } from "@/i18n.config";
import React from "react";
import SmallLogo from "@/public/logo-small.svg";
import Login from "@/public/Navbar/NavbarIcons/login.svg";
import Favorite from "@/public/Navbar/NavbarIcons/favorite.svg";
import Basket from "@/public/Navbar/NavbarIcons/basket.svg";
import Search from "@/public/Navbar/NavbarIcons/search.svg";
import NavLink from "@/components/ui/NavLink";
import { useTranslation } from "@/contexts/TranslationProvider";

type Props = {
  lang: Locale;
  href: Array<{ title: string; href: string }>;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  onFormOpen: () => void;
};

const Navbar: React.FC<Props> = ({ lang, href, setSearch, onFormOpen }) => {
  const { t } = useTranslation();
  return (
    <div className="navbar__container">
      <Link href={`/${lang}`} className="navbar__logo">
        <SmallLogo height={46} width={105} />
      </Link>

      <div className="navbar__nav">
        {href.map((item) => (
          <NavLink
            key={item.href}
            href={`/${lang}${item.href}`}
            isByClass={true}
          >
            {t(`navigation.${item.title}`)}
          </NavLink>
        ))}
      </div>

      <div className="navbar__actions">
        <button className="navbar__action-btn wide-btn" onClick={onFormOpen}>
          <Login height={21} width={21} />
        </button>
        <Link
          href={`/${lang}/favorities`}
          className="navbar__action-btn narrow-btn"
        >
          <Favorite height={23} width={21} />
        </Link>
        <Link href={`/${lang}/cart`} className="navbar__action-btn narrow-btn">
          <Basket height={22} width={21} />
        </Link>
        <button
          className="navbar__action-btn wide-btn"
          onClick={() => setSearch(true)}
        >
          <Search height={21} width={21} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
