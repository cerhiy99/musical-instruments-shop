import { notFound } from "next/navigation";
import ProductGallery from "@/components/CurrentProduct/product-gallery";
import ProductTabs from "@/components/CurrentProduct/product-tabs";
import "./CurrentProduct.scss";
import NovaPost from "@/components/ui/novapost/NovaPost";
import AvailabilityIcon from "@/components/ui/AvailabilityIcon/AvailabilityIcon";
import Badge from "@/components/ui/Badge/Bdge";
import Heart from "@/public/Navbar/NavbarIcons/favorite.svg";
import QuantitySelector from "@/components/ui/QuantitySelector/QuantitySelector";
import FoundCheaper from "@/components/FoundCheaper/FoundCheaper";
import BuyOneClick from "@/components/BuyOneClick/BuyOneClick";

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
            <FoundCheaper />
          </div>

          <NovaPost />

          <div className="actions">
            <QuantitySelector />
            <button className="addToCartButton">В корзину</button>
          </div>

          <BuyOneClick />

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
