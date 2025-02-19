import React from "react";
import "./Footer.scss";
import { Locale } from "@/i18n.config";
import Link from "next/link";
import Image from "next/image";
import SpriteImage from "@/app/ui/sprite-image";
import spiteLogo from "@/public/Footer/FooterIcons/spriteLogo.png";
import spiteIcons from "@/public/Footer/FooterIcons/spriteIcons.png";

type Props = {
  lang: Locale;
};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="title">
            <p>2025 © Світ класичної музики</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
