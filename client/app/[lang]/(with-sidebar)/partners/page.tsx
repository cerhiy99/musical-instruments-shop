import Link from "next/link";
import "./Partners.scss";
import Image from "next/image";
import { Locale } from "@/i18n.config";

const parntnersLogos = [
  "/images/partners/partners1.jpg",
  "/images/partners/partners2.jpg",
  "/images/partners/partners3.jpg",
  "/images/partners/partners4.jpg",
  "/images/partners/partners5.jpg",
];

export const metadata = {
  title: "Partners",
};

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div className="partnersPage__grid">
      <div className="partnersPage__grid--item">
        <Link href={`/${lang}/partners/1`} />
        <Image
          src={parntnersLogos[0]}
          alt="Logo of PETZ KOLOPHONIUM"
          width={60}
          height={60}
        />
        <p>PETZ KOLOPHONIUM</p>
      </div>
      <div className="partnersPage__grid--item">
        <Link href={`/${lang}/partners/2`} />
        <Image
          src={parntnersLogos[1]}
          alt="Logo of JakobWinter"
          width={126.25}
          height={60}
        />
        <p className="blue">JakobWinter</p>
      </div>
      <div className="partnersPage__grid--item">
        <Link href={`/${lang}/partners/3`} />
        <Image
          src={parntnersLogos[2]}
          alt="Logo of BAM France"
          width={108.69}
          height={60}
        />
        <p className="blue">BAM France</p>
      </div>
      <div className="partnersPage__grid--item">
        <Link href={`/${lang}/partners/4`} />
        <Image
          src={parntnersLogos[3]}
          alt="Logo of Pilgerstorfer"
          width={92.97}
          height={60}
        />
        <p>Pilgerstorfer</p>
      </div>
      <div className="partnersPage__grid--item">
        <Link href={`/${lang}/partners/5`} />
        <Image
          src={parntnersLogos[4]}
          alt="Logo of Laubach"
          width={81.5}
          height={60}
        />
        <p>Laubach</p>
      </div>
    </div>
  );
};
export default page;
