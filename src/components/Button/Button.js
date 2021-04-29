import React from 'react';
import * as styles from './button.module.css';
import Shadow from '../Shadow/Shadow';

export default function Button({ children, classNames, onClick }) {
  return (
    <a
      href='#form'
      onClick={onClick}
      className={styles.link}
    >
      <div
        className={`
          ${styles.buttonContainer}
          ${classNames}
        `}
      >
        <div className={`${styles.borderLeft} ${styles.border}`} />
        <div className={`${styles.borderRight} ${styles.border}`} />
        <div className={`${styles.borderTop} ${styles.border}`} />
        <div className={`${styles.borderBottom} ${styles.border}`} />

        <Shadow
          count={15}
          classNames={styles.shadow}
        />

        <div className={styles.buttonTitle}>
          { children }
        </div>
      </div>
    </a>
  );
}