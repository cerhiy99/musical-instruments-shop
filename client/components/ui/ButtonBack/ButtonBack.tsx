"use client";
import { useRouter } from "next/navigation";
import "./ButtonBack.scss";
import ArrowLeft from "@/public/navigation/chevronleft.svg";

export default function ButtonBack() {
  const router = useRouter();
  return (
    <button className="ButtonBack" onClick={() => router.back()}>
      <div className="ButtonBack__svgWrapper">
        <ArrowLeft height={20} width={15} />
      </div>
      <div className="ButtonBack__container">
        <p>Назад к списку</p>
      </div>
    </button>
  );
}
