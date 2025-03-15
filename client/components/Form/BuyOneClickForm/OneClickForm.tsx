"use client";

import type React from "react";
import { useState } from "react";
import "../sharedFormStyle.scss";
import Link from "next/link";
import { Locale } from "@/i18n.config";

interface BuyOneClickFormProps {
  lang: Locale;
  onSubmit: (formData: {
    contactPerson: string;
    phone: string;
    email: string;
    comment: string;
    agreeToTerms: boolean;
  }) => void;
}

const BuyOneClickForm: React.FC<BuyOneClickFormProps> = ({
  onSubmit,
  lang,
}) => {
  const [formData, setFormData] = useState({
    contactPerson: "",
    phone: "",
    email: "",
    comment: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<{
    contactPerson?: string;
    phone?: string;
    email?: string;
    agreeToTerms?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: {
      contactPerson?: string;
      phone?: string;
      email?: string;
      agreeToTerms?: string;
    } = {};

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "Заполните это поле";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Заполните это поле";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Заполните это поле";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Введите корректный email";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "Необходимо согласие";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <form className="buy-one-click-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="contactPerson">
          Контактное лицо <span className="required">*</span>
        </label>
        <input
          type="text"
          id="contactPerson"
          name="contactPerson"
          value={formData.contactPerson}
          onChange={handleChange}
          className={errors.contactPerson ? "error" : ""}
        />
        {errors.contactPerson && (
          <div className="error-message">{errors.contactPerson}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="phone">
          Телефон <span className="required">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? "error" : ""}
        />
        {errors.phone && <div className="error-message">{errors.phone}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="email">
          E-Mail <span className="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <div className="error-message">{errors.email}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="comment">Комментарий к заказу</label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <div className="form-group checkbox">
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
        />
        <label htmlFor="agreeToTerms">
          Я согласен на{" "}
          <Link href={`/${lang}/privacy`}>обработку персональных данных</Link>
        </label>
        {errors.agreeToTerms && (
          <div className="error-message">{errors.agreeToTerms}</div>
        )}
      </div>

      <button type="submit" className="submit-button">
        Отправить
      </button>
    </form>
  );
};

export default BuyOneClickForm;
