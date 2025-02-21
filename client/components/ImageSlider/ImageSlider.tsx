"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import ChevronLeft from "@/public/navigation/chevronleft.svg";
import ChevronRight from "@/public/navigation/chevronright.svg";
import "./ImageSlider.scss";
import Image from "next/image";

interface SliderImage {
  src: string;
  alt: string;
  text: string;
  url: string;
}

interface ImageSliderProps {
  images: SliderImage[];
  interval?: number;
}

export default function ImageSlider({
  images,
  interval = 5000,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [isHovered, interval, nextSlide]);

  return (
    <div
      className="slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((image, index) => (
        <Link
          key={index}
          href={image.url}
          className={`sliderSlide ${index === currentIndex ? "active" : ""}`}
        >
          <Image fill src={image.src || "/placeholder.svg"} alt={image.alt} />
          <div className="sliderSlideContent">
            <h2>{image.text}</h2>
            <div>
              <p>Майстрові</p>
              <p>-Скрипки</p>
              <p>-Альти</p>
              <p>-Віолончелі</p>
            </div>
          </div>
        </Link>
      ))}

      <button
        onClick={(e) => {
          e.preventDefault();
          prevSlide();
        }}
        className={`sliderArrowButton prev ${isHovered ? "active" : ""}`}
        aria-label="Previous slide"
      >
        <ChevronLeft height={16} />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          nextSlide();
        }}
        className={`sliderArrowButton next ${isHovered ? "active" : ""}`}
        aria-label="Next slide"
      >
        <ChevronRight height={16} />
      </button>

      <div className="sliderNav">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              setCurrentIndex(index);
            }}
            className={`${"sliderNavButton"} ${
              index === currentIndex ? "active" : ""
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
