"use client";

import { useCallback, useState } from "react";
import type { Product, ViewMode } from "@/types/catalog";
import "./CatalogList.scss";
import Grid from "@/public/catalogType/gridType.svg";
import List from "@/public/catalogType/listType.svg";
import CompactList from "@/public/catalogType/compactType.svg";
import CatalogCard from "../Card/CatalogCard";
import ProductFilter from "../FilterComponent/ProductFilter";
import { Locale } from "@/i18n.config";

interface ProductListProps {
  products: Product[];
  lang: Locale;
}

export default function ProductList({ products, lang }: ProductListProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleFilterChange = useCallback((products: Product[]) => {
    setFilteredProducts(products);
  }, []);

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
        <ProductFilter
          products={products}
          onFilterChange={handleFilterChange}
        />
        <button
          className={`viewControl-btn ${viewMode === "grid" ? "active" : ""} `}
          onClick={() => setViewMode("grid")}
          title="Сетка"
        >
          <Grid size={13} />
        </button>
        <button
          className={`viewControl-btn ${viewMode === "list" ? "active" : ""} `}
          onClick={() => setViewMode("list")}
          title="Список"
        >
          <List size={13} />
        </button>
        <button
          className={`viewControl-btn ${
            viewMode === "compact" ? "active" : ""
          }`}
          onClick={() => setViewMode("compact")}
          title="Компактный список"
        >
          <CompactList size={13} />
        </button>
      </div>

      <div className={`product-list ${viewMode}`}>
        {filteredProducts.map((product) => (
          <CatalogCard
            key={product.id}
            product={product}
            viewMode={viewMode}
            onToggleFavorite={handleToggleFavorite}
            onDetailsClick={handleDetailsClick}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
}
