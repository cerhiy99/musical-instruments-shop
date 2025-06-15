import BulletPoint from '@/components/ui/BulletPoint';
import './About.scss';
import Link from 'next/link';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { about } = await getDictionary(lang);
  return (
    <div className="aboutPage">
      <p className="aboutPage__info" dangerouslySetInnerHTML={{ __html: about.a }} />

      <p className="aboutPage__info">{about.c}</p>

      <p
        className="aboutPage__info aboutPage--bold"
        dangerouslySetInnerHTML={{ __html: about.b }}
      />

      <p className="aboutPage__info" dangerouslySetInnerHTML={{ __html: about.d }} />

      <p className="aboutPage__info" dangerouslySetInnerHTML={{ __html: about.e }} />
      <p className="aboutPage__info" dangerouslySetInnerHTML={{ __html: about.f }} />

      <h3 className="aboutPage__title">{about.g}</h3>
      <h3 className="aboutPage__sub">{about.h}</h3>
      <ul className="aboutPage__sub-list about-list">
        <li className="about-list__item">
          <BulletPoint />
          <p>{about.a1}</p>
        </li>
        <li className="about-list__item">
          <BulletPoint />
          <p>{about.a2}</p>
        </li>
        <li className="about-list__item">
          <BulletPoint />
          <p>{about.a3}</p>
        </li>
        <li className="about-list__item">
          <BulletPoint />
          <p>{about.a4}</p>
        </li>
        <li className="about-list__item">
          <BulletPoint />
          <p>{about.a5}</p>
        </li>
      </ul>
      <ul>
        <h3 className="aboutPage__sub">Услуги:</h3>
        <li className="about-list__item">
          <BulletPoint />
          <p>{about.a6} </p>
        </li>
        <li className="about-list__item">
          <BulletPoint />
          <p>{about.a7}</p>
        </li>
        <li className="about-list__item">
          <BulletPoint />
          <p>{about.a8} </p>
        </li>
        <li className="about-list__item">
          <BulletPoint />
          <p dangerouslySetInnerHTML={{ __html: about.a9 }}></p>
        </li>
      </ul>
      <p className="aboutPage__info">{about.a10}</p>
      <p className="aboutPage__info">{about.a11}</p>
    </div>
  );
};
export default page;
