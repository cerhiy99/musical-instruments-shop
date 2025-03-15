"use client";

import "./FloatingButtons.scss";
import { useState, useEffect, useRef, useCallback } from "react";
import ChatIcon from "@/public/chat.svg";
import ArrowUpIcon from "@/public/arrowUp.svg";
import Modal from "../Modal/Modal";
import FeedbackForm from "../Form/FeedBack/FeedBack";
import { Locale } from "@/i18n.config";

const FloatingButtons = ({ lang }: { lang: Locale }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement | null>(null);
  // __________________________________________________________________
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
  // __________________________________________________________________

  useEffect(() => {
    headerRef.current = document.querySelector("header");

    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerHeight]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openFeedback = () => {
    openModal();
    console.log("Відкрити форму зворотного зв'язку");
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Обратная связь">
        <FeedbackForm onSubmit={handleSubmit} lang={lang} />
      </Modal>
      <div className="floatingButtons">
        <button
          className="floatingButton__btn feedbackButton"
          onClick={openFeedback}
        >
          <div className="feedbackButton__inner">
            <ChatIcon width={28} height={28} />
          </div>
        </button>
        {showScrollTop && (
          <button
            className="floatingButton__btn scrollTopButton"
            onClick={scrollToTop}
          >
            <ArrowUpIcon width={22} height={30} />
          </button>
        )}
      </div>
    </>
  );
};

export default FloatingButtons;
