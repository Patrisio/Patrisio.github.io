import React, { useRef, useEffect, useContext } from 'react';

import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';

import * as styles from './mainScreen.module.css';
import circle1 from '../../images/1.svg';
import circle2 from '../../images/2.svg';
import circle3 from '../../images/3.svg';
import dotsBg from '../../images/dots.svg';
import { Context } from '../../context';

import type from '../../utils/type';
import move from '../../utils/move';

let isLangChanged = false;

export default function MainScreen() {
  const { lang, t } = useContext(Context);

  const circleOne = useRef(null);
  const circleTwo = useRef(null);
  const circleThree = useRef(null);
  const background = useRef(null);


  useEffect(() => {
    setTimeout(() => {
      type(`<h2 class='${styles.mainTitleType}'>${t('mainScreen|Топовая команда медиабаинга', lang)}</h2>`, 0, false, '', 'mainTitle');
    }, isLangChanged ? 0 : 4000);

    setTimeout(() => {
      type(`User Acquisition `, 0, false, '', 'supTitle');
    }, isLangChanged ? 0 : 3000);
    
    isLangChanged= true;
  }, [lang]);

  useEffect(() => {
    window.addEventListener('mousemove', (e) => move(e, background.current));
  }, []);

  return (
    <div className={styles.mainScreenContainer}>
      <div style={{ color: '#fff !important' }} id='typewriter'>
      </div>
      <h5 className={styles.supTitle} id='supTitle' />
      <div className={styles.mainTitle} id='mainTitle' />

      <div className={styles.features}>
        <div className={styles.title}>
          <Title text='key features' size='29px' />
        </div>
        <div className={styles.description}>
          <Paragraph text={t('mainScreen|Крупнейшее Performance marketing агентство в Европе, по версии Apps-flyer', lang)} />
        </div>
      </div>

      {/* <div className={styles.runCampaign}>
        <Button classNames={styles.button}>
          Запустить кампанию
        </Button>
      </div> */}

      <div className={styles.dotsBg}>
        <img src={dotsBg} alt='dot' ref={background}/>
      </div>

      <div className={styles.circlesContainer}>
        <div className={styles.circlesShadow} />
        <lottie-player
          src="https://assets6.lottiefiles.com/private_files/lf30_oyf1c3dv.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        />
      </div>
    </div>
  );
}