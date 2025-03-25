"use client";

import { useState } from "react";
import MapPin from "@/public/orderWindow/map.svg";
import Truck from "@/public/orderWindow/truck.svg";
import Wallet from "@/public/orderWindow/wallet.svg";
import Search from "@/public/Navbar/NavbarIcons/search.svg";
import User from "@/public/dashboard/user.svg";
import Cart from "@/public/dashboard/cartThin.svg";

import Image from "next/image";
import "./OrderWindow.scss";
import Link from "next/link";
import { Locale } from "@/i18n.config";

export default function CheckoutPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const cities = ["Одесса", "Ивано-Франковск", "Львов"];

  const cartItems = [
    {
      id: 1,
      name: "Колки для альта швейцарская модель, самшит, средние",
      price: 179,
      oldPrice: 188,
      quantity: 1,
      image: "/images/category/categoryItem1.png",
    },
    {
      id: 2,
      name: "Ершик для чистки кларнета",
      price: 134,
      oldPrice: 141,
      quantity: 1,
      image: "/images/category/categoryItem1.png",
    },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateOldTotal = () => {
    return cartItems.reduce(
      (sum, item) => sum + item.oldPrice * item.quantity,
      0
    );
  };

  const calculateSavings = () => {
    return calculateOldTotal() - calculateTotal();
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <div className="checkoutContainer">
      <div className="checkoutContent">
        <section className="checkoutSection">
          <div className="sectionHeader">
            <MapPin className="sectionIcon" />
            <h2>Регион доставки</h2>
          </div>
          <div className="sectionContent">
            <div className="formGroup">
              <label htmlFor="city">
                Город <span className="required">*</span>
              </label>
              <div className="searchInput">
                <Search className="searchIcon" />
                <input
                  type="text"
                  id="city"
                  placeholder="Введите название ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="cityButtons">
                {cities.map((city) => (
                  <button
                    key={city}
                    className={`cityButton ${
                      selectedCity === city ? "selected" : ""
                    }`}
                    onClick={() => handleCitySelect(city)}
                  >
                    {city}
                  </button>
                ))}
              </div>
              {!selectedCity && (
                <p className="requiredField">Поле обязательно для заполнения</p>
              )}
            </div>
            <div className="submitSearch__wrapper">
              <button className="submitSearch-btn">Далее</button>
            </div>
          </div>
        </section>

        <section className="checkoutSection">
          <div className="sectionHeader">
            <Truck className="sectionIcon" />
            <h2>Доставка</h2>
          </div>
          <div className="sectionContent">
            {/* Содержимое секции доставки */}
          </div>
        </section>

        <section className="checkoutSection">
          <div className="sectionHeader">
            <Wallet className="sectionIcon" />
            <h2>Оплата</h2>
          </div>
          <div className="sectionContent">Об оплате</div>
        </section>

        <section className="checkoutSection">
          <div className="sectionHeader">
            <User className="sectionIcon" />
            <h2>Покупатель</h2>
          </div>
          <div className="sectionContent">
            {/* Содержимое секции покупателя */}О покупателе
          </div>
        </section>

        <section className="checkoutSection">
          <div className="sectionHeader">
            <Cart className="sectionIcon" />
            <h2>Товары в заказе</h2>
          </div>
          <div className="sectionContent padding-hidden">
            <table className="cartTable">
              <thead>
                <tr>
                  <th>Наименование</th>
                  <th className="thidden">Цена</th>
                  <th>Количество</th>
                  <th>Сумма</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="productCell">
                      <div className="productInfo">
                        <div className="productImage">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={70}
                            height={70}
                          />
                        </div>
                        <span className="productName">{item.name}</span>
                      </div>
                    </td>
                    <td className="priceCell">
                      <div className="price">{item.price} грн.</div>
                      <div className="oldPrice">{item.oldPrice} грн.</div>
                    </td>
                    <td className="quantityCell">{item.quantity} шт</td>
                    <td className="totalCell">
                      <div className="price">
                        {item.price * item.quantity} грн.
                      </div>
                      <div className="oldPrice">
                        {item.oldPrice * item.quantity} грн.
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="agreement">
              <label className="checkboxLabel">
                <input
                  type="checkbox"
                  checked={isAgreed}
                  onChange={() => setIsAgreed(!isAgreed)}
                />
                <div>
                  <span>Я согласен на </span>
                  <Link href={`/${lang}/privacy`} className="link">
                    обработку персональных данных
                  </Link>
                </div>
              </label>
            </div>
          </div>
        </section>
      </div>

      <div className="orderSummary">
        <div className="orderSummaryHeader">
          <h3>Ваш заказ</h3>
          <button className="editButton">Изменить</button>
        </div>

        <div className="orderSummaryContent">
          <div className="summaryRow">
            <span>Товаров на:</span>
            <span className="summaryValue">{calculateTotal()} грн.</span>
          </div>
          <div className="summaryRow">
            <span>Доставка:</span>
            <div className="deliveryInfo">
              <span className="summaryValue">Согласно тарифам</span>
              <span className="">перевозчика</span>
            </div>
          </div>
          <div className="savingsRow">
            <span>Экономия:</span>
            <span className="summaryValue">{calculateSavings()} грн.</span>
          </div>

          <div className="totalRow">
            <span>Итого:</span>
            <span className="totalValue">{calculateTotal()} грн.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
