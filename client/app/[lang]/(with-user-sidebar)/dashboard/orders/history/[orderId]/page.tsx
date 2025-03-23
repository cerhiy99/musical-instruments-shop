"use client";

import { useState } from "react";
import "./OrderByid.scss";
import Image from "next/image";
import IconArrow from "@/public/arrow.svg";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  discount: number;
  quantity: number;
  total: number;
  articleNumber: string;
  imageUrl: string;
}

interface OrderDetails {
  orderNumber: string;
  createdDate: string;
  status: string;
  statusDate: string;
  totalAmount: number;
  customerName: string;
  itemsCount: number;
  items: OrderItem[];
  deliveryCost: number;
}

export default function OrderDetails() {
  const [showDetails, setShowDetails] = useState(false);

  const orderData: OrderDetails = {
    orderNumber: "22689",
    createdDate: "15.03.2023",
    status: "Принят, ожидается оплата",
    statusDate: "15.03.2023",
    totalAmount: 4650,
    customerName: "Сергій Подолянчук",
    itemsCount: 3,
    deliveryCost: 0,
    items: [
      {
        id: "1",
        name: 'Комплект струн для альта KAPLAN FORZA от 16" и больше (K411, K412, K413, K414)',
        price: 4730,
        discount: 5,
        quantity: 1,
        total: 4494,
        articleNumber: "K410",
        imageUrl: "/images/category/categoryItem1.png",
      },
      {
        id: "2",
        name: "Сурдина для альта резиновая, круглая",
        price: 111,
        discount: 5,
        quantity: 1,
        total: 105,
        articleNumber: "T03",
        imageUrl: "/images/category/categoryItem1.png",
      },
      {
        id: "3",
        name: "Заготовка кожи козы, на один смычок, цвет черный, полоска 35 x 55мм",
        price: 54,
        discount: 5,
        quantity: 1,
        total: 51,
        articleNumber: "ZagGoat",
        imageUrl: "/images/category/categoryItem1.png",
      },
    ],
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="order">
      <h2 className="order__title">
        Мой заказ №{orderData.orderNumber}, создан {orderData.createdDate}
      </h2>
      <div className="order__item">
        <div className="order-details">
          <h3 className="order-details__block-title">
            Заказ №{orderData.orderNumber} от {orderData.createdDate},{" "}
            {orderData.itemsCount} товара на сумму {orderData.totalAmount} грн.
          </h3>

          <div className="order-details__summary">Информация о заказе</div>
          <div className="order-details__info-grid">
            <div className="order-details__info-column">
              <div className="order-details__info-label">Ф.И.О.:</div>
              <div className="order-details__info-value">
                {orderData.customerName}
              </div>

              <button
                className={`order-details__more-button ${
                  showDetails ? "up" : "down"
                }`}
                onClick={toggleDetails}
              >
                <p>подробнее</p>
                <IconArrow width={5} />
              </button>

              {showDetails && (
                <div className="order-details__extra-info">
                  {/* Additional customer details would go here */}
                  <p>Дополнительная информация о заказчике</p>
                </div>
              )}
            </div>

            <div className="order-details__info-column">
              <div className="order-details__info-label">
                Текущий статус, от {orderData.statusDate}:
              </div>
              <div className="order-details__info-value">
                {orderData.status}
              </div>
            </div>

            <div className="order-details__info-column">
              <div className="order-details__info-label">Сумма:</div>
              <div className="order-details__info-value">
                {orderData.totalAmount} грн.
              </div>
            </div>

            <div className="order-details__actions">
              <button className="order-details__repeat-button">
                Повторить заказ
              </button>
              <button className="order-details__cancel-button">Отменить</button>
            </div>
          </div>
        </div>

        <div className="order-details__payment-block">
          <h3 className="order-details__block-title">Параметры оплаты</h3>

          <div className="order-details__payment-info">
            <p>
              Заказ №{orderData.orderNumber} от {orderData.createdDate},{" "}
              {orderData.status}
            </p>
            <p>
              <span>Сумма заказа: </span>
              {orderData.totalAmount} грн.
            </p>
          </div>
        </div>

        <div className="order-details__content-block">
          <h3 className="order-details__block-title">Содержимое заказа</h3>

          <table className="order-details__items-table">
            <thead>
              <tr>
                <th className="order-details__table-header order-details__table-header--name">
                  Наименование
                </th>
                <th className="order-details__table-header">Цена</th>
                <th className="order-details__table-header">Скидка</th>
                <th className="order-details__table-header">Количество</th>
                <th className="order-details__table-header">Сумма</th>
              </tr>
            </thead>
            <tbody>
              {orderData.items.map((item) => (
                <tr key={item.id} className="order-details__item-row">
                  <td className="order-details__table-cell order-details__table-cell--product">
                    <div className="order-details__product">
                      <div className="order-details__product-image">
                        <Image
                          src={item.imageUrl || "/placeholder.svg"}
                          alt={item.name}
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="order-details__product-info">
                        <div className="order-details__product-name">
                          {item.name}
                        </div>
                        <div className="order-details__product-article">
                          Артикул: {item.articleNumber}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="order-details__table-cell">
                    {item.price} грн.
                  </td>
                  <td className="order-details__table-cell">
                    {item.discount}%
                  </td>
                  <td className="order-details__table-cell">
                    {item.quantity} шт
                  </td>
                  <td className="order-details__table-cell">
                    {item.total} грн.
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="order-details__totals">
            <div className="order-details__delivery-cost">
              <span>Стоимость доставки:</span>
              <span>{orderData.deliveryCost} грн.</span>
            </div>
            <div className="order-details__total">
              <span>Итого:</span>
              <span>{orderData.totalAmount} грн.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
