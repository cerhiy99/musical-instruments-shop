"use client";

import "./FeedBackForm.scss";
import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FeedBackForm() {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    phone: "",
    email: "",
    captcha: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.message.trim()) {
      newErrors.message = "Сообщение обязательно";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Имя обязательно";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Телефон обязателен";
    } else if (!/^\d{10,12}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Неверный формат телефона";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email обязателен";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Неверный формат email";
    }

    if (!formData.captcha.trim()) {
      newErrors.captcha = "Введите текст с картинки";
    }

    if (!formData.consent) {
      newErrors.consent =
        "Необходимо согласие на обработку персональных данных";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // Here would be the API call to submit the form
      console.log("Form submitted:", formData);
      setIsSubmitted(true);

      // Reset form
      setFormData({
        message: "",
        name: "",
        phone: "",
        email: "",
        captcha: "",
        consent: false,
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };
  return (
    <div className="contactForm">
      <h2>Обратная связь</h2>
      <div className="contactForm__wrapper">
        {isSubmitted && (
          <div className="successMessage">
            Спасибо! Ваше сообщение отправлено.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="contactForm__container">
            <div className="formGroup textarea__form">
              <label htmlFor="message">
                Сообщение <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={7}
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "inputError" : ""}
              />
              {errors.message && <p className="errorText">{errors.message}</p>}
            </div>
            <div className="contactForm__subContainer">
              <div className="formGroup">
                <label htmlFor="name">
                  Ваше имя <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "inputError" : ""}
                />
                {errors.name && <p className="errorText">{errors.name}</p>}
              </div>

              <div className="formGroup">
                <label htmlFor="phone">
                  Телефон <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "inputError" : ""}
                />
                {errors.phone && <p className="errorText">{errors.phone}</p>}
              </div>

              <div className="formGroup">
                <label htmlFor="email">
                  E-mail <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "inputError" : ""}
                  placeholder="mail@domain.com"
                />
                {errors.email && <p className="errorText">{errors.email}</p>}
              </div>
            </div>
          </div>

          <div className="captchaGroup">
            <label htmlFor="captcha">
              Введите текст с картинки <span className="required">*</span>
            </label>
            <div className="captchaContainer">
              <div className="captchaImage">
                <Image
                  src="/placeholder.svg?height=50&width=150"
                  alt="CAPTCHA"
                  width={180}
                  height={37}
                />
              </div>
              <div className="devider"></div>
              <input
                type="text"
                id="captcha"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                className={`captchaInput ${errors.captcha ? "inputError" : ""}`}
              />
            </div>
            {errors.captcha && <p className="errorText">{errors.captcha}</p>}
          </div>

          <div className="consentGroup">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="consent">
              Я согласен на{" "}
              <Link href="/privacy" className="link">
                обработку персональных данных
              </Link>
            </label>
            {errors.consent && <p className="errorText">{errors.consent}</p>}
          </div>

          <div className="buttonGroup">
            <button type="submit" className="submitButton">
              Отправить
            </button>
            <button
              type="reset"
              className="cancelButton"
              onClick={() => {
                setFormData({
                  message: "",
                  name: "",
                  phone: "",
                  email: "",
                  captcha: "",
                  consent: false,
                });
                setErrors({});
              }}
            >
              Отменить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
