"use client";

import "./FloatingButtons.scss";
import { useState, useEffect, useRef } from "react";
import ChatIcon from "@/public/chat.svg";
import ArrowUpIcon from "@/public/arrowUp.svg";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement | null>(null);

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
    console.log("Відкрити форму зворотного зв'язку");
  };

  return (
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
  );
};

export default FloatingButtons;
