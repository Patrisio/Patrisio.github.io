import React from 'react';
import * as styles from './shadow.module.css';

export default function Shadow({ count, classNames }) {
  const shadows = [];

  for (let i = 0; i < count; i++) {
    shadows.push(i);
  }

  return shadows.map((shadow) => (
    <div
      key={shadow}
      className={`
        ${styles.shadow} 
        ${classNames}
      `}
    />
  ))
}