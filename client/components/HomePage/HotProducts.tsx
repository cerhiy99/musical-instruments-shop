"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./HotProducts.scss";

type FilterHot = "hit" | "advice" | "new" | "discount";

// Mock data
export const products = [
  {
    id: 1,
    title: "Сувенір 'Нотка'",
    price: 447,
    oldPrice: 470,
    image: "/placeholder.svg?height=300&width=300",
    labels: ["hit"],
    inStock: true,
  },
  {
    id: 2,
    title: "Скрипка 'CKM-Luthier' Solo 4/4 Artist модель",
    price: 133950,
    oldPrice: 145000,
    image: "/placeholder.svg?height=300&width=300",
    labels: ["hit", "advice"],
    inStock: true,
  },
  {
    id: 3,
    title: "Нотная тетрадь 'CKM'",
    price: 141,
    oldPrice: 199,
    image: "/placeholder.svg?height=300&width=300",
    labels: ["new", "hit", "advice", "discount"],
    inStock: true,
  },
  {
    id: 4,
    title: "Футляр для скрипки MAX&FINN",
    price: 11261,
    oldPrice: 12999,
    image: "/placeholder.svg?height=300&width=300",
    labels: ["advice", "hit"],
    inStock: false,
  },
  {
    id: 5,
    title: "Волос для смичка Silver",
    price: 670,
    image: "/placeholder.svg?height=300&width=300",
    labels: ["new", "hit", "discount"],
    inStock: false,
  },
  {
    id: 6,
    title: "Футляр для віолончелі BC1602",
    price: 13864,
    oldPrice: 15000,
    image: "/placeholder.svg?height=300&width=300",
    labels: ["hit", "advice"],
    inStock: false,
  },
  {
    id: 7,
    title: "Полегшений металічний футляр для скрипки",
    price: 26567,
    oldPrice: 27999,
    image: "/placeholder.svg?height=300&width=300",
    labels: ["hit", "advice"],
    inStock: false,
  },
  {
    id: 8,
    title: "Віолончель 'CKM-Luthier' 4/4 Artist",
    price: 189763,
    oldPrice: 209763,
    image: "/placeholder.svg?height=300&width=300",
    labels: ["hit", "discount"],
    inStock: true,
  },
  {
    id: 9,
    title: "Підставка для скрипки Aubert з Міланської фанери",
    price: 1429,
    oldPrice: 1500,
    image: "/placeholder.svg?height=300&width=300",
    labels: ["hit", "discount"],
    inStock: true,
  },
  {
    id: 10,
    title: "Футляр для альта BAM Stylus Oblong до 41,5 см",
    price: 17637,
    oldPrice: 19999,
    image: "/placeholder.svg?height=300&width=300",
    labels: ["hit", "discount"],
    inStock: false,
  },
];

const Badge: React.FC<{ type: string }> = ({ type }) => {
  return (
    <div className={`badge badge__${type}`}>
      <p>{type.toUpperCase()}</p>
    </div>
  );
};

const HotProducts: React.FC = () => {
  const [filter, setFilter] = useState<FilterHot>("hit");

  const handleFilter = (type: FilterHot) => {
    setFilter(type);
  };
  const filteredProducts = products.filter((product) => {
    return product.labels.some((labelName) => labelName === filter)
      ? product
      : "";
  });
  return (
    <div className="hotProducts__container">
      <div className="hotProducts__btn--wrapper">
        <button
          onClick={() => handleFilter("hit")}
          className={`hotProduct__btn ${filter === "hit" ? "active" : ""}`}
        >
          Хит
        </button>
        <button
          onClick={() => handleFilter("advice")}
          className={`hotProduct__btn ${filter === "advice" ? "active" : ""}`}
        >
          Советуем
        </button>
        <button
          onClick={() => handleFilter("new")}
          className={`hotProduct__btn ${filter === "new" ? "active" : ""}`}
        >
          Новинка
        </button>
        <button
          onClick={() => handleFilter("discount")}
          className={`hotProduct__btn ${filter === "discount" ? "active" : ""}`}
        >
          Акция
        </button>
      </div>

      <div className="categories__grid">
        {filteredProducts.map((product) => (
          <Link href={"/catalog"} key={product.id}>
            <div className="hotGoods__grid--item">
              <div className="inner__wrapper">
                <div className="badge__wrapper">
                  <div className="badge__wrapper__container">
                    {product.labels.map((label, i) => (
                      <Badge type={label} key={`label ${i}`} />
                    ))}
                  </div>
                </div>

                <Image
                  src={"/images/banner1.jpg"}
                  width={135}
                  height={135}
                  alt="text"
                />
              </div>
              <div className="grid--HotItem-text">{product.title}</div>
              <div className="grid--HotItem-store">
                {product.inStock
                  ? "✅ Есть на складе (2)"
                  : "Нет на складе (можно заказать)"}
              </div>
              <div className="hotGoods__prices">
                <p className="hotGoods__currentPrice">{product.price}грн.</p>
                <p className="hotGoods__prevPrice">{product.oldPrice}грн.</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default HotProducts;
