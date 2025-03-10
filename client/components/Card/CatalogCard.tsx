"use client";

import Heart from "@/public/Navbar/NavbarIcons/favorite.svg";
import Image from "next/image";
import type { Product, ViewMode } from "@/types/catalog";
import "./CatalogCard.scss";
import Badge from "../ui/Badge/Bdge";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  viewMode: ViewMode;
  onToggleFavorite: (id: string) => void;
  onDetailsClick: (id: string) => void;
}

export default function CatalogCard({
  product,
  viewMode,
  onToggleFavorite,
  onDetailsClick,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="card__body">
      <div className={`product-card ${viewMode}`}>
        {viewMode === "grid" && (
          <div className="product-info__favorite">
            <button
              className={`favorite-button ${
                product.isFavorite ? "active" : ""
              }`}
              // onClick={() => onToggleFavorite(product.id)}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <div className={`favorite-icon ${isFavorite ? "filled" : ""}`}>
                <Heart
                  // className={product.isFavorite ? "filled" : ""}
                  width={18}
                  height={18}
                />
              </div>
              <p>В избранное</p>
            </button>
          </div>
        )}
        <div className="product-image-container">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            width={
              viewMode === "grid" ? 170 : viewMode === "compact" ? 50 : 135
            }
            height={
              viewMode === "grid" ? 170 : viewMode === "compact" ? 50 : 135
            }
            className="product-image"
          />
          <div className="badge__wrapper">
            <div className="badge__wrapper__container">
              {product.labels.isDiscount && <Badge type="discount" />}
              {product.labels.isAdviced && <Badge type="advice" />}
              {product.labels.isNew && <Badge type="new" />}
              {product.labels.isHit && <Badge type="hit" />}
            </div>
          </div>
        </div>

        <div className="product-info">
          <h3 className="product-name">{product.title}</h3>

          <div className="product-status">
            <div className="product-store">
              {product.inStock ? (
                <span className="in-stock">
                  Есть на складе (10)
                  {product.stockCount && `(${product.stockCount})`}
                </span>
              ) : (
                <span className="out-of-stock">
                  Нет на складе
                  <br />
                  (можно заказать)
                </span>
              )}
            </div>
            <p className="product-article">Артикул: {product.articleNumber}</p>
          </div>

          <div className="discount-message">- 5% при оформлении заказа!</div>
          {viewMode === "list" && (
            <div className="product-info__subTitile">{product.title}</div>
          )}
          {viewMode !== "compact" && viewMode !== "grid" && (
            <div className="product-info__favorite">
              <button
                className={`favorite-button ${
                  product.isFavorite ? "active" : ""
                }`}
                // onClick={() => onToggleFavorite(product.id)}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <div className={`favorite-icon ${isFavorite ? "filled" : ""}`}>
                  <Heart width={17} height={15} />
                </div>
                <p className="favorite-button__text">В избранное</p>
              </button>
            </div>
          )}
        </div>
        <div className="product-price__wrapper">
          <div className="product-price">
            <div className="current-price">
              {product.price.current} грн.
              {product.price.old && (
                <span className="old-price">{product.price.old} грн.</span>
              )}
            </div>
            {product.savings.amount > 0 && (
              <div className="savings">
                Экономия <span>{product.savings.amount} грн.</span>
              </div>
            )}
          </div>
          {viewMode !== "compact" && (
            <div className="product-actions">
              <button
                className="details-button"
                onClick={() => onDetailsClick(product.id)}
              >
                Подробнее
              </button>
            </div>
          )}
        </div>
        {viewMode === "compact" && (
          <>
            <div className="product-actions">
              <button
                className="details-button"
                onClick={() => onDetailsClick(product.id)}
              >
                Подробнее
              </button>
            </div>
            <div className="product-info__favorite">
              <button
                className={`favorite-button ${
                  product.isFavorite ? "active" : ""
                }`}
                // onClick={() => onToggleFavorite(product.id)}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <div className={`favorite-icon ${isFavorite ? "filled" : ""}`}>
                  <Heart width={20} height={20} />
                </div>
                <p>В избранное</p>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
