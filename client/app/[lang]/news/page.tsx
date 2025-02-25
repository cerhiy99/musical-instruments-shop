import React from "react";

import "./news.scss";
import Image from "next/image";
import Pagination from "@/components/ui/PaginationComponent";
const imageUrl = "/images/banner1.jpg";
const categories = [
  {
    id: 1,
    name: "Струнно-смычковые инструменты",
    image: "/images/category/categoryItem1.png",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    id: 2,
    image: "/images/category/categoryItem2.png",
    name: "Футляры и чехлы для струнных инструментов",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    id: 3,
    image: "/images/category/categoryItem3.png",
    name: "Аксессуары для струнных инструментов",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    id: 4,
    image: "/images/category/categoryItem4.png",
    name: "Струны",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    id: 5,
    image: "/images/category/categoryItem5.png",
    name: "Инструменты и материалы для скрипичных и гитарных мастеров",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    id: 6,
    image: "/images/category/categoryItem6.png",
    name: "Аксессуары для духовых инструментов",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    id: 7,
    image: "/images/category/categoryItem7.png",
    name: "Деревянные духовые инструменты",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    id: 8,
    image: "/images/category/categoryItem8.png",
    name: "Медные духовые инструменты",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    id: 9,
    image: "/images/category/categoryItem9.png",
    name: "Футляры и чехлы для духовых инструментов",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    id: 10,
    image: "/images/category/categoryItem10.png",
    name: "Футляры и чехлы для гитар",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    id: 11,
    image: "/images/category/categoryItem11.png",
    name: "Пюпитры, стойки и прочие аксессуары",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    id: 12,
    image: "/images/category/categoryItem12.png",
    name: "Канцелярия и сувениры",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    id: 13,
    image: "/images/category/categoryItem13.png",
    name: "Музыкальная литература, ноты",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    id: 14,
    image: "/images/category/categoryItem14.png",
    name: "Ремонт музыкальных инструментов, экспертная оценка",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
];
export default function page() {
  return (
    <div className="catalogPage">
      <div className="catalogPage__grid">
        {categories.map((category, i) => (
          <div className="catalogPage__grid--item" key={i}>
            <div className="catalogPage--image">
              <Image width={120} height={120} src={category.image} alt="text" />
            </div>
            <div className="">
              <h4>{category.name}</h4>
              <ul>
                {category.innerCategory.map((subcategory, i) => (
                  <li key={i}>
                    <p>{subcategory}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
}
