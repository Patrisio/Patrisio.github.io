import React, { useState, useContext } from 'react';
import * as styles from './burger.module.css';
import Button from '../Button/Button';
import { Context } from '../../context';

export default function Burger() {
  const [isOpen, toggle] = useState(false);
  const { lang, t } = useContext(Context);

  const navLinks = [
    {
      text: t('burger|О НАС', lang),
      link: "#aboutus",
    },
    {
      text: t('burger|Что нас отличает', lang),
      link: "#ourpros",
    },
    {
      text: t('burger|КЛИЕНТЫ', lang),
      link: "#clients",
    },
    {
      text: t('burger|КЕЙСЫ', lang),
      link: "#cases",
    },
  ];

  return (
    <>
      <div
        className={styles.burger}
        onClick={() => toggle(prev => {
          prev ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden';
          return !prev;
        })}
      >
        <div className={styles.circle}>
          <div className={styles.linesContainer}>
            <div className={`${styles.line} ${isOpen && styles.active}`} />
            <div className={`${styles.line} ${isOpen && styles.active}`} />
          </div>
        </div>
      </div>

      {
        <div
          className={`${styles.mobileMenu} ${isOpen && styles.opened}`}
        >
          <div>
            <div className={styles.nav}>
              {
                navLinks.map(({ text, link }, idx) => <a key={idx} onClick={() => toggle(prev => !prev)} href={link} className={styles.navLink}>{text}</a>)
              }
            </div>
          </div>

          <Button
            classNames={styles.button}
            onClick={() => {
              toggle(prev => {
                prev ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden';
                return !prev;
              });
            }}
          >
            {t('burger|Запустить кампанию', lang)}
          </Button>
        </div>
      }
    </>
  );
}