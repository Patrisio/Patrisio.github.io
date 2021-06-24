import React, { useEffect, useState } from 'react'
import * as styles from './incrementor.module.css';


export default function Incrementor({ classNames, count, isActivate }) {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    if (isActivate) {
      const countInterval = setInterval(() => {
        setCurrentCount(prev => {
          if (prev + 1 === count) {
            clearInterval(countInterval);
          }
          if (prev + 1 <= 9) {
            return `0${++prev}`;
          }
          return ++prev;
        });
  
      }, 60);
    }
  }, [isActivate]);

  return (
    <div
      className={`
        ${classNames}
        ${styles.count}
      `}
    >
      { currentCount }
    </div>
  );
}