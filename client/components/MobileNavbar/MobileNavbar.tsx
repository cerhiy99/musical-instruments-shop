"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Login from "@/public/Navbar/NavbarIcons/login.svg";
import Favorite from "@/public/Navbar/NavbarIcons/favorite.svg";
import Basket from "@/public/Navbar/NavbarIcons/basket.svg";
import Search from "@/public/Navbar/NavbarIcons/search.svg";
import Phone from "@/public/Navbar/NavbarIcons/phone.svg";
import Logo from "@/public/logo-small.svg";
import "./MobileNavbar.scss";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { Locale } from "@/i18n.config";
import LocationIcon from "@/public/Footer/location.svg";
import EnvelopeIcon from "@/public/Footer/envelope.svg";
import ArrowIcon from "@/public/arrow.svg";
import ArrowLeft from "@/public/arrowLeft.svg";
import SwitchFlagBanner from "../ui/FlagBannerSwitch/FlagBannerSwitch";

type CategoryType = {
  id: string;
  title: string;
  link?: string;
  children?: CategoryType[];
};
type Props = {
  lang: Locale;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  onFormOpen: () => void;
  onTypeFormSubmit: (typeForm: "SignUp" | "SignIn" | "CallBack") => void;
};
const categories: CategoryType[] = [
  {
    id: "catalog",
    title: "Каталог",
    children: [
      {
        id: "string-instruments",
        title: "Струнно-смичкові інструменти",
        children: [
          {
            id: "violin",
            title: "Скрипка",
            children: [
              {
                id: "master-violins",
                title: "Майстрові скрипки",
                link: "/catalog/string-instruments/violin/master",
              },
              {
                id: "complete-violins",
                title: "Укомплектовані скрипки",
                link: "/catalog/string-instruments/violin/complete",
              },
              {
                id: "factory-violins",
                title: "Скрипки фабричного/мануфактурного виробництва",
                link: "/catalog/string-instruments/violin/factory",
              },
              {
                id: "carbon-violins",
                title: "Карбонові скрипки",
                link: "/catalog/string-instruments/violin/carbon",
              },
              {
                id: "electric-violins",
                title: "Електроскрипки",
                link: "/catalog/string-instruments/violin/electric",
              },
            ],
          },
          {
            id: "viola",
            title: "Альт",
            children: [
              {
                id: "master-violas",
                title: "Майстрові альти",
                link: "/catalog/string-instruments/viola/master",
              },
              {
                id: "complete-violas",
                title: "Укомплектовані альти",
                link: "/catalog/string-instruments/viola/complete",
              },
            ],
          },
          {
            id: "cello",
            title: "Віолончель",
            children: [],
          },
          {
            id: "double-bass",
            title: "Контрабас",
            children: [],
          },
          {
            id: "bows",
            title: "Смички",
            children: [],
          },
        ],
      },
    ],
  },
  { id: "news", title: "Новини", link: "/news" },
  { id: "services", title: "Послуги", link: "/services" },
  { id: "partners", title: "Партнери", link: "/partners" },
  { id: "delivery", title: "Доставка", link: "/delivery" },
  { id: "dealers", title: "Дилери", link: "/dealers" },
  { id: "about", title: "Про компанію", link: "/about" },
  { id: "contacts", title: "Контакти", link: "/contacts" },
];

