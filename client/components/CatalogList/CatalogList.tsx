"use client";

import { useState } from "react";
import type { Product, ViewMode } from "@/types/catalog";
// import CatalogCard from "../Card/CatalogCard";
import "./CatalogList.scss";
import CatalogCardItem from "../Card/CatalogCardItem";
import Grid from "@/public/catalogType/gridType.svg";
import List from "@/public/catalogType/listType.svg";
import CompactList from "@/public/catalogType/compactType.svg";
import CatalogCard from "../Card/CatalogCard";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const handleToggleFavorite = (id: string) => {
    // Implement favorite toggling logic here
    console.log("Toggle favorite:", id);
  };

  const handleDetailsClick = (id: string) => {
    // Implement details click logic here
    console.log("Show details:", id);
  };

  return (
    <div className="product-list-container">
      <div className="view-controls">
        <button
          className={viewMode === "grid" ? "active" : ""}
          onClick={() => setViewMode("grid")}
          title="Сетка"
        >
          <Grid size={13} />
          {/* <LayoutGrid size={20} /> */}
        </button>
        <button
          className={viewMode === "list" ? "active" : ""}
          onClick={() => setViewMode("list")}
          title="Список"
        >
          <List size={13} />
        </button>
        <button
          className={viewMode === "compact" ? "active" : ""}
          onClick={() => setViewMode("compact")}
          title="Компактный список"
        >
          <CompactList size={13} />
        </button>
      </div>

      <div className={`product-list ${viewMode}`}>
        {products.map((product) => (
          <CatalogCard
            key={product.id}
            product={product}
            viewMode={viewMode}
            onToggleFavorite={handleToggleFavorite}
            onDetailsClick={handleDetailsClick}
          />
          // <CatalogCardItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
