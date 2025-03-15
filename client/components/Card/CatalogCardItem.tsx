import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./CatalogCardItem.scss";
import { type Product } from "@/types/catalog";
import Badge from "../ui/Badge/Bdge";
import { Locale } from "@/i18n.config";
interface ProductCardProps {
  product: Product;
  lang: Locale;
}

const CatalogCardItem: React.FC<ProductCardProps> = ({ product, lang }) => {
  return (
    <div>
      <Link href={`/${lang}/catalog`}></Link>
      <div className="hotGoods__grid--item">
        <div className="inner__wrapper">
          <div className="badge__wrapper">
            <div className="badge__wrapper__container">
              {product.labels.isDiscount && <Badge type="discount" />}
              {product.labels.isAdviced && <Badge type="advice" />}
              {product.labels.isNew && <Badge type="new" />}
              {product.labels.isHit && <Badge type="hit" />}
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
          <p className="hotGoods__currentPrice">{product.price.current}грн.</p>
          <p className="hotGoods__prevPrice">{product.price.old}грн.</p>
        </div>
      </div>
    </div>
  );
};
export default CatalogCardItem;
