import React from 'React';
import * as styles from './title.module.css';

export default function Title({ text, size }) {
  return (
    <h2
      className={styles.title}
      style={{ fontSize: size }}
    >
      { text }
    </h2>
  );
}