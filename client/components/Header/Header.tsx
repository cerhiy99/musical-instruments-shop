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
import NavLink from "../ui/NavLink";
import SearchBar from "../SearchBar/SearchBar";
import { usePathname } from "next/navigation";
import TopicHeader from "./TopicHeader";
import { useTranslation } from "@/contexts/TranslationProvider";
import Modal from "../Modal/Modal";
import RegistrationForm from "../Form/Register/RegisterForm";
import LoginForm from "../Form/Login/LoginForm";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
type Props = {
  lang: Locale;
};

const navItems = [
  { title: "catalog", href: "/catalog" },
  { title: "news", href: "/news" },
  { title: "service", href: "/services" },
  { title: "partners", href: "/partners" },
  { title: "delivery", href: "/delivery" },
  { title: "dealers", href: "/dealers" },
  { title: "about", href: "/about" },
  { title: "contacts", href: "/contacts" },
];

const Header: React.FC<Props> = ({ lang }) => {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [showSearchBar, setSearchBar] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const navbarRef = useRef<HTMLElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) return;
      if (!headerRef.current || !navbarRef.current) return;

      const headerHeight = headerRef.current.offsetHeight;
      const navbarHeight = navbarRef.current.offsetHeight;
      const scrollY = window.scrollY;

      setShowNavbar(scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // обновляем состояние на ширину окна
    };
    // Инициализируем ширину экрана при монтировании
    handleResize();
    // Добавляем обработчик события изменения размера окна
    window.addEventListener("resize", handleResize);

    // Очистка обработчика при размонтировании компонента
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isForm, setIsForm] = useState<boolean>(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (formData: any) => {
    console.log("Form submitted:", formData);
    closeModal();
    // Here you would typically send the data to your backend
  };
  const handleLogin = () => {
    setIsForm((prev) => !prev);
  };

  return (
    <>
      {windowWidth <= 1024 ? (
        <MobileNavbar lang={lang} />
      ) : (
        <>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title="Обратная связь"
          >
            {isForm ? (
              <LoginForm
                onRegisterClick={handleLogin}
                onSubmit={handleSubmit}
              />
            ) : (
              <RegistrationForm
                onLoginClick={handleLogin}
                onSubmit={handleSubmit}
              />
            )}
            {/* <LoginForm onSubmit={handleSubmit} /> */}
          </Modal>
          <nav
            ref={navbarRef}
            className={`navbar ${showNavbar ? "visible" : ""}`}
          >
            <Navbar
              onFormOpen={openModal}
              lang={lang}
              href={navItems}
              setSearch={setSearchBar}
            />
          </nav>
          <div className={`searchBar ${showSearchBar ? "visible" : ""}`}>
            <SearchBar setSearch={setSearchBar} isOpen />
          </div>

          <header className="header" ref={headerRef}>
            <div className="topBar">
              <div className="topBar__container">
                <div className="contact">
                  <div className="contact__wrapper">
                    <Phone height={17} width={9} strokeWidth={5} />
                    <span className="contact__number">
                      <a href="tel:0800300334">0 800 300 334</a>
                    </span>
                  </div>
                  {lang === "ru" && (
                    <div className="flagBanner">
                      <Image
                        src={flagBanner}
                        alt="flag"
                        fill
                        objectFit="cover"
                      />
                      <div className="btn__container">
                        <p className="btn-text">Читай сторінку рідною мовою!</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="schedule">
                  <div className="schedule__wrapper">
                    <span className="schedule-info">
                      <p>{t("navigation.schedule")}</p>
                    </span>
                    <a className="callback">{t("navigation.callBack")}</a>
                  </div>
                </div>
                <div className="controls">
                  <button className="iconButton" onClick={openModal}>
                    <Login width={16} height={17} />
                    <span className="text-login">
                      <p>{t("navigation.login")}</p>
                    </span>
                  </button>
                  <Link href="/favorities" className="iconButton">
                    <Favorite width={18} height={16} />
                    <div className="counter favorite-btn">0</div>
                  </Link>

                  <Link href="/cart" className="iconButton">
                    <Basket width={16} height={17} />

                    <p className="basket-btn">{t("navigation.cart")}</p>

                    <div className="counter">0</div>
                  </Link>
                  <button
                    className="iconButton"
                    onClick={() => {
                      setSearchBar(true);
                    }}
                  >
                    <Search width={17} height={17} />
                    <p className="search-btn">{t("navigation.search")}</p>
                  </button>
                  <LanguageSwitcher lang={lang} />
                </div>
              </div>
            </div>

            <div className="mainBar">
              <div className="mainBar__container">
                <div className="logo">
                  <Link href="/">
                    <Logo height={83.3} width={190} />
                  </Link>
                </div>
                <div className="shopTitle">
                  <h1 className="shopTitle__wrapper">
                    {t("navigation.shopTitle")}
                  </h1>
                </div>

                <nav className="header__nav ">
                  {navItems.map((navItem) => (
                    <NavLink
                      key={navItem.title}
                      href={navItem.href}
                      isByClass={true}
                    >
                      {t(`navigation.${navItem.title}`)}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </div>
          </header>
        </>
      )}
      {pathname === "/en" || pathname === "/ru" || pathname === "/uk" ? null : (
        <TopicHeader />
      )}
    </>
  );
};

export default Header;
