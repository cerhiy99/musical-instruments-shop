"use client";

import type React from "react";
import { useState } from "react";
import "./FeedBack.scss";
import Link from "next/link";
import { Locale } from "@/i18n.config";

interface FeedbackFormProps {
  lang: Locale;
  onSubmit: (formData: {
    name: string;
    callTime: string;
    date: string;
    phone: string;
    consent: boolean;
  }) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit, lang }) => {
  const [formData, setFormData] = useState({
    name: "",
    callTime: "",
    date: "",
    phone: "",
    consent: false,
  });

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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">
          Напишите Ваше имʼя <span className="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="callTime">Время звонка</label>
        <input
          type="text"
          id="callTime"
          name="callTime"
          value={formData.callTime}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Дата</label>
        <input
          type="text"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">
          Номер телефона <span className="required">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group checkbox">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
        />
        <label htmlFor="consent">
          Я согласен на{" "}
          <Link href={`/${lang}/privacy`}>обработку персональных даних</Link>
        </label>
      </div>

      <button type="submit" className="submit-button">
        Отправить
      </button>
    </form>
  );
};

export default FeedbackForm;
