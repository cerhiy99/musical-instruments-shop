"use client";

import { useState } from "react";
import "./product-tabs.scss";

interface ProductTabsProps {
  product: {
    description: string;
  };
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Описание" },
    { id: "how-to-buy", label: "Как купить" },
    { id: "payment", label: "Оплата" },
    { id: "delivery", label: "Доставка" },
    { id: "reviews", label: "Відгуки" },
  ];

  return (
    <div className="tabs">
      <div className="tabsHeader">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tabButton ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab__underline"></span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tabContent">
        {activeTab === "description" && (
          <div className="description">
            {product.description.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
        {activeTab === "how-to-buy" && (
          <div>Информация о том, как купить товар</div>
        )}
        {activeTab === "payment" && <div>Информация об оплате</div>}
        {activeTab === "delivery" && <div>Информация о доставке</div>}
        {activeTab === "reviews" && <div>Отзывы о товаре</div>}
      </div>
    </div>
  );
}
