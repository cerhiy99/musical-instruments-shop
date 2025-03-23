import Link from "next/link";
import "./Cart.scss";
import Cart from "@/public/cart/cart.svg";
import { Locale } from "@/i18n.config";
// import CartList from "@/components/Cart/Cartlist";

const mockData = [
  {
    id: 1,
    name: 'Комплект струн для альта KAPLAN FORZA от 16" и больше',
    price: 5604,
    oldPrice: 5899,
    quantity: 2,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Сурдина для альта резиновая, круглая",
    price: 115,
    oldPrice: 121,
    quantity: 2,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Заготовка кожи козы, на один смычок, цвет черный, полоса 35 x 55мм",
    price: 56,
    oldPrice: 59,
    quantity: 2,
    image: "https://via.placeholder.com/100",
  },
];

export default function page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div className="cartPage">
      <div className="cartPage__container">
        <div>
          <Cart />
        </div>
        <div>
          <h2>Ваша корзина пуста</h2>
        </div>
        <div>
          <p>
            <Link href={`/${lang}/catalog`}>Нажмите здесь</Link>, чтобы
            продолжить покупки
          </p>
        </div>
      </div>
      {/* <CartList /> */}
    </div>
  );
}
