import "./ContactsInfo.scss";

import MapIcon from "@/public/contacts/map.svg";
import PhoneIcon from "@/public/contacts/phone.svg";
import MessageIcon from "@/public/contacts/message.svg";
import ClockIcon from "@/public/contacts/clock.svg";

export default function ContactsInfo() {
  return (
    <div className="companyInfo">
      <p className="companyHeader">
        Главный офис компании находится в г. Львов.
        <br />
        Обязательно приходите к нам за вдохновением.
      </p>

      <div className="infoItem">
        <div className="iconWrapper">
          <MapIcon />
        </div>
        <div className="infoContent">
          <h3>Адрес</h3>
          <p>79005 Львов, Украина, ул. Ивана Франка, 48, оф.4</p>
        </div>
      </div>

      <div className="infoItem">
        <div className="iconWrapper">
          <PhoneIcon />
        </div>
        <div className="infoContent">
          <h3>Телефон</h3>
          <p>0800 300 334</p>
          <p className="highlight">
            бесплатный номер для всех мобильных операторов
          </p>
        </div>
      </div>

      <div className="infoItem">
        <div className="iconWrapper">
          <MessageIcon />
        </div>
        <div className="infoContent">
          <h3>E-mail</h3>
          <p>lviv@skm-music.com.ua</p>
        </div>
      </div>

      <div className="infoItem">
        <div className="iconWrapper">
          <ClockIcon />
        </div>
        <div className="infoContent">
          <h3>Режим работы</h3>
          <p>с Пн-Пт с 11.00-18.00 ч. перерыв с 14.00 до 15.00 ч.</p>
          <p>Суббота, Воскресенье - выходной</p>
        </div>
      </div>
    </div>
  );
}
