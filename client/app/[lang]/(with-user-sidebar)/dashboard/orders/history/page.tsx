"use client";

import { Locale } from "@/i18n.config";
import "./Histroy.scss";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import { useState } from "react";

const MockOrders = [
  {
    id: 222689,
    date: "15.03.2023",
    items: 3,
    total: 4650,
    currency: "грн",
  },
  {
    id: 222629,
    date: "15.03.2023",
    items: 3,
    total: 4650,
    currency: "грн",
  },
  {
    id: 222619,
    date: "15.03.2023",
    items: 3,
    total: 4650,
    currency: "грн",
  },
  {
    id: 112689,
    date: "15.03.2023",
    items: 3,
    total: 4650,
    currency: "грн",
  },
];

export default function Histroy({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // const { aside } = await getDictionary(lang);

  const [orders, setOtrders] = useState(MockOrders);
  const handleRemoveOrder = (orderID: number) => {
    setOtrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderID)
    );
  };

  return (
    <div className="orders">
      <h3>Мои заказы</h3>
      {orders.length === 0 ? (
        <div className="orders-none">
          <div className="orders-item">
            <p>Замовлення відсутні.</p>
          </div>
          <div className="orders-item--link">
            <Link href={`/${lang}/catalog`} />
            Перейти в каталог
          </div>
        </div>
      ) : (
        orders.map((order, index) => (
          <>
            <div key={index} className="orders-item">
              <p>
                Замовлення №{order.id} від {order.date}, {order.items} товари на
                суму {order.total} {order.currency}.
              </p>
            </div>
            <div className="orders-buttons">
              <div className="orders-buttons__left">
                <Link
                  href={`history/${order.id}`}
                  className="orders-buttons--details blue-orders-button"
                >
                  Детальніше про замовлення
                </Link>
                <button className="orders-buttons--repeat blue-orders-button">
                  Повторити замовлення
                </button>
              </div>
              <div className="orders-buttons__right">
                <button
                  className="orders-buttons--cancel"
                  onClick={() => handleRemoveOrder(order.id)}
                >
                  Скасувати замовлення
                </button>
              </div>
            </div>
          </>
        ))
      )}
    </div>
  );
}
