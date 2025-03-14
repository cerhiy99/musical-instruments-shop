"use client";

import React, { useCallback, useState } from "react";
import "./BuyOneClick.scss";
import Modal from "@/components/Modal/Modal";
import BuyOneClickForm from "../Form/BuyOneClickForm/OneClickForm";

export default function BuyOneClick() {
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
      <button className="buyOneClickButton" onClick={openModal}>
        Купить в 1 клик
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Обратная связь">
        <BuyOneClickForm onSubmit={handleSubmit} />
      </Modal>
    </>
  );
}
