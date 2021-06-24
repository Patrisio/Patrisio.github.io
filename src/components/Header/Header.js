import React, { useContext } from "react";
import * as styles from "./header.module.css";
import logo from "../../images/logo.svg";
import Button from '../Button/Button';
import Burger from '../Burger/Burger';
import { Context } from '../../context';

export default function Header() {
  const { lang, changeLang, t } = useContext(Context);
  console.log(t, 'ddddd');
  const setLang = (e) => {
    console.log(e.target.value);
    changeLang(e.target.value);
  };

  const navLinks = [
    {
      text: t('header|О НАС', lang),
      link: "#aboutus",
    },
    {
      text: t('header|Что нас отличает', lang),
      link: "#ourpros",
    },
    {
      text: t('header|КЛИЕНТЫ', lang),
      link: "#clients",
    },
    {
      text: t('header|КЕЙСЫ', lang),
      link: "#cases",
    },
  ];
  console.log(lang, 'LANG__');
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" />
      </div>

      <div className={styles.navigation}>
        <div className={styles.links}>
          {
            navLinks.map(({ text, link }, idx) => <a key={idx} href={link} className={styles.navLink}>{text}</a>)
          }
        </div>

        <Burger />

        {/* <Button
          classNames={styles.button}
        >
          Запустить кампанию
        </Button> */}
      </div>

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
            />
            <label
              htmlFor="radio-1"
              className={`
                ${styles.label}
                ${lang === 'ru' && styles.active}
              `}
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
            />
            <label
              htmlFor="radio-2"
              className={`
                ${styles.label}
                ${lang === 'en' && styles.active}
              `}
            >
              EN
            </label>
          </div>
        </div>
    </div>
  )
}