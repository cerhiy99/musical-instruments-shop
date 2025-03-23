"use client";

import type React from "react";
import { useState } from "react";
import "./ResetPassword.scss";
import { Locale } from "@/i18n.config";
import { useRouter } from "next/navigation";

export default function ResetPassword({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [formData, setFormData] = useState({
    password: "",
    repeatPassword: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${lang}/success`);
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <>
      <div className="profile-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="label-container">
              <label htmlFor="phone">
                Новий пароль <span className="required">*</span>
              </label>
            </div>
            <div className="input-help-container">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="phone-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="label-container">
              <label htmlFor="email">
                Новий пароль ще раз <span className="required">*</span>
              </label>
            </div>
            <div className="input-help-container">
              <input
                type="password"
                id="repeatPassword"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="save-button">
              Сохранить изменения
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
