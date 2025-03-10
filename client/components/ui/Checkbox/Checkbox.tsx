"use client";

import type React from "react";
import { useState, forwardRef } from "react";
import "./Checkbox.scss";

type CheckboxProps = {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  svgIcon?: React.ReactNode;
  id?: string;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      checked = false,
      onChange,
      disabled = false,
      className = "",
      svgIcon,
      id = "custom-checkbox",
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;

      const newCheckedState = e.target.checked;
      setIsChecked(newCheckedState);
      onChange?.(newCheckedState);
    };

    return (
      <div className={`custom-checkbox-container ${className}`}>
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id={id}
            className="custom-checkbox-input"
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
            ref={ref}
          />
          <label htmlFor={id} className="custom-checkbox-label">
            <span
              className={`checkbox-icon ${isChecked ? "checked" : ""} ${
                disabled ? "disabled" : ""
              }`}
            >
              {isChecked && (svgIcon || <DefaultCheckIcon />)}
            </span>
            {label && <span className="checkbox-text">{label}</span>}
          </label>
        </div>
      </div>
    );
  }
);

Checkbox.displayName = "CustomCheckbox";

const DefaultCheckIcon = () => (
  <svg
    width="12"
    height="10"
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5L4.5 8.5L11 1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Checkbox;
