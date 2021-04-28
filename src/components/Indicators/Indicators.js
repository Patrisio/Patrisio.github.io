import React, { useRef, useEffect } from 'react';

import * as styles from './indicators.module.css';
import { Flip } from '../../utils/number-flip';
import dotsBg from '../../images/dots.svg';
import { Waypoint } from 'react-waypoint';
import move from '../../utils/move';

export default function Indicators({ id }) {
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);
  const background = useRef(null);

  const indicators = [
    {
      count: 50,
      text: 'УСТАНОВОК В&nbsp;ГОД',
      ref: card1,
      className: styles.dummy1
    },
    {
      count: 70,
      text: 'СТРАН МИРА',
      ref: card2,
      className: styles.dummy2
    },
    {
      count: 50,
      text: 'баеров в&nbsp;штате',
      ref: card3,
      className: styles.dummy3
    },
    {
      count: '05',
      text: 'лет на&nbsp;рынке',
      ref: card4,
      className: styles.dummy4
    },
  ];

  const initAnimation = () => {
    new Flip({
      node: document.querySelector(`.${styles.dummy1}`),
      from: 99,
      to: 50,
      duration: 4
    })
    new Flip({
      node: document.querySelector(`.${styles.dummy2}`),
      from: 99,
      to: 70,
      duration: 4
    })
    new Flip({
      node: document.querySelector(`.${styles.dummy3}`),
      from: 99,
      to: 50,
      duration: 4
    })
    new Flip({
      node: document.querySelector(`.${styles.dummy4}`),
      from: 99,
      to: 5,
      duration: 4
    })
  };

  useEffect(() => {
    window.addEventListener('mousemove', (e) => move(e, background.current));
  }, []);

  return (
    <>
      <Waypoint
        onEnter={initAnimation}
        bottomOffset={500}
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
                  className={`
                    ${item.className}
                    ${styles.count}
                  `}
                />
                <p className={styles.description} dangerouslySetInnerHTML={{__html: item.text}} />
              </div>
            );
          })
        }
      </div>
    </>
  );
}