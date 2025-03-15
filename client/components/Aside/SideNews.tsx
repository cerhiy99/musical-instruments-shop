import Link from "next/link";
import "./SideNews.scss";
import { limitText } from "@/lib/helper";
import { Locale } from "@/i18n.config";

const SideNews: React.FC<{ lang: Locale }> = ({ lang }) => {
  return (
    <div className="news">
      <div className="news__container">
        <h3>Новости</h3>
        <Link href={`/${lang}/news`}>Все новости</Link>
      </div>
      <Link href={`/${lang}/news/1`}>
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
      <Link href={`/${lang}/news/2`}>
        <div className="newsItem">
          <span className="date">12 мая 2020</span>
          <p>{limitText("У нашей мастерской юбилей", 100)}</p>
          <span className="newsItem__underline"></span>
        </div>
      </Link>
      <Link href={`/${lang}/news/3`}>
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
