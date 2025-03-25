"use client";
import Link from "next/link";
import "./Cart.scss";
import Cart from "@/public/cart/cart.svg";
import { Locale } from "@/i18n.config";
import CartList from "@/components/Cart/Cartlist";
import { useState } from "react";

// const mockData = [
//   {
//     id: 1,
//     name: 'Комплект струн для альта KAPLAN FORZA от 16" и больше',
//     price: 5604,
//     oldPrice: 5899,
//     quantity: 2,
//     image: "https://via.placeholder.com/100",
//   },
//   {
//     id: 2,
//     name: "Сурдина для альта резиновая, круглая",
//     price: 115,
//     oldPrice: 121,
//     quantity: 2,
//     image: "https://via.placeholder.com/100",
//   },
//   {
//     id: 3,
//     name: "Заготовка кожи козы, на один смычок, цвет черный, полоса 35 x 55мм",
//     price: 56,
//     oldPrice: 59,
//     quantity: 2,
//     image: "https://via.placeholder.com/100",
//   },
// ];
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

const MockData = [
  {
    id: 1,
    name: 'Комплект струн для альта KAPLAN FORZA от 16" и больше (K411, K412, K413, K414)',
    description: "Скидка 5%",
    price: 5604,
    originalPrice: 5899,
    discount: 5,
    quantity: 2,
    image: "/images/category/categoryItem1.png",
  },
  {
    id: 2,
    name: "Сурдина для альта резиновая, круглая",
    description: "Скидка 5%",
    price: 115,
    originalPrice: 121,
    discount: 5,
    quantity: 2,
    image: "/images/category/categoryItem1.png",
  },
  {
    id: 3,
    name: "Заготовка кожи козы, на один смычок, цвет черный, полоска 35 x 55мм",
    description: "Скидка 5%",
    price: 56,
    originalPrice: 59,
    discount: 5,
    quantity: 2,
    image: "/images/category/categoryItem1.png",
  },
];
export default function CartPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>(MockData);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <>
      {cartItems.length === 0 ? (
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
      ) : (
        <CartList
          lang={lang}
          cartitems={cartItems}
          onClearCart={clearCart}
          onRemoveItem={removeItem}
          onUpdateQuantity={updateQuantity}
        />
      )}
    </>
  );
}
