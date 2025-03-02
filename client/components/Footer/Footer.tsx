import React from "react";
import "./Footer.scss";
import { Locale } from "@/i18n.config";
import Link from "next/link";

import SpriteImage from "@/components/ui/sprite-image";
import spiteLogo from "@/public/Footer/FooterIcons/spriteLogo.png";
import LocationIcon from "@/public/Footer/location.svg";
import EnvelopeIcon from "@/public/Footer/envelope.svg";
import MobileIcon from "@/public/Footer/mobile.svg";
import { getDictionary } from "@/lib/dictionary";

type Props = {
  lang: Locale;
};

const Footer = async ({ lang }: Props) => {
  const { navigation, footer } = await getDictionary(lang);
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col">
          <div className="footer__item">
            <p className=" item__title">
              {new Date().getFullYear()}© {footer.name}
            </p>
          </div>
          <div className="footer__item ">
            <div className="footer__contacts">
              <p className="footer__contact item__contacts">
                {footer.contacts}
              </p>
              <div className="footer__contact item__contacts">
                <div className="contactSVG__wrapper">
                  <MobileIcon width={18} height={18} />
                  <a href="tel:0800300334">080030034</a>
                </div>
              </div>

              <div className="item__contacts">
                <div className="contactSVG__wrapper">
                  <EnvelopeIcon width={16} height={16} />
                  <a>lviv@skm-music.com.ua</a>
                </div>
              </div>

              <Link href={"/public-offer"} className="item__contacts">
                {footer.public}
              </Link>
            </div>
          </div>

          <div className="footer__item">
            <div className="footer--schedule">
              <div className="contactSVG__wrapper">
                <LocationIcon width={16} height={16} />
                <p>{navigation.schedule}</p>
              </div>
            </div>
            <a className="schedule__callback">{navigation.callBack}</a>
          </div>
          <div className="footer__item">
            <p className="socialLinks__title">{footer.stayInTouch}</p>

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
