"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

import X from "@/public/X.svg";
import ChevronLeft from "@/public/navigation/chevronleft.svg";
import ChevronRight from "@/public/navigation/chevronright.svg";
import ZoomIn from "@/public/icons/plus.svg";
import "./product-gallery.scss";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const maxVisibleThumbnails = 5;
  const totalImages = images.length;

  const handlePrevThumbnails = () => {
    setStartIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNextThumbnails = () => {
    setStartIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const handlePrevImage = () => {
    setActiveImage((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImage((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  // useEffect(() => {
  //   if (activeImage < startIndex) {
  //     setStartIndex(activeImage);
  //   } else if (activeImage >= startIndex + maxVisibleThumbnails) {
  //     setStartIndex(
  //       Math.min(
  //         totalImages - maxVisibleThumbnails,
  //         activeImage - maxVisibleThumbnails + 1
  //       )
  //     );
  //   }
  // }, [activeImage, startIndex, totalImages]);

  const visibleThumbnails = images.slice(
    startIndex,
    startIndex + maxVisibleThumbnails
  );
  const showUpArrow = startIndex > 0;
  const showDownArrow = startIndex + maxVisibleThumbnails < totalImages;

  return (
    <div className="gallery">
      <div className="thumbnailsContainer">
        <button
          className={`thumbnailArrow up ${!showUpArrow ? "disabled" : ""}`}
          onClick={handlePrevThumbnails}
          disabled={!showUpArrow}
          aria-label="Previous thumbnails"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="thumbnails" ref={thumbnailsRef}>
          {visibleThumbnails.map((image, index) => (
            <div
              key={startIndex + index}
              className={`thumbnail ${
                activeImage === startIndex + index ? "active" : ""
              }`}
              onClick={() => setActiveImage(startIndex + index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Thumbnail ${startIndex + index + 1}`}
                width={50}
                height={50}
                className="thumbnailImage"
              />
            </div>
          ))}
        </div>

        <button
          className={`thumbnailArrow down ${!showDownArrow ? "disabled" : ""}`}
          onClick={handleNextThumbnails}
          disabled={!showDownArrow}
          aria-label="Next thumbnails"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div
        className="mainImage"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <Image
          src={images[activeImage] || "/placeholder.svg"}
          alt="Product image"
          width={500}
          height={500}
          className="productImage"
        />

        <button
          className={`zoomButton ${showControls ? "visible" : ""}`}
          onClick={() => setShowModal(true)}
          aria-label="Zoom image"
        >
          <ZoomIn size={10} />
        </button>

        <button
          className={`navButton prevButton ${showControls ? "visible" : ""}`}
          onClick={handlePrevImage}
          aria-label="Previous image"
        >
          <ChevronLeft size={5} />
        </button>

        <button
          className={`navButton nextButton ${showControls ? "visible" : ""}`}
          onClick={handleNextImage}
          aria-label="Next image"
        >
          <ChevronRight size={5} />
        </button>
      </div>

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button
              className="closeButton"
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="modalImageContainer">
              <Image
                src={images[activeImage] || "/placeholder.svg"}
                alt="Product image"
                width={1200}
                height={1200}
                className="modalImage"
              />

              <button
                className="modalNavButton modalPrevButton"
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                className="modalNavButton modalNextButton"
                onClick={handleNextImage}
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="modalThumbnails">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`modalThumbnail ${
                    activeImage === index ? "active" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    width={60}
                    height={60}
                    className="modalThumbnailImage"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
