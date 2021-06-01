import React from 'react';

import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';
import Shadow from '../Shadow/Shadow';

import success from '../../images/success.svg';
import * as styles from './thumb.module.css';

export default function Thumb({ toggleFormState }) {
  const closeThumb = () => {
    toggleFormState(false);
  };

  return (
    <div className={styles.thumbWrapper}>
      <div className={styles.thumbContent}>
        <img src={success} alt='success'/>

        <div className={styles.thumbTitle}>
          <Title
            text='ваша заявка успешно отправлена'
          />
        </div>

        <div className={styles.thumbParagraph}>
          <Paragraph
            text='В ближайшее время с&nbsp;Вами&nbsp;свяжется наш менеджер.'
          />
        </div>
        <Button
          onClick={closeThumb}
          classNames={styles.thumbButton}
        >
          ок
        </Button>

        <div className={`
          ${styles.greenLine}
        `}>
          <Shadow
            count={15}
            classNames={styles.shadowLeft}
          />

          <Shadow
            count={15}
            classNames={styles.shadowRight}
          />
        </div>
      </div>
    </div>
  );
}