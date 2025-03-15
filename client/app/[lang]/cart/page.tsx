import Link from "next/link";
import "./Cart.scss";
import Cart from "@/public/cart/cart.svg";
import { Locale } from "@/i18n.config";

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
    </div>
  );
}
