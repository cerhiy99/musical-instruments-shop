import ProductList from "@/components/CatalogList/CatalogList";
import "./CatalogId.scss";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n.config";
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
const sampleProducts = [
  {
    id: "1",
    title: 'Скрипка "CKM-Luthier" Solist 4/4, модель "Strad" (Antik)',
    articleNumber: "CKM-V StradAnt",
    price: {
      current: 447,
      old: 470,
    },
    savings: {
      amount: 7050,
      percentage: 5,
    },
    image: "/images/banner1.jpg",
    inStock: true,
    labels: {
      isAdviced: false,
      isNew: false,
      isHit: true,
      isDiscount: false,
    },
    isFavorite: false,
    brands: "СКМ",
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
    image: "/images/banner1.jpg",
    inStock: true,
    labels: {
      isAdviced: true,
      isNew: false,
      isHit: true,
      isDiscount: false,
    },
    isFavorite: false,
    brands: "СКМ & Co.",
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
    image: "/images/banner1.jpg",
    inStock: true,
    labels: {
      isAdviced: true,
      isNew: true,
      isHit: true,
      isDiscount: true,
    },
    isFavorite: false,
    brands: "СКМ & Co.",
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
    image: "/images/banner1.jpg",
    inStock: false,
    labels: {
      isAdviced: true,
      isNew: false,
      isHit: true,
      isDiscount: true,
    },
    isFavorite: false,
    brands: "СКМ & Co. Tech",
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
    image: "/images/banner1.jpg",
    inStock: false,
    labels: {
      isAdviced: true,
      isNew: false,
      isHit: true,
      isDiscount: true,
    },
    isFavorite: false,
    brands: "Fridher",
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
    image: "/images/banner1.jpg",
    inStock: false,
    labels: {
      isAdviced: true,
      isNew: false,
      isHit: true,
      isDiscount: true,
    },
    isFavorite: false,
    brands: "Fridher",
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
    image: "/images/banner1.jpg",
    inStock: false,
    labels: {
      isAdviced: true,
      isNew: false,
      isHit: true,
      isDiscount: true,
    },
    isFavorite: false,
    brands: "СКМ & Co.",
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
    image: "/images/banner1.jpg",
    inStock: false,
    labels: {
      isAdviced: false,
      isNew: false,
      isHit: true,
      isDiscount: true,
    },
    isFavorite: false,
    brands: "Fridher",
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
    image: "/images/banner1.jpg",
    inStock: false,
    labels: {
      isAdviced: false,
      isNew: false,
      isHit: true,
      isDiscount: true,
    },
    isFavorite: false,
    brands: "СКМ & Co.",
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
    image: "/images/banner1.jpg",
    inStock: false,
    labels: {
      isAdviced: false,
      isNew: false,
      isHit: true,
      isDiscount: true,
    },
    isFavorite: false,
    brands: "СКМ & Co.",
  },
  {
    id: "11",
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
    image: "/images/banner1.jpg",
    inStock: false,
    labels: {
      isAdviced: false,
      isNew: false,
      isHit: true,
      isDiscount: true,
    },
    isFavorite: false,
    brands: "СКМ & Co.",
  },
];

// const sampleProducts = [];
export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  if (categories.length === 0) {
    return <div>Нет категорий</div>;
  }
  if (sampleProducts.length > 0) {
    return <ProductList products={sampleProducts} lang={lang} />;
  }
  return (
    <div className="catalog-items">
      {categories.map((category) => (
        <div className="catalog-items__item" key={category.id}>
          <Link href={`/${lang}/catalog/${category.id}`}></Link>
          <div className="catalog-item__image">
            <Image
              src={category.image}
              alt={category.name}
              width={140}
              height={140}
            />
          </div>
          <div className="catalog-item__name">
            <p>{category.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
