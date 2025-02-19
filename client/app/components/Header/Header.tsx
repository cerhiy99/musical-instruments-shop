// "use client";

import Link from "next/link";
import Image from "next/image";
import "./Header.scss";
import { Locale } from "@/i18n.config";
import React from "react";
import Logo from "@/public/logo-small.svg";
import Login from "@/public/Navbar/NavbarIcons/login.svg";
import Favorite from "@/public/Navbar/NavbarIcons/favorite.svg";
import Basket from "@/public/Navbar/NavbarIcons/basket.svg";
import Search from "@/public/Navbar/NavbarIcons/search.svg";
import Navbar from "../Navbar/NavBar";
import Phone from "@/public/Navbar/NavbarIcons/phone.svg";
import flagBanner from "@/public/Navbar/flagBanner.png";

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
366;

const Header: React.FC<Props> = ({ lang }) => {
  return (
    <>
      {/* <Navbar lang={lang} href={navItems} /> */}
      <header className="header">
        <div className="topBar">
          <div className="topBar__container">
            <div className="contact">
              <Phone height={12} width={9} strokeWidth={5} />
              <span className="contact__number">
                <a href="tel:0800300334">0 800 300 334</a>
              </span>
              {/* Link */}
              <div className="flagBanner">
                <Image src={flagBanner} alt="flag" fill objectFit="cover" />
                <div className="btn__container">
                  <p className="btn-text">Читай сторінку рідною мовою!</p>
                </div>
              </div>
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
              <div className="langSelect">
                <button className="langSelect__btn">UA </button>
                <span> | </span>
                <button className="langSelect__btn"> RU </button>
                <span> | </span>
                <button className="langSelect__btn"> EN </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mainBar">
          <div className="mainBar__container">
            <Link href="/" className="logo">
              <Logo height={83.3} width={190} />
            </Link>
            <div className="shopTitle">
              <p className="shopTitle__wrapper">
                Інтернет-магазин музичних інструментів
              </p>
            </div>

            <nav className="nav">
              <Link href="/catalog">Каталог</Link>
              <Link href="/news">Новости</Link>
              <Link href="/services">Услуги</Link>
              <Link href="/partners">Партнеры</Link>
              <Link href="/delivery">Доставка</Link>
              <Link href="/dealers">Дилеры</Link>
              <Link href="/about">О компании</Link>
              <Link href="/contacts">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
