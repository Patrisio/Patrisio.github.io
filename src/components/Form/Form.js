import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';
import Input from '../Input/Input';
import Button from '../Button/Button';

import type from '../../utils/type';
import * as styles from './form.module.css';

export default function Form({ id, isMobileDevice }) {
  const [isActive, toggleActive] = useState(false);

  return (
    <>
     <Waypoint
        onEnter={() => {
          if (!isActive) {
            type(
              `<div class='${styles.mainTitle}'>Хочешь присоединиться к лидерам рынка?</div>`,
              0, false, '', 'form-1', 25);
            type(
              `<h2 class='${styles.description}'>Для нас это не тупо бабки.</h2>`,
              0, false, '', 'form-2', 50);
          }
        }}
      />

      <div className={styles.formContainer} id={id}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            {/* <Title
              text='Хочешь присоединиться к лидерам рынка?'
            /> */}
            <div
              className={`
                ${styles.mainTitle}
                ${styles.form1}
              `}
              id='form-1'
            />
          </div>
          <div className={styles.paragraph}>
            {/* <Paragraph
              text='Для нас это не тупо бабки.'
              size='16px'
            /> */}
            <h2
              className={`
                ${styles.description}
                ${styles.form2}
              `}
              id='form-2'
            />
          </div>
        </div>

        <Waypoint
          onEnter={() => {
            toggleActive(true);
          }}
          bottomOffset={isMobileDevice ? 0 : 500}
        />

      <div className={`
        ${styles.formContent}
        ${isActive && styles.active}
      `}>
        <div className={styles.formPart}>
          <Input
            placeholder='Введите ваше имя'
            label='Имя'
            classNames={styles.inputMobile}
          />
          <Input
            placeholder='Введите ваш e-mail'
            label='E-Mail'
            type='email'
            classNames={styles.inputMobile}
          />
          <Input
            placeholder='Номер Телефона'
            label='Введите ваш номер телефона'
            type='tel'
            classNames={styles.inputMobile}
          />
        </div>

        <div className={styles.formPart}>
          <Input
            placeholder='Введите название компании'
            label='Компания'
            classNames={styles.inputMobile}
          />
          <Input
            placeholder='Введите вашу страну'
            label='Страна'
            classNames={styles.inputMobile}
          />
          <Input
            placeholder='Введите источники трафика'
            label='Предпочтительный Источник Трафика'
            classNames={styles.inputMobile}
          />
        </div>
      </div>
      
        <Button
          classNames={`
            ${styles.button}
            ${isActive && styles.activeButton}
          `}
        >
          Отправить
        </Button>
      </div>
    </>
  );
}