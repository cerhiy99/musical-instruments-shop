import React from "react";

import "./Catalog.scss";
import Image from "next/image";
const imageUrl = "/images/banner1.jpg";
const categories = [
  {
    name: "Струнно-смычковые инструменты",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    name: "Футляры и чехлы для струнных инструментов",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    name: "Аксессуары для струнных инструментов",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    name: "Струны",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    name: "Инструменты и материалы для скрипичных и гитарных мастеров",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    name: "Аксессуары для духовых инструментов",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    name: "Деревянные духовые инструменты",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    name: "Медные духовые инструменты",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    name: "Футляры и чехлы для духовых инструментов",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    name: "Футляры и чехлы для гитар",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    name: "Пюпитры, стойки и прочие аксессуары",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    name: "Канцелярия и сувениры",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
    name: "Музыкальная литература, ноты",
    innerCategory: ["Скрипки", "Виолончели", "Альты", "Контрабасы"],
  },
  {
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
              <Image width={120} height={120} src={imageUrl} alt="text" />
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
    </div>
  );
}
