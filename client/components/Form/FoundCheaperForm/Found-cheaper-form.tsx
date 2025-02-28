"use client";

import type React from "react";
import { useState } from "react";
import "./found-cheaper-form.scss";

interface FoundCheaperFormProps {
  onSubmit: (formData: {
    name: string;
    phone: string;
    email: string;
    productName: string;
    productLink: string;
    message: string;
    agreeToTerms: boolean;
  }) => void;
  defaultProductName?: string;
}

const FoundCheaperForm: React.FC<FoundCheaperFormProps> = ({
  onSubmit,
  defaultProductName = "Скрипка мастеровая Josef Cermak",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    productName: defaultProductName,
    productLink: "",
    message: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    productName?: string;
    productLink?: string;
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
      name?: string;
      phone?: string;
      email?: string;
      productName?: string;
      productLink?: string;
      agreeToTerms?: string;
    } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Заполните это поле";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Заполните это поле";
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Введите корректный email";
    }

    if (!formData.productName.trim()) {
      newErrors.productName = "Заполните это поле";
    }

    if (!formData.productLink.trim()) {
      newErrors.productLink = "Заполните это поле";
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
    <form className="found-cheaper-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">
          Ваше имя <span className="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "error" : ""}
        />
        {errors.name && <div className="error-message">{errors.name}</div>}
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
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="mail@domen.com"
          className={errors.email ? "error" : ""}
        />
        {errors.email && <div className="error-message">{errors.email}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="productName">
          Название товара <span className="required">*</span>
        </label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          className={errors.productName ? "error" : ""}
        />
        {errors.productName && (
          <div className="error-message">{errors.productName}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="productLink">
          Ссылка на товар другого магазина <span className="required">*</span>
        </label>
        <input
          type="url"
          id="productLink"
          name="productLink"
          value={formData.productLink}
          onChange={handleChange}
          className={errors.productLink ? "error" : ""}
        />
        {errors.productLink && (
          <div className="error-message">{errors.productLink}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message">Сообщение</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
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
          Я согласен на <a href="#">обработку персональных данных</a>
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

export default FoundCheaperForm;
