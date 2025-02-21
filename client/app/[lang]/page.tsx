import { Locale } from "@/i18n.config";
import "./Home.scss";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Link from "next/link";
import Image from "next/image";

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

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div className="home">
      <ImageSlider images={sliderImages} interval={5000} />
      <h4>Популярные категории</h4>
      <Link href={"/catalog"}>Весь каталог</Link>
      <div className="categories__grid">
        <Link href={"/catalog"}>
          <div className="categories__grid--item">
            <Image
              src={"/images/banner1.jpg"}
              width={140}
              height={140}
              alt="text"
            />
            <div className="grid--item-text">
              <p>Струнно-смычковые инструменты</p>
            </div>
          </div>
        </Link>
      </div>

      <Link href={"/catalog"}>Хит</Link>
      <Link href={"/catalog"}>Советуем</Link>
      <Link href={"/catalog"}>Новинка</Link>
      <Link href={"/catalog"}>Акция</Link>
      <div className="categories__grid">
        <Link href={"/catalog"}>
          <div className="hotGoods__grid--item">
            <div className="badge__wrapper">
              <div className="badge discount">Акция</div>
              <div className="badge hit">Хит</div>
              <div className="badge advice">Советуем</div>

              {/* <div className="badge new">Новинка</div> */}
              <Image
                src={"/images/banner1.jpg"}
                width={135}
                height={135}
                alt="text"
              />
            </div>
            <div className="grid--item-text">
              <p>Струнно-смычковые инструменты</p>
            </div>
            <div className="grid--item-store">
              <p>✅ Есть на складе (2)</p>
            </div>
            <div className="hotGoods__prices">
              <p className="hotGoods__currentPrice">447грн</p>
              <p className="hotGoods__prevPrice">470грн</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
