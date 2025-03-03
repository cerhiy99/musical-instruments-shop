import { notFound } from "next/navigation";
import Image from "next/image";
import ProductGallery from "@/components/CurrentProduct/product-gallery";
import ProductTabs from "@/components/CurrentProduct/product-tabs";
import "./CurrentProduct.scss";
import Wallet from "@/public/wallet.svg";
import CircleX from "@/public/circle-x.svg";
import NovaPost from "@/components/ui/novapost/NovaPost";
import AvailabilityIcon from "@/components/ui/AvailabilityIcon/AvailabilityIcon";
import Plus from "@/public/icons/plus.svg";
import Minus from "@/public/icons/minus.svg";
import Badge from "@/components/ui/Badge/Bdge";
import Heart from "@/public/Navbar/NavbarIcons/favorite.svg";

// Имитация получения данных о продукте
async function getProduct(id: string) {
  // В реальном приложении здесь был бы запрос к API или базе данных

  //   if (id === "cermak") {
  return {
    id: "cermak",
    title: "Скрипка чешского мастера Езефа Чермака",
    article: "CERMAK",
    brand: "JOSEF CERMAK",
    price: 156275,
    oldPrice: 164500,
    savings: 8225,
    inStock: true,
    description:
      "Скрипка чешского мастера Езефа Чермака\nРазмер: 4/4\n\nПроизводитель – мастер Josef Cermak, Kutna Hora, 1937 год",
    images: [
      "/images/category/categoryItem9.png",
      "/images/category/categoryItem8.png",
      "/images/category/categoryItem7.png",
      "/images/category/categoryItem3.png",
      "/images/category/categoryItem2.png",
      "/images/category/categoryItem4.png",
      "/images/category/categoryItem5.png",
      "/images/category/categoryItem6.png",
    ],
  };
  //   }
  //   return null;
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="productPage">
      <div className="productContainer">
        <div className="productLeft">
          <div className="productLeft__sub">
            <div className="badge__wrapper">
              <div className="badge__wrapper__container">
                {<Badge type="discount" />}
                {<Badge type="advice" />}
                {<Badge type="new" />}
                {<Badge type="hit" />}
              </div>
            </div>

            <button className={`favorite-button `}>
              <div className={`favorite-icon`}>
                <Heart width={18} height={18} />
              </div>
            </button>
          </div>
          <div className="productGallery">
            <ProductGallery images={product.images} />
          </div>
        </div>

        <div className="productInfo">
          <div className="productMeta">
            <div className="articleInfo">
              <span>Артикул: {product.article}</span>
              <span>Бренд: {product.brand}</span>
            </div>
          </div>

          <div className="priceBlock">
            <div className="priceContainer">
              <div className="currentPrice">{product.price} грн.</div>
              <div className="oldPrice">{product.oldPrice} грн.</div>
            </div>
            <div className="savings">
              <span className="savingsLabel">Экономия</span>
              <span className="savingsAmount">{product.savings} грн.</span>
            </div>
          </div>

          <div className="availability">
            <AvailabilityIcon availability={product.inStock} />
            <button className="priceMatch">
              <Wallet width={15} height={15} />
              <div className="priceMatchInfo">
                <span>Нашли дешевле? </span>
                <span className="spanGreen">Сделаем скидку!</span>
              </div>
            </button>
          </div>

          <NovaPost />

          <div className="actions">
            <div className="quantitySelector">
              <button className="quantityButton minus">
                <Minus size={24} />
              </button>
              <input type="text" value="1" className="quantityInput" />
              <button className="quantityButton plus">
                <Plus size={24} />
              </button>
            </div>
            <button className="addToCartButton">В корзину</button>
          </div>

          <button className="buyOneClickButton">Купить в 1 клик</button>

          <div className="priceNote">
            Цена действительна только для интернет-магазина и может отличаться
            от цен в розничных магазинах
          </div>
        </div>
      </div>

      <ProductTabs product={product} />
    </div>
  );
}
