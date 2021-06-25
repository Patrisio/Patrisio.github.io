import React, { useEffect, useState, useRef } from 'react';

import client1 from '../../images/client1.svg';
import client2 from '../../images/client2.svg';
import client3 from '../../images/client3.svg';
import client6 from '../../images/client6.svg';
import client13 from '../../images/client13.svg';
import client1_1 from '../../images/client1_1.svg';
import client1_3 from '../../images/client1_3.svg';
import client1_4 from '../../images/client1_4.svg';
import client1_5 from '../../images/joom.svg';
import client1_6 from '../../images/joom1.svg';
import client1_7 from '../../images/gett.svg';
import client1_8 from '../../images/igg.svg';

import * as styles from './infiniteSlider.module.css';

let positionX = 0;

export default function InfiniteSlider() {
  const innerSlider = useRef(null);
  const slides = [
    client1,
    client2,
    client3,
    client6,
    client13,
    client1_1,
    client1_3,
    client1_4,
    client1_5,
    client1_6,
    client1_7,
    client1_8,
  ];

  const [slidesList, updateSlides] = useState(slides);

  useEffect(() => {
    setInterval(() => {
      positionX--;
      const innerSliderElement = innerSlider.current;

      if (innerSliderElement) {
        innerSliderElement.style.transform = `translateX(${positionX}px)`;
      }

      if (positionX % 1000 === 0) {
        updateSlides(prev => {
          const copy = prev.slice();
          const removedSlides = copy.slice(0, 10);
          
          copy.push(...removedSlides);

          return copy;
        });
      }
    }, 15);
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
                data-id={idx}
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