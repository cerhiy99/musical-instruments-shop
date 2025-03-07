import BulletPoint from "@/components/ui/BulletPoint";
import "./About.scss";
import Link from "next/link";

const page = async () => {
  return (
    <div className="aboutPage">
      <p className="aboutPage__info">
        Творческое объединение{" "}
        <span className="aboutPage--bold">«Світ класичної музики» </span>
        создано с целью популяризации классической музыки, интеграции украинской
        скрипичной музыки в мировой контекст, а также обеспечения
        профессиональных музыкантов, академических коллективов, учебных
        заведений и мастеров по изготовлению и ремонту музыкальных инструментов
        всем необходимым. 
      </p>

      <p className="aboutPage__info">
        В Творческое объединение входит целый ряд компаний, предприятий, частных
        предпринимателей, профессиональных музыкантов, экспертов культурных
        ценностей, а также скрипичных мастеров.
      </p>

      <p className="aboutPage__info aboutPage--bold">
        Творческое объединение &quot;СКМ&quot; - учредитель и организатор{" "}
        <Link className="aboutPage--link" href="/">
          Международного конкурса скрипачей Олега Крысы,
        </Link>{" "}
         а также <Link href="/"> Международной музыкальной Академии «СКМ»</Link>
        !
      </p>

      <p className="aboutPage__info">
        Музыкальный интернет магазин «СКМ» — это первый украинский
        специализированный магазин, в котором вы можете приобрести или заказать
        все необходимое от «А» до «Я»!
      </p>

      <p className="aboutPage__info">
        Компания является официальным представителем в Украине «
        <span className="aboutPage--bold">Jakob Winter</span>», «
        <span className="aboutPage--bold">Bam</span>», «
        <span className="aboutPage--bold">Laubach</span>», «
        <span className="aboutPage--bold">Pilgerstorfer</span>», «
        <span className="aboutPage--bold">Petz Kolophonium Vienna</span>»,
        а также дилером других, представленных на сайте брендов, тем самым,
        предлагая клиенту самую низкую цену и быструю доставку.
      </p>
      <p className="aboutPage__info">
        Мы работаем как с физическими, так и с юридическими лицами. Имеем
        большой опыт сотрудничества с оркестрами, театрами, музыкально-
        образовательными учреждениями, концертными организациями, европейскими и
        отечественными скрипичными мастерами. С удовольствием рассматриваем
        новые предложения о сотрудничестве.
      </p>

      <h3 className="aboutPage__title">
        Основные направления деятельности нашей компании:
      </h3>
      <h3 className="aboutPage__sub">Продажа:</h3>
      <ul className="aboutPage__sub-list about-list">
        <li className="about-list__item">
          <BulletPoint />
          <p>струнно-смычковых инструментов</p>
        </li>
        <li className="about-list__item">
          <BulletPoint />
          <p>деревянных и медных духовых инструментов</p>
        </li>
        <li className="about-list__item">
          <BulletPoint />
          <p>аксессуаров, средств по уходу за инструментами</p>
        </li>
        <li className="about-list__item">
          <BulletPoint />
          <p>футляров и чехлов для инструментов</p>
        </li>
        <li className="about-list__item">
          <BulletPoint />
          <p>инструментов и материалов для скрипичных мастеров</p>
        </li>
      </ul>
      <ul>
        <h3 className="aboutPage__sub">Услуги:</h3>
        <li className="about-list__item">
          <BulletPoint />{" "}
          <p>ремонт, реставрация и обслуживание музыкальных инструментов </p>
        </li>
        <li className="about-list__item">
          <BulletPoint />
          <p>
            экспертная оценка музыкальных инструментов и других культурных
            ценностей    
          </p>
        </li>
        <li className="about-list__item">
          <BulletPoint />
          <p>
            организация, продюсирование и менеджмент проектов классической
            музыки и музыкантов 
          </p>
        </li>
        <li className="about-list__item">
          <BulletPoint />{" "}
          <p>
            услуги звукозаписи «
            <span className="aboutPage--bold">ЖИВОЙ ЗВУК</span>»
          </p>
        </li>
      </ul>
      <p className="aboutPage__info">
        Если у Вас возникли вопросы, воспользуйтесь страницей обратной связи.
      </p>
      <p className="aboutPage__info">Будем рады сотрудничеству!</p>
    </div>
  );
};
export default page;
