'use client';
import Link from 'next/link';
import './Sidebar.scss';
import { useState } from 'react';
import ArrowIcon from '@/public/arrow.svg';
import Image from 'next/image';
import SideNews from './SideNews';
import { useTranslation } from '@/contexts/TranslationProvider';
import { Locale } from '@/i18n.config';
import { TypeCategorory } from '@/types/catalog';

const imageUrl = '/images/banner1.jpg';
const categories = [
  {
    name: 'Струнно-смычковые инструменты',
    innerCategory: [
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
    ],
  },
  {
    name: 'Футляры и чехлы для струнных инструментов',
    innerCategory: [
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
    ],
  },
  {
    name: 'Аксессуары для струнных инструментов',
    innerCategory: [
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
    ],
  },
  {
    name: 'Струны',
    innerCategory: [
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
    ],
  },
  {
    name: 'Инструменты и материалы для скрипичных и гитарных мастеров',
    innerCategory: [
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
    ],
  },
  {
    name: 'Аксессуары для духовых инструментов',
    innerCategory: [
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
    ],
  },
  {
    name: 'Деревянные духовые инструменты',
    innerCategory: [
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
    ],
  },
  {
    name: 'Медные духовые инструменты',
    innerCategory: [
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
    ],
  },
  {
    name: 'Футляры и чехлы для духовых инструментов',
    innerCategory: [
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
    ],
  },
  {
    name: 'Футляры и чехлы для гитар',
    innerCategory: [
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
    ],
  },
  {
    name: 'Пюпитры, стойки и прочие аксессуары',
    innerCategory: [
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
    ],
  },
  {
    name: 'Канцелярия и сувениры',
    innerCategory: [
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
    ],
  },
  {
    name: 'Музыкальная литература, ноты',
    innerCategory: [
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
    ],
  },
  {
    name: 'Ремонт музыкальных инструментов, экспертная оценка',
    innerCategory: [
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
      {
        subcategories: ['Скрипки', 'Виолончели', 'Альты', 'Контрабасы'],
      },
    ],
  },
];
const isActive = false;

type Props = {
  lang: Locale;
  categorie: TypeCategorory[];
};

export default function Sidebar({ lang, categorie }: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleMouseEnter = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <aside className="sidebar">
      <nav className="categories">
        <ul>
          {categorie.map((category, i: number) => (
            <li
              key={category.name}
              onMouseEnter={() => handleMouseEnter(category.name)}
              onMouseLeave={handleMouseLeave}
              className={`categoryItem ${
                activeCategory === category.name ? (isActive ? 'activeNavLink' : 'active') : ''
              }`}
            >
              <div>
                {/* <Link href={`/category/${encodeURIComponent(category.name)}`}> */}
                <div className="categoryItem__wrapper">
                  <h3>
                    <Link
                      href={
                        category.children.length > 0
                          ? `/${lang}/catalog/${category.id}`
                          : `/${lang}/product/${category.id}`
                      }
                    >
                      {category.name}
                    </Link>
                  </h3>
                  <div className="categoryItem__wrapper--svg">
                    <ArrowIcon height={8} />
                  </div>
                </div>
              </div>
              {/* {true && ( */}
              {activeCategory === category.name && category.children.length > 0 && (
                <div
                  className="megaMenu"
                  onMouseEnter={() => handleMouseEnter(category.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {category.children.map((inner, i) => (
                    <div className="megaMenuContainer" key={inner.id}>
                      <div className="megaMenuContainer__image">
                        <Image width={50} height={50} src={imageUrl} alt="text" />
                      </div>
                      <div className="megaMenuContainer__list">
                        <h4>
                          <Link
                            href={
                              inner.children.length > 0
                                ? `/${lang}/catalog/${inner.id}`
                                : `/${lang}/product/${inner.id}`
                            }
                          >
                            {inner.name}
                          </Link>
                        </h4>

                        <ul>
                          {inner.children.map(subcategory => (
                            <li key={subcategory.id}>
                              <Link
                                href={
                                  subcategory.children.length > 0
                                    ? `/${lang}/catalog/${subcategory.id}`
                                    : `/${lang}/catalog/${subcategory.id}`
                                }
                              >
                                {subcategory.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <span className="categoryItem__underline"></span>
            </li>
          ))}
        </ul>
      </nav>
      <SideNews lang={lang} />
    </aside>
  );
}
