import React from 'react';
import * as styles from './input.module.css';

export default function Input({ 
  placeholder,
  label,
  type = 'text',
  classNames,
  onChange,
  required,
  hasError
}) {
  return (
    <div className={styles.inputContainer} data-required={required}>
      <label className={styles.label}>{ label }</label>
      <input
        className={`${styles.input} ${classNames} ${hasError && styles.error}`}
        placeholder={placeholder}
        type={type}
        required={required}
        onChange={onChange}
      />
    </div>
  );
}