import Image from "next/image";
import type { Article } from "@/types/article";
import "./News.scss";
import image from "@/public/image/news/newsBanner.png";
import ButtonBack from "@/components/ui/ButtonBack/ButtonBack";

const mockArticle: Article = {
  title: "The Strad",
  date: "2020-02-19",
  sourceUrl: "/images/news/newsBanner.png",
  imageUrl: "/images/news/newsBanner.png",
  content: [
    {
      type: "paragraph",
      text: 'Приємно, що завдяки нашому проекту - Міжнародний конкурс скрипалів Олега Криси - широка читацька аудиторія авторитетного британського журналу "The Strad", заснованого 1890 року, що публікує статті про виконавців на струнно-смичкових інструментах і академічну музику, не лише дізналась про конкурс, а й пізнала правдиву історію. Музичний оглядач журналу Том Стюарт, присутній на конкурсі, у своїй статті зазначає, що корифеї скрипкового мистецтва (Натан Мільштейн, Давид Ойстрах, Айзек Стерн, Леонід Коган, та інші), яких прийнято називати виконавцями московської школи, народилися і отримали освіту в Україні, яка і мала має талановитих педагогів та учнів. Свідченням цього є два призові місця українських учасників конкурсу. Зрештою, Ви можете ознайомитись із перекладом статті ("Між двома світами"), в якій ґрунтовно аналізуються виступи фіналістів, чого, на жаль, ми не бачимо у вітчизняній музичній критиці.',
    },
    {
      type: "subtitle",
      text: "12 мая 2020",
    },
    {
      type: "subtitle",
      text: "Між двома світами",
    },
    {
      type: "paragraph",
      text: "Третій Міжнародний конкурс скрипалів Олега Криси став першим за свою коротку історію, на якому високі нагороди отримали українські музиканти. Про цю подію, спрямовану на те, щоб висвітлити музичний родовід України, розказує Том Стюарт.",
    },
    {
      type: "paragraph",
      text: 'Лише, два культурно, географічно та політично відокремлених України від її більшого сусіда, не завжди легко відстежити, тож може стати несподіванкою (як це сталося для мене) що багато титанів "російської" школи гри на скрипці, серед яких Натан Мільштейн, Давид Ойстрах та Леонід Коган, народилися на території сучасної України. Олег Криса, теж український скрипаль, вирішив подивитися на культурні досягнення своєї країни з огляду на визнання, якого вона заслуговує. Учень Ойстраха, Олег Криса у 1989 р. викладає в Істменській школі музики в Рочестері, штат Нью-Йорк. Він погодився надати своє ім\'я Міжнародному конкурсу скрипалів, який проходить раз на три роки, починаючи з 2013 року. Він також очолює журі конкурсу. У жовтні я приїхав до Львова, міста, що знаходиться недалеко від кордону України з Польщею, щоб зустрітися з ним та почути три часті фіналістів на конкурсі 2019 року.',
    },
    {
      type: "quote",
      text: '"Усі відомі радянські митці пройшли через це місто, прямуючи на Захід", - каже він про місто, в якому років вісім, що сформували його особистість. «Були й такі, що рухалися у зворотному напрямку», - Артур Рубінштейн, а ще раніше Шопен і Сарасате. Львів завжди був на перехресті двох різних світів". Вкриті',
    },
  ],
};

interface NewsArticleProps {
  article: Article;
}

// export default function NewsArticle({ article }: NewsArticleProps) {
export default function NewsArticle() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("uk-UA", options);
  };

  return (
    <article className="news-article">
      <div className="news-article__image-container">
        <Image
          src={mockArticle.imageUrl || "/placeholder.svg"}
          alt={mockArticle.title}
          fill
          className="news-article__image"
          priority
        />
      </div>

      <div className="news-article__content">
        <div className="news-article__header">
          <h1 className="news-article__title">{mockArticle.title}</h1>
          <div className="news-article__meta">
            <time dateTime={mockArticle.date}>
              {formatDate(mockArticle.date)}
            </time>
            {mockArticle.sourceUrl && (
              <>
                <span className="news-article__meta-separator">•</span>
                <a
                  href={mockArticle.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-article__source-link"
                >
                  Джерело
                </a>
              </>
            )}
          </div>
        </div>

        <div className="news-article__body">
          {mockArticle.content.map((section, index) => {
            switch (section.type) {
              case "paragraph":
                return (
                  <p key={index} className="news-article__paragraph">
                    {section.text}
                  </p>
                );
              case "quote":
                return (
                  <blockquote key={index} className="news-article__quote">
                    {section.text}
                  </blockquote>
                );
              case "subtitle":
                return (
                  <h2 key={index} className="news-article__subtitle">
                    {section.text}
                  </h2>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
      <ButtonBack />
    </article>
  );
}
