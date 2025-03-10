"use client";

import type React from "react";

import { useState } from "react";
import "./FilterPopup.scss";
import Checkbox from "../ui/Checkbox/Checkbox";

interface PriceRange {
  min: number;
  max: number;
}

interface FilterPopupProps {
  minPrice: number;
  maxPrice: number;
  brands: string[];
  filters: {
    priceRange: PriceRange;
    brands: string[];
    tags: string[];
  };
  onFilterChange: (filters: {
    priceRange: PriceRange;
    brands: string[];
    tags: string[];
  }) => void;
  onClose: () => void;
}

export function FilterPopup({
  minPrice,
  maxPrice,
  brands,
  filters,
  onFilterChange,
  onClose,
}: FilterPopupProps) {
  const [localFilters, setLocalFilters] = useState(filters);
  const [minInputValue, setMinInputValue] = useState(
    filters.priceRange.min.toString()
  );
  const [maxInputValue, setMaxInputValue] = useState(
    filters.priceRange.max.toString()
  );
  const [openSections, setOpenSections] = useState({
    price: true,
    brand: true,
    tags: true,
  });

  // Toggle section visibility
  const toggleSection = (section: "price" | "brand" | "tags") => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Handle price input changes
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinInputValue(e.target.value);
    const value = Number.parseInt(e.target.value) || minPrice;
    setLocalFilters((prev) => ({
      ...prev,
      priceRange: { ...prev.priceRange, min: value },
    }));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxInputValue(e.target.value);
    const value = Number.parseInt(e.target.value) || maxPrice;
    setLocalFilters((prev) => ({
      ...prev,
      priceRange: { ...prev.priceRange, max: value },
    }));
  };

  // Handle slider changes
  const handleSliderChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "min" | "max"
  ) => {
    const value = Number.parseInt(e.target.value);
    if (type === "min") {
      setMinInputValue(value.toString());
      setLocalFilters((prev) => ({
        ...prev,
        priceRange: { ...prev.priceRange, min: value },
      }));
    } else {
      setMaxInputValue(value.toString());
      setLocalFilters((prev) => ({
        ...prev,
        priceRange: { ...prev.priceRange, max: value },
      }));
    }
  };

  // Reset price filter to default
  const resetPriceFilter = () => {
    setLocalFilters((prev) => ({
      ...prev,
      priceRange: { min: minPrice, max: maxPrice },
    }));
    setMinInputValue(minPrice.toString());
    setMaxInputValue(maxPrice.toString());
  };

  // Handle brand checkbox changes
  const handleBrandChange = (brand: string) => {
    setLocalFilters((prev) => {
      const newBrands = prev.brands.includes(brand)
        ? prev.brands.filter((b) => b !== brand)
        : [...prev.brands, brand];

      return {
        ...prev,
        brands: newBrands,
      };
    });
  };

  // Reset brands filter
  const resetBrandsFilter = () => {
    setLocalFilters((prev) => ({
      ...prev,
      brands: [],
    }));
  };

  // Handle tag checkbox changes
  const handleTagChange = (tag: string) => {
    setLocalFilters((prev) => {
      const newTags = prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag];

      return {
        ...prev,
        tags: newTags,
      };
    });
  };

  // Reset tags filter
  // const resetTagsFilter = () => {
  //   setLocalFilters((prev) => ({
  //     ...prev,
  //     tags: [],
  //   }));
  // };

  // Apply filters
  const applyFilters = () => {
    onFilterChange(localFilters);
    onClose();
  };

  // Reset all filters
  const resetFilters = () => {
    const resetState = {
      priceRange: { min: minPrice, max: maxPrice },
      brands: [],
      tags: [],
    };
    setLocalFilters(resetState);
    setMinInputValue(minPrice.toString());
    setMaxInputValue(maxPrice.toString());
    onFilterChange(resetState);
    onClose();
  };

  // Calculate slider percentage for custom styling
  const getSliderLeftPercent = () => {
    return (
      ((localFilters.priceRange.min - minPrice) / (maxPrice - minPrice)) * 100
    );
  };

  const getSliderRightPercent = () => {
    return (
      100 -
      ((localFilters.priceRange.max - minPrice) / (maxPrice - minPrice)) * 100
    );
  };

  return (
    <div className="filter-popup">
      <div className="filter-popup__content">
        <h2 className="filter-popup__title">Фильтр по параметрам</h2>

        {/* Price Filter */}
        <div className="filter-section">
          <div
            className="filter-section__header"
            onClick={() => toggleSection("price")}
          >
            <h3>Цена</h3>
            <span
              className={`filter-section__toggle ${
                openSections.price ? "open" : ""
              }`}
            ></span>
          </div>

          <div
            className={`filter-section__content ${
              openSections.price ? "visible" : "hidden"
            }`}
          >
            <div className="price-inputs">
              <input
                type="text"
                value={minInputValue}
                onChange={handleMinPriceChange}
                onBlur={() => {
                  const value = Number.parseInt(minInputValue) || minPrice;
                  setMinInputValue(value.toString());
                }}
              />
              <span className="price-separator">—</span>
              <input
                type="text"
                value={maxInputValue}
                onChange={handleMaxPriceChange}
                onBlur={() => {
                  const value = Number.parseInt(maxInputValue) || maxPrice;
                  setMaxInputValue(value.toString());
                }}
              />
            </div>

            <div className="price-range">
              <div className="price-range__min">{minPrice}</div>
              <div className="price-range__slider">
                <div
                  className="price-range__progress"
                  style={{
                    left: `${getSliderLeftPercent()}%`,
                    right: `${getSliderRightPercent()}%`,
                  }}
                ></div>
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={localFilters.priceRange.min}
                  onChange={(e) => handleSliderChange(e, "min")}
                  className="price-range__input price-range__input--min"
                />
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={localFilters.priceRange.max}
                  onChange={(e) => handleSliderChange(e, "max")}
                  className="price-range__input price-range__input--max"
                />
              </div>
              <div className="price-range__max">{maxPrice}</div>
            </div>
          </div>
        </div>

        {/* Brand Filter */}
        <div className="filter-section">
          <div
            className="filter-section__header"
            onClick={() => toggleSection("brand")}
          >
            <h3>Бренд</h3>
            <span
              className={`filter-section__toggle ${
                openSections.brand ? "open" : ""
              }`}
            ></span>
          </div>

          <div
            className={`filter-section__content ${
              openSections.brand ? "visible" : "hidden"
            }`}
          >
            <div className="checkbox-list">
              {brands.map((brand, i) => (
                <label key={brand} className="checkbox-item">
                  <Checkbox
                    id={`${i}`}
                    checked={localFilters.brands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  <span className="checkbox-label">{brand}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Tags Filter */}
        <div className="filter-section">
          <div
            className="filter-section__header"
            onClick={() => toggleSection("tags")}
          >
            <h3>Наши предложения</h3>
            <span
              className={`filter-section__toggle ${
                openSections.tags ? "open" : ""
              }`}
            ></span>
          </div>

          <div
            className={`filter-section__content ${
              openSections.tags ? "visible" : "hidden"
            }`}
          >
            <div className="checkbox-list">
              <label className="checkbox-item">
                <Checkbox
                  id="hit"
                  checked={localFilters.tags.includes("hit")}
                  onChange={() => handleTagChange("hit")}
                />
                <span className="checkbox-label">Хит</span>
              </label>
              <label className="checkbox-item">
                <Checkbox
                  id="recommended"
                  checked={localFilters.tags.includes("recommended")}
                  onChange={() => handleTagChange("recommended")}
                />
                <span className="checkbox-label">Советуем</span>
              </label>
              <label className="checkbox-item">
                <Checkbox
                  id="new"
                  checked={localFilters.tags.includes("new")}
                  onChange={() => handleTagChange("new")}
                />
                <span className="checkbox-label">Новинка</span>
              </label>
              <label className="checkbox-item">
                <Checkbox
                  id="discount"
                  checked={localFilters.tags.includes("discount")}
                  onChange={() => handleTagChange("discount")}
                />
                <span className="checkbox-label">Скидка</span>
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="filter-actions">
          <button className="filter-actions__apply" onClick={applyFilters}>
            Показать
          </button>
          <button className="filter-actions__reset" onClick={resetFilters}>
            Сбросить
          </button>
        </div>
      </div>
    </div>
  );
}
