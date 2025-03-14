"use client";

import type React from "react";
import { useState } from "react";
import "./RegisterForm.scss";
import Link from "next/link";

interface RegistrationFormProps {
  onSubmit: (formData: {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    agreeToTerms: boolean;
  }) => void;
  onLoginClick: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onSubmit,
  onLoginClick,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
    firstName?: string;
    lastName?: string;
    agreeToTerms?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const newErrors: {
      email?: string;
      password?: string;
      confirmPassword?: string;
      firstName?: string;
      lastName?: string;
      agreeToTerms?: string;
    } = {};

    if (!formData.email.trim()) {
      newErrors.email = "Заполните это поле";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Введите корректный email";
    }

    if (!formData.password) {
      newErrors.password = "Заполните это поле";
    } else if (formData.password.length < 6) {
      newErrors.password = "Пароль должен содержать минимум 6 символов";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Заполните это поле";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Пароли не совпадают";
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Заполните это поле";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Заполните это поле";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "Необходимо согласие с условиями";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className={errors.email ? "error" : ""}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">
              Имя <span className="required">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? "error" : ""}
            />
            {errors.firstName && (
              <div className="error-message">{errors.firstName}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">
              Фамилия <span className="required">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? "error" : ""}
            />
            {errors.lastName && (
              <div className="error-message">{errors.lastName}</div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">
            Пароль <span className="required">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "error" : ""}
          />
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">
            Подтвердите пароль <span className="required">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? "error" : ""}
          />
          {errors.confirmPassword && (
            <div className="error-message">{errors.confirmPassword}</div>
          )}
        </div>

        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className={errors.agreeToTerms ? "error" : ""}
          />
          <label htmlFor="agreeToTerms">
            {/* Я согласен с <a href="#">условиями использования</a> и{" "} */}Я
            согласен с условиями использования и{" "}
            <Link href="/privacy">политикой конфиденциальности</Link>
          </label>
          {errors.agreeToTerms && (
            <div className="error-message">{errors.agreeToTerms}</div>
          )}
        </div>

        <button type="submit" className="register-submit-button">
          Зарегистрироваться
        </button>
      </form>

      <div className="login-section">
        <p>Уже есть аккаунт?</p>
        <button onClick={onLoginClick} className="login-link-button">
          Войти
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
