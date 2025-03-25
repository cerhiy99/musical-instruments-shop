"use client";

import React, { useState } from "react";
import Plus from "@/public/icons/plus.svg";
import Minus from "@/public/icons/minus.svg";
import "./QuantitySelector.scss";

const TOTAL_WE_HAVE = 12;
type QuantitySelectorProps = {
  onNumberChange?: (total: number) => void;
};

export default function QuantitySelector({
  onNumberChange,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const handleChangeQuantity = (num: number) => {
    if (quantity === 1 && num === -1) return;
    if (quantity === TOTAL_WE_HAVE && num === 1) return;
    setQuantity((prev) => prev + num);
    if (onNumberChange !== undefined) {
      onNumberChange(quantity);
    }
  };
  const isActiveMinus = quantity === 1;
  const isActivePlus = quantity === TOTAL_WE_HAVE;
  return (
    <div className="quantitySelector">
      <button
        disabled={isActiveMinus}
        className="quantityButton minus"
        onClick={() => handleChangeQuantity(-1)}
      >
        <Minus size={24} />
      </button>
      <input type="text" value={quantity} readOnly className="quantityInput" />
      <button
        disabled={isActivePlus}
        className="quantityButton plus"
        onClick={() => handleChangeQuantity(1)}
      >
        <Plus size={24} />
      </button>
    </div>
  );
}
