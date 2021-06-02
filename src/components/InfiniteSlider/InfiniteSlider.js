import React, { useEffect, useState, useRef } from 'react';

import client1 from '../../images/client1.svg';
import client2 from '../../images/client2.svg';
import client3 from '../../images/client3.svg';
import client4 from '../../images/client4.svg';
import client5 from '../../images/client5.svg';
import client6 from '../../images/client6.svg';
import client7 from '../../images/client7.svg';
import client8 from '../../images/client8.svg';
import client9 from '../../images/client9.svg';
import client10 from '../../images/client10.svg';
import client11 from '../../images/client11.svg';
import client12 from '../../images/client12.svg';
import client13 from '../../images/client13.svg';
import client1_1 from '../../images/client1_1.svg';
import client1_2 from '../../images/client1_2.svg';
import client1_3 from '../../images/client1_3.svg';
import client1_4 from '../../images/client1_4.svg';

import * as styles from './infiniteSlider.module.css';

let positionX = 0;

export default function InfiniteSlider() {
  const innerSlider = useRef(null);
  const slides = [
    client1,
    client2,
    client3,
    // client4,
    // client5,
    client6,
    // client7,
    // client8,
    // client9,
    // client10,
    // client11,
    client12,
    client13,
    client1_1,
    client1_3,
    client1_4,
  ];

  const [slidesList, updateSlides] = useState(slides);

  useEffect(() => {
    setInterval(() => {
      positionX--;
      innerSlider.current.style.transform = `translateX(${positionX}px)`;

      if (positionX % 2000 === 0) {
        updateSlides(prev => {
          const copy = prev.slice();
          const removedSlides = copy.slice(0, 10);
          
          copy.push(...removedSlides);

          return copy;
        });
      }
    }, 5);
  }, []);

  return (
    <div className={styles.clientsContainer}>
      <div
        className={styles.flex}
        ref={innerSlider}
      >
        {
          slidesList.map((imgPath, idx) => (
            <div
              key={idx}
              className={styles.clientLogoContainer}
            >
              <img
                src={imgPath}
                alt='client-logo'
                className={styles.image}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}