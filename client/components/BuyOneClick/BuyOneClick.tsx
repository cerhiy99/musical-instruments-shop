"use client";

import React, { useCallback, useState } from "react";
import "./BuyOneClick.scss";
import Modal from "@/components/Modal/Modal";
import BuyOneClickForm from "../Form/BuyOneClickForm/OneClickForm";
import { Locale } from "@/i18n.config";

export default function BuyOneClick({
  lang,
  title,
  hasClass,
}: {
  lang: Locale;
  title?: string;
  hasClass?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const handleSubmit = (formData: any) => {
    console.log("Form submitted:", formData);
    closeModal();
    // Here you would typically send the data to your backend
  };
  return (
    <>
      <button
        className={hasClass ? hasClass : "buyOneClickButton"}
        onClick={openModal}
      >
        {title ? title : " Купить в 1 клик"}
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Купить в 1 клик">
        <BuyOneClickForm onSubmit={handleSubmit} lang={lang} />
      </Modal>
    </>
  );
}
