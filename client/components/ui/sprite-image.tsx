import React from "react";
import { StaticImageData } from "next/image";

interface SpriteImageProps {
  sprite: StaticImageData; // Локальный спрайт
  x: number;
  y: number;
  frameWidth: number; // Ширина кадра
  frameHeight: number; // Высота кадра
  className?: string;
}

const SpriteImage: React.FC<SpriteImageProps> = ({
  sprite,
  x,
  y,
  frameWidth,
  frameHeight,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        width: frameWidth,
        height: frameHeight,
        backgroundImage: `url(${sprite.src})`,
        backgroundPosition: `${x}px ${y}px`,
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default SpriteImage;
