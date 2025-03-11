"use client";
import React, { useState } from "react";
import "./Footer.scss";
import { Locale } from "@/i18n.config";
import Link from "next/link";

import SpriteImage from "@/components/ui/sprite-image";
import spiteLogo from "@/public/Footer/FooterIcons/spriteLogo.png";
import LocationIcon from "@/public/Footer/location.svg";
import EnvelopeIcon from "@/public/Footer/envelope.svg";
import MobileIcon from "@/public/Footer/mobile.svg";
import { getDictionary } from "@/lib/dictionary";
import Modal from "../Modal/Modal";
import FeedbackForm from "../Form/FeedBack/FeedBack";
import { useTranslation } from "@/contexts/TranslationProvider";

type Props = {
  lang: Locale;
};

const Footer = ({ lang }: Props) => {
  // const { navigation, footer } = await getDictionary(lang);
  const [isModalOpen, setModalopen] = useState<boolean>(false);
  const { t } = useTranslation();
  const handleSubmit = () => {
    console.log("form submitted");
  };
  const closeModal = () => {
    setModalopen(false);
  };
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Обратная связь">
        <FeedbackForm onSubmit={handleSubmit} />
      </Modal>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__col">
            <div className="footer__item">
              <p className=" item__title">
                {new Date().getFullYear()}© {t("footer.name")}
              </p>
            </div>
            <div className="footer__item">
              <div className="footer__contacts">
                <p className="footer__contact item__contacts">
                  {t("footer.contacts")}
                </p>
                <div className="footer__contact item__contacts">
                  <div className="contactSVG__wrapper">
                    <MobileIcon width={18} height={18} />
                    <a href="tel:0800300334">0 800 300 34</a>
                  </div>
                </div>

                <div className="item__contacts">
                  <div className="contactSVG__wrapper">
                    <EnvelopeIcon width={20} height={16} />
                    <a>lviv@skm-music.com.ua</a>
                  </div>
                </div>

                <Link href={"/public-offer"} className="item__contacts">
                  {t("footer.public")}
                </Link>
              </div>
            </div>

            <div className="footer__item">
              <div className="footer--schedule">
                <div className="contactSVG__wrapper">
                  <LocationIcon width={16} height={16} />
                  <p>{t("navigation.schedule")}</p>
                </div>
              </div>
              <button
                onClick={() => setModalopen(true)}
                className="schedule__callback"
              >
                {t("navigation.callBack")}
              </button>
            </div>
            <div className="footer__item">
              <p className="socialLinks__title">{t("footer.stayInTouch")}</p>

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
    </>
  );
};

export default Footer;