export default function MobileNavbar({
  lang,
  setSearch,
  onFormOpen,
  onTypeFormSubmit,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navigationStack, setNavigationStack] = useState<CategoryType[][]>([]);
  const [currentLevel, setCurrentLevel] = useState<CategoryType[]>(categories);
  const [currentTitle, setCurrentTitle] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      console.log("[MENU WINDOW] Menu is open: " + menuOpen);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      console.log("[MENU WINDOW] Menu is close: " + menuOpen);
    };
  }, [menuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    if (!menuOpen) {
      // Reset navigation when opening menu
      setNavigationStack([]);
      setCurrentLevel(categories);
      setCurrentTitle(null);
    }
    setMenuOpen(!menuOpen);
  };

  const navigateToSubcategory = (category: CategoryType) => {
    if (category.children && category.children.length > 0) {
      setNavigationStack([...navigationStack, currentLevel]);
      setCurrentLevel(category.children);
      setCurrentTitle(category.title);
    }
  };

  const navigateBack = () => {
    if (navigationStack.length > 0) {
      const newStack = [...navigationStack];
      const previousLevel = newStack.pop();
      setNavigationStack(newStack);
      setCurrentLevel(previousLevel || categories);
      setCurrentTitle(newStack.length > 0 ? currentTitle : null);
    } else {
      setMenuOpen(false);
    }
  };

  // ________________________________________________________________________
  // const [isModalOpen, setModalopen] = useState<boolean>(false);
  // const handleSubmit = () => {
  //   console.log("form submitted");
  // };

  // const closeModal = useCallback(() => {
  //   setModalopen(false);
  // }, [setModalopen]);

  // ________________________________________________________________________
  return (
    <>
      {lang === "ru" && <SwitchFlagBanner />}

      {/* <Modal isOpen={isModalOpen} onClose={closeModal} title="Обратная связь">
        <FeedbackForm onSubmit={handleSubmit} />
      </Modal> */}
      <header className="mobile-header">
        <button className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className="logo">
          <Link href="/">
            <Logo height={43} width={100} />
          </Link>
        </div>

        <div className="header-actions">
          <Link href="/cart" className="cart-icon">
            <Basket width={22} height={21} />
            <span className="cart-count">0</span>
          </Link>
          <button className="search-button" onClick={() => setSearch(true)}>
            <Search width={22} height={21} />
          </button>
        </div>
      </header>

      {/* {menuOpen && ( */}
      <div className={`mobile-menu-overlay ${menuOpen ? "isVisible" : ""}`}>
        <div
          className={`mobile-menu ${menuOpen ? "isVisible" : ""}`}
          ref={menuRef}
        >
          {/* Language selector */}
          <div className="language-selector">
            <LanguageSwitcher lang={lang} />
          </div>

          {/* Navigation */}
          <nav className="menu-navigation">
            {navigationStack.length > 0 && (
              <div className="navigation-header">
                <button className="back-button" onClick={navigateBack}>
                  {/* <ChevronLeft size={20} /> */}
                  <ArrowLeft width={16} height={16} />
                  <span>Назад</span>
                </button>
              </div>
            )}

            {currentTitle && <h2 className="category-title">{currentTitle}</h2>}

            <ul className="menu-items">
              {currentLevel.map((item) => (
                <li key={item.id} className="menu-item">
                  {item.children && item.children.length > 0 ? (
                    <button
                      className="category-button"
                      onClick={() => navigateToSubcategory(item)}
                    >
                      {item.title}
                      <ArrowIcon width={12} height={12} />
                      {/* <ChevronRight size={20} /> */}
                    </button>
                  ) : (
                    <div
                      className="category-link__wrapper"
                      onClick={() => setMenuOpen(false)}
                    >
                      <Link href={item.link || "#"} className="category-link">
                        {item.title}
                      </Link>
                      <span className="category-link__wrapper__underline"></span>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* User account section - only show at the root level */}
            {navigationStack.length === 0 && (
              <div
                className="user-account-section"
                onClick={() => setMenuOpen(false)}
              >
                <button
                  className="account-link"
                  onClick={() => {
                    setMenuOpen(false);
                    onFormOpen();
                    onTypeFormSubmit("SignIn");
                  }}
                >
                  <Login width={17} height={16} />
                  <span>Особистий кабінет</span>
                </button>

                <Link
                  href="/cart"
                  className="cart-link"
                  onClick={() => setMenuOpen(false)}
                >
                  <Basket width={17} height={16} />
                  <span>
                    Кошик <span className="count">0</span>
                  </span>
                </Link>

                <Link
                  href="/wishlist"
                  className="wishlist-link"
                  onClick={() => setMenuOpen(false)}
                >
                  <Favorite width={17} height={16} />
                  <span>
                    Відкладені <span className="count">0</span>
                  </span>
                </Link>

                <a href="tel:0800300334" className="phone-link">
                  <Phone width={17} height={16} />
                  <span>0800 300 334</span>
                </a>

                <div className="contact-info">
                  <h3>Контактна інформація</h3>

                  <div className="business-hours">
                    <LocationIcon width={20} height={20} />
                    <div>
                      <span>Пн.-Пт. з 11:00 до 18:00 години</span>
                      <br />
                      <button
                        className="callback-link"
                        onClick={() => {
                          setMenuOpen(false);
                          onFormOpen();
                          onTypeFormSubmit("CallBack");
                        }}
                      >
                        Зворотний дзвінок
                      </button>
                    </div>
                  </div>

                  <a href="mailto:lviv@skm-music.com.ua" className="email-link">
                    <EnvelopeIcon width={20} height={16} />
                    <span>lviv@skm-music.com.ua</span>
                  </a>

                  <div className="social-links">
                    <a href="#" className="social-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      <span>Facebook</span>
                    </a>
                    <a href="#" className="social-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                      <span>Twitter</span>
                    </a>
                    <a href="#" className="social-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                      <span>Instagram</span>
                    </a>
                    <a href="#" className="social-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
      {/* )} */}
    </>
  );
}
