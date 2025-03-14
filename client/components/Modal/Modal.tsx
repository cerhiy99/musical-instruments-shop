"use client";

import type React from "react";
import { useEffect, useState } from "react";
import X from "@/public/X.svg";
import "./Modal.scss";

import { usePathname } from "next/navigation";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      console.log("[MODAL WINDOW] Modal is open: " + isOpen);
      setIsVisible(true);
      document.body.style.overflow = "hidden";
      console.log(document.body.style.overflow);
      // } else {
      //   setTimeout(() => {
      //     setIsVisible(false);
      //   }, 300);
      //   console.log("[MODAL WINDOW] Modal is open ELSE step: " + isOpen);
      //   document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      console.log("[MODAL WINDOW] Modal is close: " + isOpen);
    };
  }, [isOpen]);
  useEffect(() => {
    console.log(pathname);
    onClose(); // Закрываем модалку при смене роута
    setIsVisible(false);
  }, [pathname, onClose, setIsVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`modal-overlay ${isOpen ? "active" : "closing"}`}
      onClick={() => {
        onClose();
        setIsVisible(false);
      }}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button
            className="close-button"
            onClick={() => {
              onClose();
              setIsVisible(false);
            }}
          >
            <X size={20} />
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
