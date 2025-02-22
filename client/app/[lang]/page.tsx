import { Locale } from "@/i18n.config";
import "./Home.scss";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Link from "next/link";
import Image from "next/image";
import HotProducts from "@/components/HomePage/HotProducts";
import GreetingBanner from "@/components/HomePage/GreetingBanner";
import Brands from "@/components/HomePage/Brands";

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
    image: "/placeholder.svg?height=200&width=200",
    link: "/categories/string-instruments",
  },
  {
    id: 2,
    title: "Футляри и чехли для струнних інструментів",
    image: "/placeholder.svg?height=200&width=200",
    link: "/categories/cases",
  },
  {
    id: 3,
    title: "Аксесуари для струнних інструментів",
    image: "/placeholder.svg?height=200&width=200",
    link: "/categories/accessories",
  },
  {
    id: 4,
    title: "Струни",
    image: "/placeholder.svg?height=200&width=200",
    link: "/categories/strings",
  },
  {
    id: 5,
    title: "Аксесуари для духових інструментів",
    image: "/placeholder.svg?height=200&width=200",
    link: "/categories/wind-accessories",
  },
  {
    id: 6,
    title: "Духові інструменти",
    image: "/placeholder.svg?height=200&width=200",
    link: "/categories/wind-instruments",
  },
  {
    id: 7,
    title: "Пюпітри, стійки и прочие аксесуари",
    image: "/placeholder.svg?height=200&width=200",
    link: "/categories/stands",
  },
  {
    id: 8,
    title: "Канцелярія и сувеніри",
    image: "/placeholder.svg?height=200&width=200",
    link: "/categories/souvenirs",
  },
  {
    id: 9,
    title: "Музикальна література, ноти",
    image: "/placeholder.svg?height=200&width=200",
    link: "/categories/literature",
  },
  {
    id: 10,
    title: "Аксесуари для духових інструментів",
    image: "/placeholder.svg?height=200&width=200",
    link: "/categories/wind-accessories",
  },
  {
    id: 11,
    title: "Духові інструменти",
    image: "/placeholder.svg?height=200&width=200",
    link: "/categories/wind-instruments",
  },
  {
    id: 12,
    title: "Пюпітри, стійки и прочие аксесуари",
    image: "/placeholder.svg?height=200&width=200",
    link: "/categories/stands",
  },
  {
    id: 13,
    title: "Канцелярія и сувеніри",
    image: "/placeholder.svg?height=200&width=200",
    link: "/categories/souvenirs",
  },
  {
    id: 14,
    title: "Музикальна література, ноти",
    image: "/placeholder.svg?height=200&width=200",
    link: "/categories/literature",
  },
];
export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div className="home">
      <ImageSlider images={sliderImages} interval={5000} />
      <div className="titleCategoty__container">
        <h4 className="titleCategoty__title">Популярные категории</h4>
        <Link href={"/catalog"}>Весь каталог</Link>
      </div>
      <div className="categories__grid">
        {categories.map((category) => (
          <Link href={"/catalog"} key={category.id}>
            <div className="categories__grid--item">
              <Image
                src={"/images/banner1.jpg"}
                width={140}
                height={140}
                alt="text"
              />
              <div className="grid--item-text">
                <p>{category.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <HotProducts />
      <GreetingBanner />
      <Brands />
    </div>
  );
}
