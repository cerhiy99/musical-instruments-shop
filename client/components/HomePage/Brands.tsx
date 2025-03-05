import React from "react";
import "./Brands.scss";
import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

const brandsLinks = [
  {
    url: "/images/brands/brand1.jpg",
    height: 33,
    width: 110,
    link: "/partners/1",
  },
  {
    url: "/images/brands/brand2.jpg",
    height: 90,
    width: 90,
    link: "/partners/1",
  },
  {
    url: "/images/brands/brand3.jpg",
    height: 60,
    width: 110,
    link: "/partners/2",
  },
  {
    url: "/images/brands/brand4.jpg",
    height: 60,
    width: 110,
    link: "/partners/3",
  },
  {
    url: "/images/brands/brand5.jpg",
    height: 69,
    width: 110,
    link: "/partners/4",
  },
  {
    url: "/images/brands/brand6.jpg",
    height: 77,
    width: 110,
    link: "/partners/5",
  },
  {
    url: "/images/brands/brand7.jpg",
    height: 29,
    width: 110,
    link: "/partners/6",
  },
  {
    url: "/images/brands/brand8.jpg",
    height: 54,
    width: 110,
    link: "/partners/5",
  },
];

type Props = {
  lang: Locale;
};
const Brands = async ({ lang }: Props) => {
  const { brands } = await getDictionary(lang);
  return (
    <div className="brand__container--main">
      <div className="titleCategoty__container">
        <h4 className="titleCategoty__title">{brands.manufacturer}</h4>
        <Link href={"/partners"}>{brands.allBrands}</Link>
      </div>
      <div className="brand__container--grid">
        {brandsLinks.map((brand) => (
          <div key={brand.url} className="brand__container--item">
            <Link href={brand.link} className="brand__container--link" />
            <Image
              src={brand.url}
              alt="text"
              width={brand.width}
              height={brand.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
