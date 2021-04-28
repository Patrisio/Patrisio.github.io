import React, { useContext } from 'react';
import * as styles from './footer.module.css';

import { Context } from '../../context';

import logo from "../../images/logo.svg";
import twitter from '../../images/twitter.svg';
import facebook from '../../images/facebook.svg';
import linkedin from '../../images/linkedin.svg';

export default function Footer() {
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

  const socials = [
    {
      imagePath: twitter,
      link: '',
      alt: 'twitter',
    },
    {
      imagePath: facebook,
      link: '',
      alt: 'facebook',
    },
    {
      imagePath: linkedin,
      link: '',
      alt: 'linkedin',
    },
  ];

  const { lang, changeLang } = useContext(Context);

  const setLang = (e) => {
    changeLang(e.target.value);
  };

  return (
    <div className={styles.footerContainer}>
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div className={styles.navigation}>
        <div className={styles.links}>
          {
            navLinks.map(({ text, link }, idx) => <a key={idx} href={link} className={styles.navLink}>{text}</a>)
          }
        </div>
      </div>

      <div className={styles.langAndSocials}>
        <div
          className={styles.langs}
          onChange={setLang}
        >
          <div className={styles.radio}>
            <input
              id="radio-1"
              type="radio"
              name="radio"
              value="ru"
              checked={lang === 'ru'}
              onChange={() => {}}
            />
            <label
              htmlFor="radio-1"
              className={styles.label}
            >
              RU
            </label>
          </div>
          
          <div className={styles.radio}>
            <input
              id="radio-2"
              type="radio"
              name="radio"
              value="en"
              checked={lang === 'en'}
              onChange={() => {}}
            />
            <label
              htmlFor="radio-2"
              className={styles.label}
            >
              EN
            </label>
          </div>
        </div>

        <div>
          {
            socials.map(({ imagePath, link, alt }, idx) => (
              <a
                key={idx}
                href={link}
                className={styles.link}
              >
                <img src={imagePath} alt={alt} />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
}