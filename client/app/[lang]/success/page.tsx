"use client";

import type React from "react";
import { useCallback, useState } from "react";
import "./Success.scss";
import Modal from "@/components/Modal/Modal";
import { Locale } from "@/i18n.config";
import LoginForm from "../../../components/Form/Login/LoginForm";
// import LoginForm from "../../../components/Form/LogIn/LoginForm"
import RegistrationForm from "@/components/Form/Register/RegisterForm";
import ForgetPasswordForm from "@/components/Form/ForgetPassword/ForgetPasswordForm";

export default function Success({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isForm, setIsForm] = useState<
    "SignUp" | "SignIn" | "ForgetPassword" | null
  >("SignIn");

  const openModal = () => setIsModalOpen(true);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setIsForm("SignIn");
  }, [setIsModalOpen]);

  const handleSubmit = (formData: any) => {
    console.log("Form submitted:", formData);
    closeModal();
    // Here you would typically send the data to your backend
  };
  const handleOpenFormType = (
    typeForm: "SignUp" | "SignIn" | "ForgetPassword"
  ) => {
    if (!typeForm) return;
    setIsForm(typeForm);
  };
  const isTypeModal = (
    type: "SignUp" | "SignIn" | "CallBack" | "ForgetPassword" | null
  ) => {
    if (type === "SignUp") return "Регистрация";
    if (type === "SignIn") return "Личный кабинет";
    if (type === "CallBack") return "Обратная связь";
    if (type === "ForgetPassword") return "Смена пароля";
    return "Обратная связь";
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={isTypeModal(isForm)}
      >
        {isForm === "SignIn" && (
          <LoginForm
            lang={lang}
            onRegisterClick={() => handleOpenFormType("SignUp")}
            onForgetPassword={() => handleOpenFormType("ForgetPassword")}
            onSubmit={handleSubmit}
          />
        )}
        {isForm === "SignUp" && (
          <RegistrationForm
            onLoginClick={() => handleOpenFormType("SignIn")}
            onSubmit={handleSubmit}
          />
        )}
        {isForm === "ForgetPassword" && (
          <ForgetPasswordForm
            onSubmit={handleSubmit}
            lang={lang}
            onRegisterClick={() => handleOpenFormType("SignUp")}
          />
        )}
      </Modal>
      <div className="success">
        <div className="success__container">
          <h2>Пароль успешно сменен</h2>
          <p>
            На ваш email высланы новые регистрационные данные Поздравляем, вы
            успешно сменили пароль!
          </p>
          <p>
            Для продолжения Вам необхоидимо авторизироваться с новым паролем
          </p>
        </div>
        <div className="form-actions">
          <button type="submit" className="save-button" onClick={openModal}>
            Войти
          </button>
        </div>
      </div>
    </>
  );
}
