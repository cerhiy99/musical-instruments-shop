"use client";

import type React from "react";
import { useState } from "react";
import "./ForgetPasswordForm.scss";
import { useRouter } from "next/navigation";
import { Locale } from "@/i18n.config";
import Link from "next/link";

interface LoginFormProps {
  lang: Locale;
  onRegisterClick?: () => void;
  onSubmit: (formData: { login: string; password: string }) => void;
}

const ForgetPasswordForm: React.FC<LoginFormProps> = ({
  lang,
  onSubmit,
  onRegisterClick,
}) => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    newPassword: "",
  });

  const [errors, setErrors] = useState<{
    login?: string;
    password?: string;
    newPassword?: string;
  }>({});

  const router = useRouter();
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
      newPassword?: string;
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
    router.push(`/${lang}/success`);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login">
            Логин <span className="required">*</span>
          </label>
          {errors.login && <div className="error-message">{errors.login}</div>}
          <input
            type="text"
            id="login"
            name="login"
            value={formData.login}
            onChange={handleChange}
            placeholder="example@email.com"
            className={errors.login ? "error" : ""}
          />
        </div>

        <div className="form-group">
          <div className="password-label-container">
            <label htmlFor="password">
              Новый пароль <span className="required">*</span>
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
        <div className="form-group">
          <div className="password-label-container">
            <label htmlFor="newPassword">
              Подтверждение пароля <span className="required">*</span>
            </label>
            {errors.newPassword && (
              <div className="error-message">{errors.newPassword}</div>
            )}
          </div>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className={errors.password ? "error" : ""}
          />
        </div>
        <div className="forget-pass-btns">
          <button type="submit" className="login-button">
            Сменить пароль
          </button>
          {/* <button className="login-close" onClick={}>
            Отмена
          </button> */}
        </div>
      </form>
      {onRegisterClick !== undefined ? (
        <div className="registration-section">
          <div className="registration-info">
            Вам будет доступно управление рассылками, использование персональных
            данных, связь профиля с аккаунтом соцсети и т.д.
          </div>
          <button onClick={onRegisterClick} className="register-button">
            Регистрация
          </button>
        </div>
      ) : (
        <Link href={`/${lang}`}>Вернуться на главную</Link>
      )}
    </div>
  );
};

export default ForgetPasswordForm;
