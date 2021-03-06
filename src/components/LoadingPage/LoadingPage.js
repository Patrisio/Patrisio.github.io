import React, { useState, useEffect } from 'react';
import * as styles from './loadingPage.module.css';
import logo from "../../images/logo.svg";

export default function LoadingPage({ toggleLoading, classNames }) {
  const [progress, updateProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      updateProgress(prev => {
        if (prev < 100) {
          return ++prev;
        } else {
          clearInterval(interval);
          toggleLoading(false);
          document.body.style.overflow = 'auto';
          window.scroll(0, 0);
        }
      });
    }, 30);
  }, []);

  return (
    <div className={`
      ${styles.loadingPageContainer}
      ${classNames}
    `}>
      <div className={styles.logoContainer}>
        <img src={logo} alt='logo-syndicate'/>
      </div>

      <div className={styles.loadingOuter}>
        <div className={styles.loadingInner} style={{ width: `${progress}%` }}/>
      </div>

      <div className={styles.percentageContainer}>
        <span>loading</span>
        <div className={styles.percentage}>{progress < 100 ? progress : 100}%</div>
      </div>
    </div>
  );
}