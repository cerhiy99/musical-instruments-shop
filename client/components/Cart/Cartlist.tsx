"use client";

import { useState } from "react";
import Image from "next/image";
import "./CartList.scss";
import X from "@/public/X.svg";
import QuantitySelector from "../ui/QuantitySelector/QuantitySelector";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  quantity: number;
  image: string;
}
type CartList = {
  cartitems: Array<CartItem>;
  onClearCart: () => void;
  onUpdateQuantity: (id: number, newQuantity: number) => void;
  onRemoveItem: (id: number) => void;
};

export default function CartList({
  cartitems,
  onClearCart,
  onUpdateQuantity,
  onRemoveItem,
}: CartList) {
  // Calculate totals
  const subtotal = cartitems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const originalTotal = cartitems.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );
  const savings = originalTotal - subtotal;

  return (
    <div className="shopping-cart">
      <div className="cart-header">
        <div className="cart-total">
          <div className="total-label">
            <span>Итого:</span>
            <span className="vat-note">Сумма НДС: 0 грн.</span>
          </div>
          <div className="total-amount">
            <div className="current-price">{subtotal} грн.</div>
            <div className="original-price">{originalTotal} грн.</div>
            <div className="savings">
              Экономия: <span className="savings-amount">{savings} грн.</span>
            </div>
          </div>
        </div>

        {/* <div className="shipping-info"> */}
        <div className="info-icon">{/* <Info size={20} /> */}</div>
        {/* <p>
            При заказе на сумму 1000 грн. и больше, вы получаете бесплатную
            доставку товара до склада компании-перевозчика (отделения
            &quot;Новой Почты&quot;)
          </p>
        </div> */}

        <div className="action-buttons">
          <button className="checkout-button">Оформить заказ</button>
          <button className="quick-order-button">Быстрый заказ</button>
        </div>
      </div>

      <div className="cart-filter">
        <div className="filter-input">
          <input type="text" placeholder="Фильтр" />
          <button className="clear-filter">
            <X width={20} strokeWidth={2} />
          </button>
        </div>
        <div className="cart-count">
          В корзине <span className="count">{cartitems.length}</span> товара
          <span className="cart-count__underline"></span>
        </div>
        <button className="clear-cart" onClick={onClearCart}>
          <X width={10} strokeWidth={2} />
          Очистить
        </button>
      </div>

      <div className="cart-items">
        {cartitems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-image">
              <div className="discount-badge">-{item.discount}%</div>
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={133}
                height={133}
              />
            </div>

            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-description">{item.description}</p>
            </div>

            <div className="item-price">
              <div className="current-price">{item.price} грн.</div>
              <div className="original-price">{item.originalPrice} грн.</div>
              <div className="price-per-unit">цена за 1 шт</div>
            </div>
            <div className="quantitySelector__wrapper">
              <QuantitySelector
                onNumberChange={(newQuantity) =>
                  onUpdateQuantity(item.id, newQuantity)
                }
              />
            </div>

            <div className="item-total">
              <div className="total-price">
                {item.price * item.quantity} грн.
              </div>
              <div className="original-total">
                {item.originalPrice * item.quantity} грн.
              </div>
              <div className="item-savings">
                Экономия
                <span className="savings-amount">
                  {(item.originalPrice - item.price) * item.quantity} грн.
                </span>
              </div>
            </div>

            <button
              className="remove-item"
              onClick={() => onRemoveItem(item.id)}
            >
              <X size={16} strokeWidth={2} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
