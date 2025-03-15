import Image from "next/image";
import "./GreetingBanner.scss";
import React from "react";
import Link from "next/link";
import { Locale } from "@/i18n.config";

const GreetingBanner: React.FC<{ lang: Locale }> = ({ lang }) => {
  return (
    <div className="greetingBanner">
      <div className="greetingImage">
        <Image
          src="/images/greetingImage.jpg"
          width={258}
          height={258}
          alt="text"
        />
      </div>
      <div className="greetingText">
        <p>
          Музыкальный магазин - это одно из направлений деятельности Творческого
          объединения «СКМ». Наше объединение создано с целью популяризации
          классической музыки, интеграции украинской скрипичной музыки в мировой
          контекст, а также обеспечения профессиональных музыкантов,
          академических коллективов, учебных заведений и мастеров по
          изготовлению и ремонту музыкальных инструментов всем необходимым. Так,
          в нашем
          <Link href={`/${lang}/catalog`}>каталоге товаров</Link>
          Вы найдете:
          <Link href={`/${lang}/catalog`}>Струнно-смычковые инструменты,</Link>
          <Link href={`/${lang}/catalog`}>
            Аксессуары для струнных инструментов,
          </Link>
          <Link href={`/${lang}/catalog`}>Струны,</Link>
          <Link href={`/${lang}/catalog`}>
            Футляры и чехлы для струнных инструментов,
          </Link>
          <Link href={`/${lang}/catalog`}>
            Инструменты и материалы для скрипичных мастеров,
          </Link>
          <Link href={`/${lang}/catalog`}>Духовые инструменты, </Link>
          <Link href={`/${lang}/catalog`}>
            Аксессуары для духовых инструментов,{" "}
          </Link>
          <Link href={`/${lang}/catalog`}>
            Футляры и чехлы для духовых инструментов,
          </Link>
          <Link href={`/${lang}/catalog`}>Сувениры </Link>и множество других
          товаров.
        </p>
        <p>
          В творческое объединение входит целый ряд компаний, предприятий,
          частных предпринимателей, профессиональных музыкантов, экспертов
          культурных ценностей, а также скрипичных мастеров.
        </p>
        <p>
          Творческое объединение «СКМ» - учредитель и организатор
          <Link href={`/${lang}/catalog`}>
            {" "}
            Международного конкурса скрипачей Олега Крысы,
          </Link>
          а также{" "}
          <Link href={`/${lang}/catalog`}>
            Международной музыкальной Академии «СКМ»!
          </Link>
        </p>
        <p>
          Наша компания является официальным представителем в Украине (Вы можете
          ознакомиться с нашими сертификатами, перейдя по следующим ссылкам)
          <Link href={`/${lang}/catalog`}> «Jakob Winter»,</Link>
          <Link href={`/${lang}/catalog`}> «Bam»,</Link>
          <Link href={`/${lang}/catalog`}> «Laubach»,</Link>
          <Link href={`/${lang}/catalog`}> «Pilgerstorfer»,</Link>
          <Link href={`/${lang}/catalog`}> «Petz Kolophonium Vienna», </Link> а
          также дилером других, представленных на сайте брендов, тем самым,
          предлагая клиенту самую низкую цену и быструю доставку.
        </p>
        <p>
          Учитывая тот факт, что часть средств, полученных от продажи,
          направляется на благотворительные цели, в поддержку музыкальных
          конкурсов, мастер-классов для музыкантов, хотелось бы высказать особую
          благодарность нашим клиентам!!!
        </p>
      </div>
    </div>
  );
};

export default GreetingBanner;
