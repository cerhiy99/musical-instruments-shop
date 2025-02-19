import React from "react";
import { StaticImageData } from "next/image"; // ✅ Добавляем импорт

interface SpriteImageProps {
  sprite: StaticImageData; // Локальный спрайт
  index: number; // Индекс кадра
  frameWidth: number; // Ширина кадра
  frameHeight: number; // Высота кадра
  columns: number; // Количество колонок в спрайте
}

const SpriteImage: React.FC<SpriteImageProps> = ({
  sprite,
  index,
  frameWidth,
  frameHeight,
  columns,
}) => {
  const x = -(index % columns) * frameWidth;
  const y = -Math.floor(index / columns) * frameHeight;

  return (
    <div
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
