import Image from "next/image";
import "./GreetingBanner.scss";
import React from "react";
import Link from "next/link";

const GreetingBanner: React.FC = () => {
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
          &nbsp;&nbsp;&nbsp;&nbsp;Музыкальный магазин - это одно из направлений
          деятельности Творческого объединения «СКМ». Наше
          &nbsp;&nbsp;&nbsp;&nbsp;объединение создано с целью популяризации
          классической музыки, интеграции украинской скрипичной музыки в
          &nbsp;&nbsp;&nbsp;&nbsp;мировой контекст, а также обеспечения
          профессиональных музыкантов, академических коллективов, учебных
          &nbsp;&nbsp;&nbsp;&nbsp;заведений и мастеров по изготовлению и ремонту
          музыкальных инструментов всем необходимым. Так, в нашем
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href={"/catalog"}>каталоге товаров</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;Вы найдете: &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href={"/catalog"}>Струнно-смычковые инструменты,</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href={"/catalog"}>Аксессуары для струнных инструментов,</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href={"/catalog"}>Струны,</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href={"/catalog"}>
            Футляры и чехлы для струнных инструментов,
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href={"/catalog"}>
            Инструменты и материалы для скрипичных мастеров,
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href={"/catalog"}>
            Духовые &nbsp;&nbsp;&nbsp;&nbsp;инструменты,
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href={"/catalog"}>Аксессуары для духовых инструментов,</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href={"/catalog"}>
            Футляры и чехлы для духовых инструментов,
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;<Link href={"/catalog"}>Сувениры</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;и &nbsp;&nbsp;&nbsp;&nbsp;множество других
          товаров. &nbsp;&nbsp;&nbsp;&nbsp;В творческое объединение входит целый
          ряд компаний, предприятий, частных предпринимателей,
          &nbsp;&nbsp;&nbsp;&nbsp;профессиональных музыкантов, экспертов
          культурных ценностей, а также скрипичных мастеров.
          &nbsp;&nbsp;&nbsp;&nbsp;Творческое объединение «СКМ» - учредитель и
          организатор &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href={"/catalog"}>
            Международного конкурса скрипачей Олега Крысы,
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;а &nbsp;&nbsp;&nbsp;&nbsp;также
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href={"/catalog"}>
            xМеждународной музыкальной Академии «СКМ»!
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;Наша компания является официальным
          представителем в Украине (Вы можете ознакомиться с нашими
          &nbsp;&nbsp;&nbsp;&nbsp;сертификатами, перейдя по следующим ссылкам)
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href={"/catalog"}>«Jakob Winter»,</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href={"/catalog"}>«Bam»,</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href={"/catalog"}>«Laubach»,</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href={"/catalog"}>«Pilgerstorfer»,</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href={"/catalog"}>
            «Petz &nbsp;&nbsp;&nbsp;&nbsp;Kolophonium Vienna»,
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;а также дилером других, представленных на
          сайте брендов, тем самым, предлагая клиенту
          &nbsp;&nbsp;&nbsp;&nbsp;самую низкую цену и быструю доставку.
          &nbsp;&nbsp;&nbsp;&nbsp;Учитывая тот факт, что часть средств,
          полученных от продажи, направляется на благотворительные цели, в
          &nbsp;&nbsp;&nbsp;&nbsp;поддержку музыкальных конкурсов,
          мастер-классов для музыкантов, хотелось бы высказать особую
          благодарность &nbsp;&nbsp;&nbsp;&nbsp;нашим клиентам!!!{" "}
        </p>
      </div>
    </div>
  );
};

export default GreetingBanner;
