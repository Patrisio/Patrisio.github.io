import React from 'react';
import * as styles from './paragraph.module.css';

export default function Paragraph({ text, size }) {
  return (
    <h2
      className={styles.paragraph}
      style={{ fontSize: size }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}