import React, { useState, useEffect, useRef } from 'react';
import { Waypoint } from 'react-waypoint';

import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';
import Shadow from '../Shadow/Shadow';

import dotsBg from '../../images/dots.svg';
import type from '../../utils/type';
import move from '../../utils/move';
import * as styles from './sources.module.css';

export default function Sources() {
  const [isActive, toggleActive] = useState(false);
  const sources = ['google', 'facebook', 'inapp'];
  const background = useRef(null);

  useEffect(() => {
    window.addEventListener('mousemove', (e) => move(e, background.current));
  }, []);

  return (
    <div className={styles.sourcesContainer}>
      <div className={styles.titleContainer}>
        <div className={styles.titleInner}>
          <div className={styles.paragraph}>
            {/* <Paragraph
              text='Используем новые технологии'
              size='16px'
            /> */}
            <h2
              className={`
                ${styles.description}
                ${styles.source1}
              `}
              id='source-1'
            />
          </div>
          <div className={styles.mainTitle}>
            {/* <Title
              text='Откуда льем'
            /> */}
            <div
              className={`
                ${styles.mainTitle}
                ${styles.source2}
              `}
              id='source-2'
            />
          </div>
        </div>
      </div>

      <div className={styles.dotsBg} ref={background}>
        <img src={dotsBg} alt='dot' />
      </div>

      <Waypoint
        onEnter={() => {
          if (!isActive) {
            toggleActive(true);
            type(
              `<h2 class='${styles.description}'>Используем новые технологии</h2>`,
              0, false, '', 'source-1', 50);
            type(
              `<div class='${styles.mainTitle}'>Откуда льем</div>`,
              0, false, '', 'source-2', 50);
          }
        }}
      />

      <div className={styles.sourcesFlex}>
        {
          sources.map((source, idx) => (
            <div
              key={idx}
              className={`
                ${styles.sourceCard}
                ${isActive && styles.active}
              `}
            >
              <Shadow
                count={15}
                classNames={styles.shadowLeft}
              />
              <span className={styles.sourceText}>{source}</span>
              <Shadow
                count={15}
                classNames={styles.shadowRight}
              />
            </div>
          ))
        }
        <div className={styles.addtionalInfo}>
          <div className={styles.title}>
            <Title
              text='Что дадим?'
            />
          </div>
          <div className={styles.desktopParagraph}>
            <Paragraph
              text='Крутой кейс и наставника, который будет помогать и направлять на всех этапах.'
              size='16px'
            />
          </div>
          <div className={styles.mobileParagraph}>
          <Paragraph
            text='Наставника, который будет помогать и направлять на всех этапах и крутой кейс.'
            size='16px'
          />
          </div>

          <Button classNames={styles.button}>
            Запустить кампанию
          </Button>
        </div>
      </div>
    </div>
  );
}