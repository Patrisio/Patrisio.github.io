import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Thumb from '../Thumb/Thumb';

import type from '../../utils/type';
import * as styles from './form.module.css';

export default function Form({ id, isMobileDevice }) {
  const [isActive, toggleActive] = useState(false);
  const [isDataFormSent, toggleFormState] = useState(false);
  const [formData, updateFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    skype: '',
    message: '',
  });

  const getFieldName = (fieldName) => {
    switch (fieldName) {
      case 'name':
        return 'Имя';
      case 'email':
        return 'E-mail';
      case 'telegram':
        return 'Телеграм';
      case 'skype':
        return 'Skype';
      case 'message':
        return 'Сообщение';
    }
  };

  const fillFormData = (e, fieldName) => updateFormData(prev => ({ ...prev, [fieldName]: e.target.value }));
  const sendFormData = () => {
    const formDataEntities = Object.entries(formData);
    const formattedFormData = formDataEntities.map(entity => `${getFieldName(entity[0])}: ${entity[1]} |`).join(' ');

    const token = '1817984401:AAFHuROfIEIZcxLFgTZeYNO4EEhjdd4Dd2Y';
    const chatId = '-1001286048560';

    fetch(`https://api.telegram.org/bot${token}/sendMessage?text=${formattedFormData}&chat_id=${chatId}`);
    toggleFormState(true);;
  };
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
    {
      isDataFormSent ?
      <Thumb
        toggleFormState={toggleFormState}
      /> :
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
            onChange={(e) => fillFormData(e, 'name')}
          />
          <Input
            placeholder='Введите ваш e-mail'
            label='E-Mail'
            type='email'
            classNames={styles.inputMobile}
            onChange={(e) => fillFormData(e, 'email')}
          />
          <Input
            placeholder='Введите ваш telegram'
            label='Telegram'
            classNames={styles.inputMobile}
            onChange={(e) => fillFormData(e, 'telegram')}
          />
          <Input
            placeholder='Введите ваш skype'
            label='Skype'
            classNames={styles.inputMobile}
            onChange={(e) => fillFormData(e, 'skype')}
          />
        </div>

        <div className={`
          ${styles.formPart}
          ${styles.formPartFlex}
        `}>
          <Input
            placeholder='Введите  ваше сообщение...'
            label='Сообщение'
            classNames={styles.inputMobile}
            onChange={(e) => fillFormData(e, 'message')}
          />
          
          <Button
            classNames={`
              ${styles.button}
              ${isActive && styles.activeButton}
              ${styles.buttonBottom}
            `}
            onClick={sendFormData}
          >
            Отправить
          </Button>
        </div>
      </div>
      </div>
      }
    </>
  );
}