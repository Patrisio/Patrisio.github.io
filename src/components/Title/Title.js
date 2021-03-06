import React from 'react';
import * as styles from './title.module.css';

export default function Title({ text, size }) {
  return (
    <h2
      className={styles.title}
      style={{ fontSize: size }}
      dangerouslySetInnerHTML={{__html: text}}
    />
  );
}