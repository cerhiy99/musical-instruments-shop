import { Locale } from "@/i18n.config";
import "./Home.scss";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Link from "next/link";
import Image from "next/image";
import HotProducts from "@/components/HomePage/HotProducts";
import GreetingBanner from "@/components/HomePage/GreetingBanner";
import Brands from "@/components/HomePage/Brands";

import { getDictionary } from "@/lib/dictionary";

const sliderImages = [
  {
    src: "/images/banner1.jpg",
    alt: "Мастерская «СКМ-Luthier»",
    text: "Мастерская «СКМ-Luthier»",
    url: "/workshop",
  },
  {
    src: "/images/banner1.jpg",
    alt: "Скрипки",
    text: "Наши лучшие скрипки",
    url: "/category/violins",
  },
  {
    src: "/images/banner1.jpg",
    alt: "Виолончели",
    text: "Профессиональные виолончели",
    url: "/category/cellos",
  },
  {
    src: "/images/banner1.jpg",
    alt: "Альты",
    text: "Альты высшего качества",
    url: "/category/violas",
  },
];

export const categories = [
  {
    id: 1,
    title: "Струнно-смичкові інструменти",
    image: "/images/category/categoryItem1.png",
    link: "/categories/string-instruments",
  },
  {
    id: 2,
    title: "Футляри и чехли для струнних інструментів",
    image: "/images/category/categoryItem2.png",
    link: "/categories/cases",
  },
  {
    id: 3,
    title: "Аксесуари для струнних інструментів",
    image: "/images/category/categoryItem3.png",
    link: "/categories/accessories",
  },
  {
    id: 4,
    title: "Струни",
    image: "/images/category/categoryItem4.png",
    link: "/categories/strings",
  },
  {
    id: 5,
    title: "Аксесуари для духових інструментів",
    image: "/images/category/categoryItem5.png",
    link: "/categories/wind-accessories",
  },
  {
    id: 6,
    title: "Духові інструменти",
    image: "/images/category/categoryItem6.png",
    link: "/categories/wind-instruments",
  },
  {
    id: 7,
    title: "Пюпітри, стійки и прочие аксесуари",
    image: "/images/category/categoryItem7.png",
    link: "/categories/stands",
  },
  {
    id: 8,
    title: "Канцелярія и сувеніри",
    image: "/images/category/categoryItem8.png",
    link: "/categories/souvenirs",
  },
  {
    id: 9,
    title: "Музикальна література, ноти",
    image: "/images/category/categoryItem9.png",
    link: "/categories/literature",
  },
  {
    id: 10,
    title: "Аксесуари для духових інструментів",
    image: "/images/category/categoryItem10.png",
    link: "/categories/wind-accessories",
  },
  {
    id: 11,
    title: "Духові інструменти",
    image: "/images/category/categoryItem11.png",
    link: "/categories/wind-instruments",
  },
  {
    id: 12,
    title: "Пюпітри, стійки и прочие аксесуари",
    image: "/images/category/categoryItem12.png",
    link: "/categories/stands",
  },
  {
    id: 13,
    title: "Канцелярія и сувеніри",
    image: "/images/category/categoryItem13.png",
    link: "/categories/souvenirs",
  },
  {
    id: 14,
    title: "Музикальна література, ноти",
    image: "/images/category/categoryItem14.png",
    link: "/categories/literature",
  },
];
export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { aside } = await getDictionary(lang);
  return (
    <div className="home">
      <ImageSlider images={sliderImages} interval={5000} />
      <div className="titleCategoty__container">
        <h4 className="titleCategoty__title">{aside.popularCatalog}</h4>
        <Link href={"/catalog"}>{aside.allCatalog}</Link>
      </div>
      <div className="categories__grid">
        {categories.map((category, i) => (
          <Link href={"/catalog"} key={category.id}>
            <div className="categories__grid--item">
              <Image
                src={category.image}
                width={140}
                height={140}
                alt={aside.catalog[i]}
              />
              <div className="grid--item-text">
                <p>{aside.catalog[i]}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <HotProducts />
      <GreetingBanner />
      <Brands lang={lang} />
    </div>
  );
}
