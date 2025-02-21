import React from "react";
import "./Footer.scss";
import { Locale } from "@/i18n.config";
import Link from "next/link";
import Image from "next/image";
import SpriteImage from "@/components/ui/sprite-image";
import spiteLogo from "@/public/Footer/FooterIcons/spriteLogo.png";
import spiteIcons from "@/public/Footer/FooterIcons/spriteIcons.png";

type Props = {
  lang: Locale;
};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col">
          <div className="footer__item">
            <p className=" item__title">2025 © Світ класичної музики</p>
          </div>
          <div className="footer__item ">
            <div className="footer__contacts">
              <p className="footer__contact item__contacts">Наши контакты</p>
              <div className="footer__contact item__contacts">
                <a href="tel:0800300334">080030034</a>
              </div>
              <div className="item__contacts">
                <a>lviv@skm-music.com.ua</a>
              </div>
              <p className="item__contacts">Наши контакты</p>
            </div>
          </div>
          <div className="footer__item">
            <div className="footer--schedule">
              <p>Пн.-Пт. с 11:00 до 18:00 часов</p>
            </div>
            <a className="schedule__callback">Обратный звонок</a>
          </div>
          <div className="footer__item">
            <p className="socialLinks__title">Оставайтесь на связи</p>

            <div className="socialLinks">
              <SpriteImage
                className="socialLinks__icon"
                sprite={spiteLogo}
                x={-54}
                y={-4}
                frameWidth={41}
                frameHeight={41}
              />
              <SpriteImage
                className="socialLinks__icon"
                sprite={spiteLogo}
                x={-104}
                y={-4}
                frameWidth={41}
                frameHeight={41}
              />
              <SpriteImage
                className="socialLinks__icon"
                sprite={spiteLogo}
                x={-154}
                y={-4}
                frameWidth={41}
                frameHeight={41}
              />
              <SpriteImage
                className="socialLinks__icon"
                sprite={spiteLogo}
                x={-204}
                y={-4}
                frameWidth={41}
                frameHeight={41}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
