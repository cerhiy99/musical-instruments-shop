import "./AvailabilityIcon.scss";
import CircleX from "@/public/circle-x.svg";
import Check from "@/public/check.svg";

export default function AvailabilityIcon({
  availability,
  numberOfItems,
}: {
  availability: boolean;
  numberOfItems?: number;
}) {
  return (
    <div className="inStock">
      {availability ? (
        <Check width={18} height={18} color={"#25c75b"} />
      ) : (
        <CircleX width={15} height={15} />
      )}
      <p>
        {availability
          ? `В наличии (${
              numberOfItems ? numberOfItems : "кількість уточнюється"
            })`
          : "Нет на складе (можно заказать)"}
      </p>
    </div>
  );
}
