import React, { useState, useEffect } from 'react';
import * as styles from './loadingPage.module.css';

export default function LoadingPage({ toggleLoading }) {
  const [progress, updateProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      updateProgress(prev => {
        if (prev < 100) {
          return ++prev
        } else {
          clearInterval(interval);
          toggleLoading(false);
        }
      });
    }, 30);
  }, []);

  return (
    <div className={styles.loadingPageContainer}>
      <div className={styles.loadingOuter}>
        <div className={styles.loadingInner} style={{ width: `${progress}%` }}/>
      </div>

      <div className={styles.percentageContainer}>
        <span>loading</span>
        <div className={styles.percentage}>{progress > 0 ? progress : 100}%</div>
      </div>
    </div>
  );
}