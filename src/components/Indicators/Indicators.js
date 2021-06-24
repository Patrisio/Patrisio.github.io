import React, { useRef, useEffect, useState, useContext } from 'react';
import * as styles from './indicators.module.css';
import dotsBg from '../../images/dots.svg';
import { Waypoint } from 'react-waypoint';
import move from '../../utils/move';
import Incrementor from '../Incrementor/Incrementor';
import { Context } from '../../context';

export default function Indicators({ id, isMobileDevice }) {
  const [isActive, toggleActive] = useState(false);
  const { lang, t } = useContext(Context);
  let card1 = useRef(null);
  let card2 = useRef(null);;
  let card3 = useRef(null);;
  let card4 = useRef(null);;
  const background = useRef(null);
  const count = useRef(null);

  const indicators = [
    {
      count: 23,
      text: t('indicators|депозитов ежемесячно', lang),
      ref: card1,
      className: styles.dummy1
    },
    {
      count: 70,
      text: t('indicators|СТРАН МИРА', lang),
      ref: card2,
      className: styles.dummy2
    },
    {
      count: 50,
      text: t('indicators|баеров в&nbsp;штате', lang),
      ref: card3,
      className: styles.dummy3
    },
    {
      count: 5,
      text: t('indicators|лет на&nbsp;рынке', lang),
      ref: card4,
      className: styles.dummy4
    },
  ];

  const initAnimation = () => {
    if (!isActive) {
      card1.current.flipTo({to: 23});
      card2.current.flipTo({to: 70});
      card3.current.flipTo({to: 55});
      card4.current.flipTo({to: 5});
  
      toggleActive(true);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', (e) => move(e, background.current));

    const module = typeof window !== `undefined` ? require("../../utils/number-flip") : null;

    if (module) {
      const { Flip } = module;
      console.log(document.querySelector(`.${styles.dummy1}`));

      card1.current = new Flip({
        node: document.querySelector(`.${styles.dummy1}`),
        from: 0,
        duration: 4
      })
      card2.current = new Flip({
        node: document.querySelector(`.${styles.dummy2}`),
        from: 0,
        // to: 70,
        duration: 4
      })
      card3.current = new Flip({
        node: document.querySelector(`.${styles.dummy3}`),
        from: 0,
        // to: 50,
        duration: 4
      })
      card4.current = new Flip({
        node: document.querySelector(`.${styles.dummy4}`),
        from: 0,
        // to: 5,
        duration: 4
      })
    }
  }, []);

  return (
    <>
      <Waypoint
        onEnter={initAnimation}
        bottomOffset={isMobileDevice ? 150 : 250}
      />

      <div className={styles.indicatorsContainer} id={id}>
        <div className={styles.circlesContainer}>
          <lottie-player
            src="https://assets6.lottiefiles.com/private_files/lf30_oyf1c3dv.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          />
        </div>

        <div className={styles.dotsBg} ref={background}>
          <img src={dotsBg} alt='dot'/>
        </div>

        {
          indicators.map((item, idx) => {
            return (
              <div
                key={idx}
                className={styles.card}
              >
                <div
                  ref={count}
                  className={`
                    ${item.className}
                    ${styles.count}
                  `}
                />
                {/* <Incrementor
                  isActivate={isActive}
                  classNames={item.className}
                  count={item.count}
                /> */}
                <p
                  className={`
                    ${styles.description}
                    ${idx === 0 && styles.pseudo}
                  `}
                  dangerouslySetInnerHTML={{__html: item.text}}
                />
              </div>
            );
          })
        }
      </div>
    </>
  );
}