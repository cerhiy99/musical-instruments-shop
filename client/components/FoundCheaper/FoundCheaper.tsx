"use client";

import React, { useCallback, useState } from "react";
import Wallet from "@/public/wallet.svg";
import "./FoundCheaper.scss";
import Modal from "@/components/Modal/Modal";
import FoundCheaperForm from "@/components/Form/FoundCheaperForm/Found-cheaper-form";

export default function FoundCheaper() {
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
      <button className="priceMatch" onClick={openModal}>
        <Wallet width={15} height={15} />
        <div className="priceMatchInfo">
          <span>Нашли дешевле? </span>
          <span className="spanGreen">Сделаем скидку!</span>
        </div>
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Обратная связь">
        <FoundCheaperForm onSubmit={handleSubmit} />
      </Modal>
    </>
  );
}
