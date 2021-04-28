import React from 'react';
import * as styles from './input.module.css';

export default function Input({ 
  placeholder,
  label,
  type = 'text',
  classNames
}) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{ label }</label>
      <input
        className={`${styles.input} ${classNames}`}
        placeholder={placeholder}
        type={type}
        required
      />
    </div>
  );
}