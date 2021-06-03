import React, { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';

import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';
import Shadow from '../Shadow/Shadow';

import type from '../../utils/type';
import * as styles from './features.module.css';

export default function Features({ isMobileDevice }) {
  const [isGreenLineActive, toggleLine] = useState(false);
  const features = [
    {
      animationPath: 'https://assets2.lottiefiles.com/packages/lf20_l9nasddg.json',
      title: 'Креатив',
      description: 'Креативный отдел знает, с помощью каких механик привлечь и зацепить вашу целевую аудиторию.',
      id: 'description-1',
      titleId: 'mainTitle-1',
      height: '100px',
    },
    {
      animationPath: 'https://assets3.lottiefiles.com/packages/lf20_kmgvswh7.json',
      title: 'Антифрод',
      description: 'Собственная антифрод система защищает наших клиентов от мошенничества и некачественного трафика.',
      id: 'description-2',
      titleId: 'mainTitle-2',
      height: '150px',
    },
    {
      animationPath: 'https://assets5.lottiefiles.com/packages/lf20_1xa2gxaj.json',
      title: 'Автоматизация',
      description: 'Технологии по оптимизации трафика позволяют получить максимальную прибыль от инвестиций.',
      id: 'description-3',
      titleId: 'mainTitle-3',
      height: '125px',
    },
  ];

  const initAnimation = () => {
    if (!isGreenLineActive) {
      type(`<h2 class='${styles.description}'>Креативный отдел знает, с помощью каких механик привлечь и зацепить вашу целевую аудиторию.</h2>`, 0, false, '', 'description-1', 20);
      type(`<h2 class='${styles.description}'>Собственная антифрод система защищает наших клиентов от мошенничества и некачественного трафика.</h2>`, 0, false, '', 'description-2', 20);
      type(`<h2 class='${styles.description}'>Технологии по оптимизации трафика позволяют получить максимальную прибыль от инвестиций.</h2>`, 0, false, '', 'description-3', 20);
      type(`<h2 class='${styles.description}'>Мы команда единомышленников. Каждый из нас заряжен на результат и хочет достичь больших целей.</h2>`, 0, false, '', 'description-4', 20);
      
      type(`<div class='${styles.mainTitle}'>Креатив</div>`, 0, false, '', 'mainTitle-1', 80);
      type(`<div class='${styles.mainTitle}'>Антифрод</div>`, 0, false, '', 'mainTitle-2', 80);
      type(`<div class='${styles.mainTitle}'>Автоматизация</div>`, 0, false, '', 'mainTitle-3', 80);
      type(`<div class='${styles.mainTitle}'>syndicate family</div>`, 0, false, '', 'mainTitle-4', 80);
  
      toggleLine(true);
    }
  };

  return (
    <>
      <Waypoint
        onEnter={initAnimation}
        bottomOffset={isMobileDevice ? 0 : 500}
      />

      {/* <div className={styles.mobileParagraph}>
        <Paragraph text='Мы не любим душных типов, которые не хотят “палить&nbsp;фишечки”' />
      </div> */}
      
      <div className={styles.featuresContainer}>
        {
          features.map(({ animationPath, title, description, id, titleId, height }, idx) => {
            return idx === 1 ? 
            <div
              key={idx}
              className={styles.externalContainer}
              key={idx}
            >
              {/* <div className={styles.paragraphTop}>
                <Paragraph text='Мы не любим душных типов, которые не хотят “палить&nbsp;фишечки”' />
              </div> */}
              <div
                className={styles.featureCard}
              >
                <div className={styles.lottiContainer}>
                  <lottie-player
                    src={animationPath}
                    background="transparent"
                    speed="1"
                    autoplay
                  />
                </div>
                <div className={styles.titleContainer}>
                  {/* <Title text={title} size='29px' /> */}
                  <div className={styles.mainTitle} id={titleId} />
                </div>
                {/* <Paragraph text={description} /> */}
                <h2 className={styles.description} style={{ height }} id={id} />

                <div className={`
                  ${styles.greenLine}
                  ${isGreenLineActive && styles.active}
                `}>
                  <Shadow
                    count={15}
                    classNames={styles.shadowLeft}
                  />

                  <Shadow
                    count={15}
                    classNames={styles.shadowRight}
                  />
                </div>
              </div>
            </div> :
            <div
              key={idx}
              className={styles.featureCard}
            >
              <div className={styles.lottiContainer}>
                <lottie-player
                  src={animationPath}
                  background="transparent"
                  speed="1"
                  autoplay
                />
              </div>
              <div className={styles.titleContainer}>
                {/* <Title text={title} size='29px' /> */}
                <div className={styles.mainTitle} id={titleId} />
              </div>
              {/* <Paragraph text={description} /> */}
              <h2 className={styles.description} style={{ height }} id={id} />

              <div className={`
                ${styles.greenLine}
                ${isGreenLineActive && styles.active}
              `}>
                <Shadow
                  count={15}
                  classNames={styles.shadowLeft}
                />

                <Shadow
                  count={15}
                  classNames={styles.shadowRight}
                />
              </div>
            </div>
          })
        }

        <div className={styles.lastCard}>
          <div className={styles.mainTitle} id='mainTitle-4' />
          {/* <Title text='Признание' size='28px' /> */}
          <div className={styles.paragraph}>
            {/* <Paragraph text='Вас удивят наша преданность, высокое качество и полученные результаты.' /> */}
            <h2 className={styles.description} style={{ height: '100px' }} id='description-4' />
          </div>
          {/* <Button classNames={styles.button}>
            Запустить кампанию
          </Button> */}
        </div>
      </div>
    </>
  );
}