import Image from "next/image";
import "./NovaPost.scss";

export default function NovaPost() {
  return (
    <div className="delivery">
      <div className="deliveryIcon">
        <Image
          src="/images/novapost.png"
          alt="Нова Пошта"
          width={98}
          height={35}
          quality={100}
        />
      </div>
      <div className="deliveryInfo">
        <div className="deliveryTitle">Бесплатная доставка</div>
        <div className="deliverySubtitle">в отделение</div>
      </div>
    </div>
  );
}
