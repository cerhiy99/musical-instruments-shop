"use client";

import { useState, useEffect } from "react";
import "./ProductFilter.scss";
import { FilterPopup } from "./FilterPopup";
import type { Product } from "@/types/catalog";
import FilterIcon from "@/public/filter.svg";

interface ProductFilterProps {
  products: Product[];
  onFilterChange: (filteredProducts: Product[]) => void;
}

export default function ProductFilter({
  products,
  onFilterChange,
}: ProductFilterProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [brands, setBrands] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    priceRange: { min: 0, max: 0 },
    brands: [] as string[],
    tags: [] as string[],
  });

  // Find min/max prices and all brands on component mount
  useEffect(() => {
    if (products.length > 0) {
      const prices = products.map((product) => product.price.current);
      const minPrice = Math.floor(Math.min(...prices));
      const maxPrice = Math.ceil(Math.max(...prices));

      // Get unique brands
      const uniqueBrands = Array.from(
        new Set(products.map((product) => product.brands))
      );

      setMinPrice(minPrice);
      setMaxPrice(maxPrice);
      setBrands(uniqueBrands);

      // Initialize filters with full range
      setFilters((prev) => ({
        ...prev,
        priceRange: { min: minPrice, max: maxPrice },
      }));
    }
  }, [products]);

  // Apply filters when they change
  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      // Price filter
      const priceMatch =
        product.price.current >= filters.priceRange.min &&
        product.price.current <= filters.priceRange.max;

      // Brand filter
      const brandMatch =
        filters.brands.length === 0 || filters.brands.includes(product.brands);

      // Tags filter
      const tagMatch =
        filters.tags.length === 0 ||
        (filters.tags.includes("hit") && product.labels.isHit) ||
        (filters.tags.includes("recommended") && product.labels.isAdviced) ||
        (filters.tags.includes("new") && product.labels.isNew) ||
        (filters.tags.includes("discount") && product.labels.isDiscount);

      return priceMatch && brandMatch && tagMatch;
    });

    onFilterChange(filteredProducts);
  }, [filters, products, onFilterChange]);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="product-filter">
      <button className="filter-button" onClick={togglePopup}>
        <FilterIcon height={22} width={18} />
        <p>Фильтр</p>
      </button>

      {showPopup && (
        <FilterPopup
          minPrice={minPrice}
          maxPrice={maxPrice}
          brands={brands}
          filters={filters}
          onFilterChange={handleFilterChange}
          onClose={togglePopup}
        />
      )}
    </div>
  );
}
