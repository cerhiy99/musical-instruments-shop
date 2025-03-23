// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import "./CartList.scss";

// interface CartItem {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   originalPrice: number;
//   discount: number;
//   quantity: number;
//   image: string;
// }

// export default function CartList() {
//   const [items, setItems] = useState<CartItem[]>([
//     {
//       id: 1,
//       name: 'Комплект струн для альта KAPLAN FORZA от 16" и больше (K411, K412, K413, K414)',
//       description: "Скидка 5%",
//       price: 5604,
//       originalPrice: 5899,
//       discount: 5,
//       quantity: 2,
//       image: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       id: 2,
//       name: "Сурдина для альта резиновая, круглая",
//       description: "Скидка 5%",
//       price: 115,
//       originalPrice: 121,
//       discount: 5,
//       quantity: 2,
//       image: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       id: 3,
//       name: "Заготовка кожи козы, на один смычок, цвет черный, полоска 35 x 55мм",
//       description: "Скидка 5%",
//       price: 56,
//       originalPrice: 59,
//       discount: 5,
//       quantity: 2,
//       image: "/placeholder.svg?height=80&width=80",
//     },
//   ]);

//   const updateQuantity = (id: number, newQuantity: number) => {
//     if (newQuantity < 1) return;

//     setItems(
//       items.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const removeItem = (id: number) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   const clearCart = () => {
//     setItems([]);
//   };

//   // Calculate totals
//   const subtotal = items.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   const originalTotal = items.reduce(
//     (sum, item) => sum + item.originalPrice * item.quantity,
//     0
//   );
//   const savings = originalTotal - subtotal;

//   return (
//     <div className="shopping-cart">
//       <div className="cart-header">
//         <div className="cart-total">
//           <div className="total-label">
//             <span>Итого:</span>
//             <span className="vat-note">Сумма НДС: 0 грн.</span>
//           </div>
//           <div className="total-amount">
//             <div className="current-price">{subtotal} грн.</div>
//             <div className="original-price">{originalTotal} грн.</div>
//           </div>
//           <div className="savings">
//             Экономия: <span className="savings-amount">{savings} грн.</span>
//           </div>
//         </div>

//         <div className="shipping-info">
//           <div className="info-icon">{/* <Info size={20} /> */}</div>
//           <p>
//             При заказе на сумму 1000 грн. и больше, вы получаете бесплатную
//             доставку товара до склада компании-перевозчика (отделения "Новой
//             Почты")
//           </p>
//         </div>

//         <div className="action-buttons">
//           <button className="checkout-button">Оформить заказ</button>
//           <button className="quick-order-button">Быстрый заказ</button>
//         </div>
//       </div>

//       <div className="cart-filter">
//         <div className="filter-input">
//           <input type="text" placeholder="Фильтр" />
//           <button className="clear-filter">{/* <X size={16} /> */}</button>
//         </div>
//         <div className="cart-count">
//           В корзине <span className="count">{items.length}</span> товара
//         </div>
//         <button className="clear-cart" onClick={clearCart}>
//           Очистить
//         </button>
//       </div>

//       <div className="cart-items">
//         {items.map((item) => (
//           <div className="cart-item" key={item.id}>
//             <div className="item-image">
//               <div className="discount-badge">-{item.discount}%</div>
//               <Image
//                 src={item.image || "/placeholder.svg"}
//                 alt={item.name}
//                 width={80}
//                 height={80}
//               />
//             </div>

//             <div className="item-details">
//               <h3 className="item-name">{item.name}</h3>
//               <p className="item-description">{item.description}</p>
//             </div>

//             <div className="item-price">
//               <div className="current-price">{item.price} грн.</div>
//               <div className="original-price">{item.originalPrice} грн.</div>
//               <div className="price-per-unit">цена за 1 шт</div>
//             </div>

//             <div className="item-quantity">
//               <button
//                 className="quantity-button decrease"
//                 onClick={() => updateQuantity(item.id, item.quantity - 1)}
//               >
//                 −
//               </button>
//               <div className="quantity-display">
//                 <span className="quantity-value">{item.quantity}</span>
//                 <span className="quantity-unit">шт</span>
//               </div>
//               <button
//                 className="quantity-button increase"
//                 onClick={() => updateQuantity(item.id, item.quantity + 1)}
//               >
//                 +
//               </button>
//             </div>

//             <div className="item-total">
//               <div className="total-price">
//                 {item.price * item.quantity} грн.
//               </div>
//               <div className="original-total">
//                 {item.originalPrice * item.quantity} грн.
//               </div>
//               <div className="item-savings">
//                 Экономия
//                 <span className="savings-amount">
//                   {(item.originalPrice - item.price) * item.quantity} грн.
//                 </span>
//               </div>
//             </div>

//             <button className="remove-item" onClick={() => removeItem(item.id)}>
//               {/* <X size={16} /> */}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
