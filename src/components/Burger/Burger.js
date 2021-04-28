import React, { useState } from 'react';
import * as styles from './burger.module.css';
import Button from '../Button/Button';

export default function Burger() {
  const [isOpen, toggle] = useState(false);

  const navLinks = [
    {
      text: "О НАС",
      link: "#aboutus",
    },
    {
      text: "Что нас отличаеТ",
      link: "#ourpros",
    },
    {
      text: "КЛИЕНТЫ",
      link: "#clients",
    },
    {
      text: "КЕЙСЫ",
      link: "#cases",
    },
  ];

  return (
    <>
      <div
        className={styles.burger}
        onClick={() => toggle(prev => !prev)}
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
            onClick={() => toggle(prev => !prev)}
          >
            Запустить кампанию
          </Button>
        </div>
      }
    </>
  );
}