import Link from "next/link";
import "./Cart.scss";
import Cart from "@/public/cart/cart.svg";

export default function page() {
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
            <Link href={"/catalog"}>Нажмите здесь</Link>, чтобы продолжить
            покупки
          </p>
        </div>
      </div>
    </div>
  );
}
