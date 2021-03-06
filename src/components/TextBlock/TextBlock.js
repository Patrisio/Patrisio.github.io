import React from 'react';

import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';

import * as styles from './textBlock.module.css';

export default function TextBlock({ children, flex, classNames }) {
  return (
    <div
      className={`
        ${flex ? styles.flexTextBlockContainer : styles.textBlockContainer}
        ${classNames}
      `}
    >
      {children}
    </div>
  );
}