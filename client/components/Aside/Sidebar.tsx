"use client";
import Link from "next/link";
import "./Sidebar.scss";
import { useRef, useState } from "react";
import ArrowIcon from "@/public/arrow.svg";

// const categories = [
//   "Струнно-смычковые инструменты",
//   "Футляры и чехлы для струнных инструментов",
//   "Аксессуары для струнных инструментов",
//   "Струны",
//   "Аксессуары для духовых инструментов",
//   "Духовые инструменты",
//   "Медные духовые инструменты",
//   "Футляры и чехлы для духовых инструментов",
//   "Пюпитры, стойки и прочие аксессуары",
//   "Канифоли и средства",
//   "Музыкальная литература, ноты",
//   "Ремонт музыкальных инструментов, мастерская",
// ];

const categories = [
  {
    name: "Струнно-смычковые инструменты",
    subcategories: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    name: "Футляры и чехлы для струнных инструментов",
    subcategories: ["Флейты", "Кларнеты", "Саксофоны", "Трубы"],
  },
  {
    name: "Аксессуары для струнных инструментов",
    subcategories: ["Смычки", "Струны", "Канифоль", "Футляры"],
  },
  {
    name: "Струны",
    subcategories: ["Смычки", "Струны", "Канифоль", "Футляры"],
  },
  {
    name: "Духовые инструменты",
    subcategories: ["Смычки", "Струны", "Канифоль", "Футляры"],
  },
  {
    name: "Медные духовые инструменты",
    subcategories: ["Смычки", "Струны", "Канифоль", "Футляры"],
  },
  {
    name: "Футляры и чехлы для духовых инструментов",
    subcategories: ["Смычки", "Струны", "Канифоль", "Футляры"],
  },
  {
    name: "Пюпитры, стойки и прочие аксессуары",
    subcategories: ["Смычки", "Струны", "Канифоль", "Футляры"],
  },
];

export default function Sidebar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (categoryName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveCategory(categoryName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 0); // delay if needed
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
                activeCategory === category.name ? ".active" : ""
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
              {activeCategory === category.name && (
                <div
                  className="megaMenu"
                  onMouseEnter={() => handleMouseEnter(category.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="megaMenuContainer">
                    <h4>{category.name}</h4>

                    <ul>
                      {category.subcategories.map((subcategory) => (
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
              )}
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
