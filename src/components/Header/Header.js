import React, { Component } from "react";
import * as styles from "./header.module.css";
import logo from "../../images/logo.svg";
import Button from '../Button/Button';
import Burger from '../Burger/Burger';

export default function Header() {
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

        <Button
          classNames={styles.button}
        >
          Запустить кампанию
        </Button>
      </div>
    </div>
  )
}