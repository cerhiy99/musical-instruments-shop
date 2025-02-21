"use client";

import "./Header.scss";
import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/i18n.config";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/public/logo-small.svg";
import Login from "@/public/Navbar/NavbarIcons/login.svg";
import Favorite from "@/public/Navbar/NavbarIcons/favorite.svg";
import Basket from "@/public/Navbar/NavbarIcons/basket.svg";
import Search from "@/public/Navbar/NavbarIcons/search.svg";
import Navbar from "../Navbar/NavBar";
import Phone from "@/public/Navbar/NavbarIcons/phone.svg";
import flagBanner from "@/public/Navbar/flagBanner.png";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { getDictionary } from "@/lib/dictionary";
import NavLink from "../ui/NavLink";

type Props = {
  lang: Locale;
};

const navItems = [
  { title: "Каталог", href: "/catalog" },
  { title: "Новости", href: "/news" },
  { title: "Услуги", href: "/services" },
  { title: "Партнеры", href: "/partners" },
  { title: "Доставка", href: "/delivery" },
  { title: "Дилеры", href: "/dealers" },
  { title: "О компании", href: "/about" },
  { title: "Контакты", href: "/contacts" },
];

const Header: React.FC<Props> = ({ lang }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const navbarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current || !navbarRef.current) return;

      const headerHeight = headerRef.current.offsetHeight;
      const navbarHeight = navbarRef.current.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY > headerHeight) {
        setShowNavbar(true);
      }
      if (scrollY < headerHeight - navbarHeight) {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav ref={navbarRef} className={`navbar ${showNavbar ? "visible" : ""}`}>
        <Navbar lang={lang} href={navItems} />
      </nav>

      <header className="header" ref={headerRef}>
        <div className="topBar">
          <div className="topBar__container">
            <div className="contact">
              <Phone height={12} width={9} strokeWidth={5} />
              <span className="contact__number">
                <a href="tel:0800300334">0 800 300 334</a>
              </span>
              {lang === "ru" && (
                <div className="flagBanner">
                  <Image src={flagBanner} alt="flag" fill objectFit="cover" />
                  <div className="btn__container">
                    <p className="btn-text">Читай сторінку рідною мовою!</p>
                  </div>
                </div>
              )}
            </div>
            <div className="schedule">
              <div className="schedule__wrapper">
                <span className="schedule-info">
                  <p>Пн.-Пт. с 11:00 до 18:00 часов</p>
                </span>
                <a className="callback">Обратный звонок</a>
              </div>
            </div>
            <div className="controls">
              <Link href="/account" className="iconButton">
                <Login width={16} height={17} />
                <span className="text-login">
                  <p>Войти</p>
                </span>
              </Link>
              <Link href="/fav" className="iconButton">
                <Favorite width={18} height={16} />
                <div className="counter favorite-btn">0</div>
              </Link>

              <Link href="/cart" className="iconButton">
                <Basket width={16} height={17} />

                <p className="basket-btn">Корзина</p>

                <div className="counter">0</div>
              </Link>
              <button className="iconButton">
                <Search width={17} height={17} />
                <p className="search-btn">Поиск</p>
              </button>
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="mainBar">
          <div className="mainBar__container">
            <Link href="/" className="logo">
              <Logo height={83.3} width={190} />
            </Link>
            <div className="shopTitle">
              <h1 className="shopTitle__wrapper">
                Інтернет-магазин музичних інструментів
              </h1>
            </div>

            <nav className="header__nav ">
              {/* <Link href="/catalog">Каталог</Link> */}
              {navItems.map((navItem) => (
                <NavLink
                  key={navItem.title}
                  href={navItem.href}
                  margin={{ left: 2.4, right: 2.4 }}
                  padding={{ top: 3.9, bottom: 3.9 }}
                >
                  {navItem.title}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
