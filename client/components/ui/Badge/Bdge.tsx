import { Filter } from "@/types/catalog";
import "./Badge.scss";

const Badge: React.FC<Filter> = ({ type }) => {
  return (
    <div className={`badge badge__${type}`}>
      <p>{type.toUpperCase()}</p>
    </div>
  );
};
export default Badge;
