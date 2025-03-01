"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./HotProducts.scss";
import CatalogCardItem from "../Card/CatalogCardItem";
import { Filter } from "@/types/catalog";

type FilterHot = {
  isAdviced: boolean;
  isNew: boolean;
  isHit: boolean;
  isDiscount: boolean;
};

// Mock data
const products = [
  {
    id: "1",
    title: "Сувенір 'Нотка'",
    articleNumber: "CKM-V StradAnt",
    price: {
      current: 447,
      old: 470,
    },
    savings: {
      amount: 7050,
      percentage: 5,
    },
    image: "/placeholder.svg?height=300&width=300",
    inStock: true,
    labels: {
      isAdviced: false,
      isNew: false,
      isHit: true,
      isDiscount: false,
    },
    isFavorite: false,
  },
  {
    id: "2",
    title: "Скрипка 'CKM-Luthier' Solo 4/4 Artist модель",
    articleNumber: "CKM-V StradAnt",
    price: {
      current: 133950,
      old: 145000,
    },
    savings: {
      amount: 7050,
      percentage: 5,
    },
    image: "/placeholder.svg?height=300&width=300",
    inStock: true,
    labels: {
      isAdviced: true,
      isNew: false,
      isHit: true,
      isDiscount: false,
    },
    isFavorite: false,
  },
  {
    id: "3",
    title: "Нотная тетрадь 'CKM'",
    articleNumber: "CKM-V StradAnt",
    price: {
      current: 133950,
      old: 145000,
    },
    savings: {
      amount: 7050,
      percentage: 5,
    },
    image: "/placeholder.svg?height=300&width=300",
    inStock: true,
    labels: {
      isAdviced: true,
      isNew: true,
      isHit: true,
      isDiscount: true,
    },
    isFavorite: false,
  },
  {
    id: "4",
    title: "Футляр для скрипки MAX&FINN",
    articleNumber: "CKM-V StradAnt",
    price: {
      current: 11261,
      old: 12999,
    },
    savings: {
      amount: 7050,
      percentage: 5,
    },
    image: "/placeholder.svg?height=300&width=300",
    inStock: false,
    labels: {
      isAdviced: true,
      isNew: false,
      isHit: true,
      isDiscount: true,
    },
    isFavorite: false,
  },
  {
    id: "5",
    title: "Волос для смичка Silver",
    articleNumber: "CKM-V StradAnt",
    price: {
      current: 670,
      old: 720,
    },
    savings: {
      amount: 7050,
      percentage: 5,
    },
    image: "/placeholder.svg?height=300&width=300",
    inStock: false,
    labels: {
      isAdviced: true,
      isNew: false,
      isHit: true,
      isDiscount: true,
    },
    isFavorite: false,
  },

  {
    id: "6",
    title: "Футляр для віолончелі BC1602",
    articleNumber: "CKM-V StradAnt",
    price: {
      current: 13864,
      old: 15000,
    },
    savings: {
      amount: 7050,
      percentage: 5,
    },
    image: "/placeholder.svg?height=300&width=300",
    inStock: false,
    labels: {
      isAdviced: true,
      isNew: false,
      isHit: true,
      isDiscount: true,
    },
    isFavorite: false,
  },
  {
    id: "7",
    title: "Полегшений металічний футляр для скрипки",
    articleNumber: "CKM-V StradAnt",
    price: {
      current: 26567,
      old: 27999,
    },
    savings: {
      amount: 7050,
      percentage: 5,
    },
    image: "/placeholder.svg?height=300&width=300",
    inStock: false,
    labels: {
      isAdviced: true,
      isNew: false,
      isHit: true,
      isDiscount: true,
    },
    isFavorite: false,
  },
  {
    id: "8",
    title: "Віолончель 'CKM-Luthier' 4/4 Artist",
    articleNumber: "CKM-V StradAnt",
    price: {
      current: 189763,
      old: 209763,
    },
    savings: {
      amount: 7050,
      percentage: 5,
    },
    image: "/placeholder.svg?height=300&width=300",
    inStock: false,
    labels: {
      isAdviced: false,
      isNew: false,
      isHit: true,
      isDiscount: true,
    },
    isFavorite: false,
  },
  {
    id: "9",
    title: "Підставка для скрипки Aubert з Міланської фанери",
    articleNumber: "CKM-V StradAnt",
    price: {
      current: 1429,
      old: 1500,
    },
    savings: {
      amount: 7050,
      percentage: 5,
    },
    image: "/placeholder.svg?height=300&width=300",
    inStock: false,
    labels: {
      isAdviced: false,
      isNew: false,
      isHit: true,
      isDiscount: true,
    },
    isFavorite: false,
  },

  {
    id: "10",
    title: "Футляр для альта BAM Stylus Oblong до 41,5 см",
    articleNumber: "CKM-V StradAnt",
    price: {
      current: 17637,
      old: 19999,
    },
    savings: {
      amount: 7050,
      percentage: 5,
    },
    image: "/placeholder.svg?height=300&width=300",
    inStock: false,
    labels: {
      isAdviced: false,
      isNew: false,
      isHit: true,
      isDiscount: true,
    },
    isFavorite: false,
  },
];

const HotProducts: React.FC = () => {
  const [filter, setFilter] = useState<FilterHot>({
    isAdviced: false,
    isNew: false,
    isHit: true,
    isDiscount: false,
  });

  const handleFilter = (type: keyof FilterHot) => {
    setFilter({
      isAdviced: false,
      isNew: false,
      isHit: false,
      isDiscount: false,
      [type]: true,
    });
  };
  const filteredProducts = products.filter((product) =>
    Object.keys(filter).some(
      (key) =>
        filter[key as keyof FilterHot] && product.labels[key as keyof FilterHot]
    )
  );
  return (
    <div className="hotProducts__container">
      <div className="hotProducts__btn--wrapper">
        <button
          onClick={() => handleFilter("isHit")}
          className={`hotProduct__btn ${filter.isHit && "active"}`}
        >
          Хит
        </button>
        <button
          onClick={() => handleFilter("isAdviced")}
          className={`hotProduct__btn ${filter.isAdviced && "active"}`}
        >
          Советуем
        </button>
        <button
          onClick={() => handleFilter("isNew")}
          className={`hotProduct__btn ${filter.isNew && "active"}`}
        >
          Новинка
        </button>
        <button
          onClick={() => handleFilter("isDiscount")}
          className={`hotProduct__btn ${filter.isDiscount && "active"}`}
        >
          Акция
        </button>
      </div>

      <div className="categories__grid">
        {filteredProducts.map((product) => (
          <CatalogCardItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default HotProducts;
