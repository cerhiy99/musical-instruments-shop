import Link from "next/link";
import "./Favorities.scss";
import Fav from "@/public/cart/favoritites.svg";

export default function page() {
  return (
    <div className="cartPage">
      <div className="cartPage__container">
        <div>
          <Fav />
        </div>
        <div>
          <h2>Ваше обране пусте</h2>
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
