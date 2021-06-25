import React, { useContext } from 'react';

import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';
import Shadow from '../Shadow/Shadow';

import success from '../../images/success.svg';
import * as styles from './thumb.module.css';
import { Context } from '../../context';

export default function Thumb({ toggleFormState }) {
  const { lang, t } = useContext(Context);

  const closeThumb = () => {
    toggleFormState(false);
  };

  return (
    <div className={styles.thumbWrapper}>
      <div className={styles.thumbContent}>
        <img src={success} alt='success'/>

        <div className={styles.thumbTitle}>
          <Title
            text={t('formResponse|ваша заявка успешно отправлена', lang)}
          />
        </div>

        <div className={styles.thumbParagraph}>
          <Paragraph
            text={t('formResponse|В ближайшее время с&nbsp;Вами&nbsp;свяжется наш менеджер.', lang)}
          />
        </div>
        <Button
          onClick={closeThumb}
          classNames={styles.thumbButton}
        >
          {t('formResponse|OK', lang)}
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