import Link from "next/link";
import "./Favorities.scss";
import Fav from "@/public/cart/favoritites.svg";
import { Locale } from "@/i18n.config";

export default function page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div className="favPage">
      <div className="favPage__container">
        <div>
          <Fav />
        </div>
        <div>
          <h2>Ваше обране пусте</h2>
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
