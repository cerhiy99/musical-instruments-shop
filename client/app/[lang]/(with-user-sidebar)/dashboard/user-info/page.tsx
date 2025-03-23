"use client";

import type React from "react";
import { useState } from "react";
import "./UserInfo.scss";
import { Locale } from "@/i18n.config";

export default function UserInfo({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [formData, setFormData] = useState({
    fullName: "Подолянчук Сергій",
    phone: "+38 (068) 629-50-09",
    email: "podoljanchuk@gmail.com",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <>
      <div className="profile-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="label-container">
              <label htmlFor="fullName">
                Фамилия Имя Отчество <span className="required">*</span>
              </label>
            </div>
            <div className="input-help-container">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <div className="help-text">
                Заполните, чтобы мы знали, как к вам обращаться
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="label-container">
              <label htmlFor="phone">
                Телефон <span className="required">*</span>
              </label>
            </div>
            <div className="input-help-container">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="phone-input"
                required
              />
              <div className="help-text">
                Необходим для уточнения деталей заказа
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="label-container">
              <label htmlFor="email">
                E-mail <span className="required">*</span>
              </label>
            </div>
            <div className="input-help-container">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="help-text">
                Для отправки уведомлений о статусе заказа. Используйте как логин
                для входа в личный кабинет
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="save-button">
              Сохранить изменения
            </button>
          </div>
        </form>
      </div>
      <div className="social-link-info">
        Вы можете связать свой профиль с профилями в социальных сетях и сервисах
      </div>
    </>
  );
}
