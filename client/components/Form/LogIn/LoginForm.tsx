"use client";

import type React from "react";
import { useState } from "react";
import "./LoginForm.scss";

interface LoginFormProps {
  onSubmit: (formData: {
    login: string;
    password: string;
    rememberMe: boolean;
  }) => void;
  onRegisterClick: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, onRegisterClick }) => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState<{
    login?: string;
    password?: string;
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
      login?: string;
      password?: string;
    } = {};

    if (!formData.login.trim()) {
      newErrors.login = "Заполните это поле";
    }

    if (!formData.password) {
      newErrors.password = "Заполните это поле";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login">
            Логин <span className="required">*</span>
          </label>
          <input
            type="text"
            id="login"
            name="login"
            value={formData.login}
            onChange={handleChange}
            placeholder="example@email.com"
            className={errors.login ? "error" : ""}
          />
          {errors.login && <div className="error-message">{errors.login}</div>}
        </div>

        <div className="form-group">
          <div className="password-label-container">
            <label htmlFor="password">
              Пароль <span className="required">*</span>
            </label>
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "error" : ""}
          />
        </div>

        <div className="form-actions">
          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe">Запомнить меня</label>
          </div>
          <a href="#" className="forgot-password">
            Забыли пароль?
          </a>
        </div>

        <button type="submit" className="login-button">
          Войти
        </button>
      </form>

      <div className="registration-section">
        <div className="registration-info">
          Вам будет доступно управление рассылками, использование персональных
          данных, связь профиля с аккаунтом соцсети и т.д.
        </div>
        <button onClick={onRegisterClick} className="register-button">
          Регистрация
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
