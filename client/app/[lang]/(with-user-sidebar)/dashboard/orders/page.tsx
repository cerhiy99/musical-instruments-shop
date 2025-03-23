import { Locale } from "@/i18n.config";
import "./Orders.scss";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";

export default async function Orders({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // const { aside } = await getDictionary(lang);

  return (
    <div className="orders">
      <h3>Текущие заказы не найдены</h3>
      <div className="orders-link">
        <Link href={`/${lang}/dashboard/orders/history`} />
        Посмотреть историю заказов
      </div>
      <div className="orders-link">
        <Link href={`/${lang}/catalog`} />
        Перейти в каталог
      </div>
    </div>
  );
}
