"use client";
import Link from "next/link";
import "./Sidebar.scss";
import { useState } from "react";
import ArrowIcon from "@/public/arrow.svg";
import Image from "next/image";

const imageUrl = "/images/banner1.jpg";
const categories = [
  {
    name: "Струнно-смычковые инструменты",
    innerCategory: [
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
    ],
  },
  {
    name: "Футляры и чехлы для струнных инструментов",
    innerCategory: [
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
    ],
  },
  {
    name: "Аксессуары для струнных инструментов",
    innerCategory: [
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
    ],
  },
  {
    name: "Струны",
    innerCategory: [
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
    ],
  },
  {
    name: "Инструменты и материалы для скрипичных и гитарных мастеров",
    innerCategory: [
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
    ],
  },
  {
    name: "Аксессуары для духовых инструментов",
    innerCategory: [
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
    ],
  },
  {
    name: "Деревянные духовые инструменты",
    innerCategory: [
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
    ],
  },
  {
    name: "Медные духовые инструменты",
    innerCategory: [
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
    ],
  },
  {
    name: "Футляры и чехлы для духовых инструментов",
    innerCategory: [
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
    ],
  },
  {
    name: "Футляры и чехлы для гитар",
    innerCategory: [
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
    ],
  },
  {
    name: "Пюпитры, стойки и прочие аксессуары",
    innerCategory: [
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
    ],
  },
  {
    name: "Канцелярия и сувениры",
    innerCategory: [
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
    ],
  },
  {
    name: "Музыкальная литература, ноты",
    innerCategory: [
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
    ],
  },
  {
    name: "Ремонт музыкальных инструментов, экспертная оценка",
    innerCategory: [
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
      {
        subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
      },
    ],
  },
];
const isActive = false;
export default function Sidebar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleMouseEnter = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <aside className="sidebar">
      <nav className="categories">
        <ul>
          {categories.map((category) => (
            <li
              key={category.name}
              onMouseEnter={() => handleMouseEnter(category.name)}
              onMouseLeave={handleMouseLeave}
              className={`categoryItem ${
                activeCategory === category.name
                  ? isActive
                    ? "activeNavLink"
                    : "active"
                  : ""
              }`}
            >
              <Link href={`/category/${encodeURIComponent(category.name)}`}>
                <div className="categoryItem__wrapper">
                  <h3>{category.name}</h3>
                  <div className="categoryItem__wrapper--svg">
                    <ArrowIcon height={8} />
                  </div>
                </div>
              </Link>
              {/* {true && ( */}
              {activeCategory === category.name && (
                <div
                  className="megaMenu"
                  onMouseEnter={() => handleMouseEnter(category.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {category.innerCategory.map((inner, i) => (
                    <div
                      className="megaMenuContainer"
                      key={inner.subcategories[0] + i}
                    >
                      <div className="megaMenuContainer__image">
                        <Image
                          width={50}
                          height={50}
                          src={imageUrl}
                          alt="text"
                        />
                      </div>
                      <div className="megaMenuContainer__list">
                        <h4>{category.name}</h4>

                        <ul>
                          {inner.subcategories.map((subcategory) => (
                            <li key={subcategory}>
                              <Link
                                href={`/category/${encodeURIComponent(
                                  category.name
                                )}/${encodeURIComponent(subcategory)}`}
                              >
                                {subcategory}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <span className="categoryItem__underline"></span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="news">
        <h3>Новости</h3>
        <div className="newsItem">
          <span className="date">12 мая 2024</span>
          <Link href="/news/1">
            New test international Violin Competition awards plans
          </Link>
        </div>
        <div className="newsItem">
          <span className="date">17 мая 2024</span>
          <Link href="/news/2">У нашей мастерской юбилей</Link>
        </div>
      </div>
    </aside>
  );
}
