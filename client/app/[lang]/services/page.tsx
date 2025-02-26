import "./Services.scss";
import Image from "next/image";

const serviceDocument = "/images/documents/service.jpg";
const page = async () => {
  return (
    <div className="servicePage">
      <h2 className="servicePage__title">ПП «СКМ-ЕКСПЕРТ»</h2>
      <p className="servicePage__info">
        <span className="servicePage__sert--description">
          (сертифікат ФДМ України №16972/14 від 30-09-2014){" "}
        </span>
        здійснює фахову експертну оцінку струнно-смичкових інструментів
        (скрипка, альт, віолончель, контрабас), інших музичних інструментів та
        культурних цінностей.
      </p>
      <h3 className="servicePage__services">Послуги:</h3>
      <ul className="servicePage__services-list services-list">
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>{" "}
          <p>надання звіту про оцінку вартості культурних цінностей;</p>
        </li>
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>{" "}
          <p>науково-технічна та мистецтвознавча експертиза;</p>
        </li>
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>{" "}
          <p>надання консультацій з оцінки музичних інструментів;</p>
        </li>
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>
          <p>
            надання послуг з оцінки ліквідаційної вартості інструментів, які
            знаходяться на балансі установ, підприємств та організацій усіх форм
            власності.
          </p>
        </li>
      </ul>
      <div className="servicePage__image">
        <Image
          src={serviceDocument}
          width={600}
          height={418.5}
          alt="сертифікат ФДМ України №16972/14 від 30-09-2014"
        />
      </div>
      <h2 className="servicePage__title">Майстерня «СКМ-Luthier»</h2>
      <p className="servicePage__info">
        здійснює виготовлення та ремонт струнно-смичкових інструментів.
      </p>
      <h3 className="servicePage__services">Послуги:</h3>
      <ul className="servicePage__services-list services-list">
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>
          <p>заміна волоса у смичку;</p>
        </li>
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>
          <p>ремонт тростини смичка;</p>
        </li>
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>
          <p>вирівнювання тростини смичка;</p>
        </li>
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>
          <p>ремонт колодки смичка;</p>
        </li>
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>
          <p>
            монтування ніхромової/срібної/посрібленої обмотки на тростині
            смичка;
          </p>
        </li>
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>{" "}
          <p>заміна колодки смичка;</p>
        </li>
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>
          <p>заміна косточки на головці смичка;</p>
        </li>
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>
          <p>заміна кілків;</p>
        </li>
        <li className="services-list__item">
          <div className="servicePage__bullet"></div> <p>заміна грифу;</p>
        </li>
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>{" "}
          <p>заміна верхнього та нижнього поріжків;</p>
        </li>
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>{" "}
          <p>заміна гудзика/шпиля у віолончелі;</p>
        </li>
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>{" "}
          <p>заміна підставки, душки;</p>
        </li>
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>
          <p>ремонт кілкової коробки та завитка;</p>
        </li>
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>
          <p>ремонт корпусу інструменту (без знімання дек/із зніманням дек);</p>
        </li>
        <li className="services-list__item">
          <div className="servicePage__bullet"></div>
          <p>капітальний ремонт інструменту.</p>
        </li>
      </ul>
    </div>
  );
};
export default page;
