import Link from "next/link";
import "./SideNews.scss";
import { limitText } from "@/lib/helper";

const SideNews: React.FC = () => {
  return (
    <div className="news">
      <div className="news__container">
        <h3>Новости</h3>
        <Link href={"/catalog"}>Все новости</Link>
      </div>
      <Link href="/news/1">
        <div className="newsItem">
          <span className="date">12 мая 2024</span>
          <p>
            {limitText(
              "New test international Violin Competition awards plans",
              100
            )}
          </p>
          <span className="newsItem__underline"></span>
        </div>
      </Link>
      <Link href="/news/2">
        <div className="newsItem">
          <span className="date">12 мая 2020</span>
          <p>{limitText("У нашей мастерской юбилей", 100)}</p>
          <span className="newsItem__underline"></span>
        </div>
      </Link>
      <Link href="/news/2">
        <div className="newsItem">
          <span className="date">12 мая 2020</span>
          <p>
            {limitText(
              "Some speacil event for all our followers. KMS new studio",
              100
            )}
          </p>
          <span className="newsItem__underline"></span>
        </div>
      </Link>
    </div>
  );
};

export default SideNews;
