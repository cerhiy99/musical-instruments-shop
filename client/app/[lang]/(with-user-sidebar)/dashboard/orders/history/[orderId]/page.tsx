import { Locale } from "@/i18n.config";
import "./OrderByid.scss";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";

const orders = [
  {
    id: 222689,
    date: "15.03.2023",
    items: 3,
    total: 4650,
    currency: "грн",
  },
  {
    id: 222689,
    date: "15.03.2023",
    items: 3,
    total: 4650,
    currency: "грн",
  },
  {
    id: 222689,
    date: "15.03.2023",
    items: 3,
    total: 4650,
    currency: "грн",
  },
  {
    id: 222689,
    date: "15.03.2023",
    items: 3,
    total: 4650,
    currency: "грн",
  },
];

export default async function OrderById({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // const { aside } = await getDictionary(lang);

  return (
    <div className="orders">
      <h3>Мои заказы</h3>
      {/* {orders.map((order, index) => (
        <>
          <div key={index} className="orders-item">
            <p>
              Замовлення №{order.id} від {order.date}, {order.items} товари на
              суму {order.total} {order.currency}.
            </p>
          </div>
          <div className="orders-buttons">
            <div className="orders-buttons__left">
              <button className="orders-buttons--details blue-orders-button">
                Детальніше про замовлення
              </button>
              <button className="orders-buttons--repeat blue-orders-button">
                Повторити замовлення
              </button>
            </div>
            <div className="orders-buttons__right">
              <button className="orders-buttons--cancel">
                Скасувати замовлення
              </button>
            </div>
          </div>
        </>
      ))} */}
    </div>
  );
}
