import React, { useState, useEffect, useContext } from 'react';
import { Waypoint } from 'react-waypoint';

import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';
import Shadow from '../Shadow/Shadow';
import { Context } from '../../context';

import type from '../../utils/type';
import * as styles from './features.module.css';

export default function Features({ isMobileDevice }) {
  const [isGreenLineActive, toggleLine] = useState(false);
  const { lang, t } = useContext(Context);
  const features = [
    {
      animationPath: 'https://assets2.lottiefiles.com/packages/lf20_l9nasddg.json',
      title: t('features|КРЕАТИВ', lang),
      description: t('features|Креативный отдел знает, с помощью каких механик привлечь и зацепить вашу целевую аудиторию.', lang),
      id: 'description-1',
      titleId: 'mainTitle-1',
      height: '100px',
    },
    {
      animationPath: 'https://assets3.lottiefiles.com/packages/lf20_kmgvswh7.json',
      title: t('features|АНТИФРОД', lang),
      description: t('features|Собственная антифрод система защищает наших клиентов от мошенничества и некачественного трафика.', lang),
      id: 'description-2',
      titleId: 'mainTitle-2',
      height: '150px',
    },
    {
      animationPath: 'https://assets5.lottiefiles.com/packages/lf20_1xa2gxaj.json',
      title: t('features|АВТОМАТИЗАЦИЯ', lang),
      description: t('features|Технологии по оптимизации трафика позволяют получить максимальную прибыль от инвестиций.', lang),
      id: 'description-3',
      titleId: 'mainTitle-3',
      height: '125px',
    },
  ];

  const runTypes = () => {
    type(`<h2 class='${styles.description}'>${t('features|Креативный отдел знает, с помощью каких механик привлечь и зацепить вашу целевую аудиторию.', lang)}</h2>`, 0, false, '', 'description-1', 20);
    type(`<h2 class='${styles.description}'>${t('features|Собственная антифрод система защищает наших клиентов от мошенничества и некачественного трафика.', lang)}</h2>`, 0, false, '', 'description-2', 20);
    type(`<h2 class='${styles.description}'>${t('features|Технологии по оптимизации трафика позволяют получить максимальную прибыль от инвестиций.', lang)}</h2>`, 0, false, '', 'description-3', 20);
    // type(`<h2 class='${styles.description}'>Мы команда единомышленников. Каждый из нас заряжен на результат и хочет достичь больших целей.</h2>`, 0, false, '', 'description-4', 20);
    
    type(`<div class='${styles.mainTitle}'>${t('features|КРЕАТИВ', lang)}</div>`, 0, false, '', 'mainTitle-1', 80);
    type(`<div class='${styles.mainTitle}'>${t('features|АНТИФРОД', lang)}</div>`, 0, false, '', 'mainTitle-2', 80);
    type(`<div class='${styles.mainTitle}'>${t('features|АВТОМАТИЗАЦИЯ', lang)}</div>`, 0, false, '', 'mainTitle-3', 80);
    // type(`<div class='${styles.mainTitle}'>syndicate family</div>`, 0, false, '', 'mainTitle-4', 80);

    toggleLine(true);
  };

  const initAnimation = () => {
    if (!isGreenLineActive) {
      runTypes();
    }
  };

  useEffect(() => {
    runTypes();
  }, [lang]);

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
          features.map(({ animationPath, id, titleId, height }, idx) => {
            return (
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
                  <div className={styles.mainTitle} id={titleId} />
                </div>
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
            )
          })
        }

        {/* <div className={styles.lastCard}>
          <div className={styles.mainTitle} id='mainTitle-4' />
          <div className={styles.paragraph}>
            <h2 className={styles.description} style={{ height: '100px' }} id='description-4' />
          </div>
        </div> */}
      </div>
    </>
  );
}