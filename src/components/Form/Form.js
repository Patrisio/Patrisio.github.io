import React, { useState, useEffect, useContext } from 'react';
import { Waypoint } from 'react-waypoint';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Thumb from '../Thumb/Thumb';

import type from '../../utils/type';
import * as styles from './form.module.css';
import { Context } from '../../context';

export default function Form({ id, isMobileDevice }) {
  const initialFormState = {
    name: {
      value: '',
      required: true,
      error: false,
    },
    email: {
      value: '',
      required: true,
      error: false,
    },
    message: {
      value: '',
      required: false,
      error: false,
    },
  };
  const [isActive, toggleActive] = useState(false);
  const [isDataFormSent, toggleFormState] = useState(false);
  const [formData, updateFormData] = useState(initialFormState);
  const { lang, t } = useContext(Context);

  const getFieldName = (fieldName) => {
    switch (fieldName) {
      case 'name':
        return 'Имя';
      case 'email':
        return 'E-mail/Телеграм/Skype';
      case 'telegram':
        return 'Телеграм';
      case 'skype':
        return 'Skype';
      case 'message':
        return 'Сообщение';
    }
  };

  const fillFormData = (e, fieldName) => updateFormData(prev => {
    const prevState = prev[fieldName];
    return {
      ...prev,
      [fieldName]: {
        ...prevState,
        value: e.target.value
      },
    };
  });

  const checkFormFields = () => {
    let updatedState = {};
    const formFields = Object.keys(formData).slice();
    let hasErrors = false;
    formFields.forEach((fieldName) => {
      const fieldData = formData[fieldName];

      if (fieldData.value.length === 0 && fieldData.required) {
        hasErrors = true;
        updatedState[fieldName] = {
          ...fieldData,
          error: true,
        };
      } else {
        updatedState[fieldName] = {
          ...fieldData,
          error: false,
        };
      }
    });

    return {
      hasErrors,
      updatedState,
    };
  };

  const sendFormData = () => {
    const formDataEntities = Object.entries(formData);
    console.log(formData);
    const token = '1817984401:AAFHuROfIEIZcxLFgTZeYNO4EEhjdd4Dd2Y';
    const chatId = '-1001286048560';

    const { hasErrors, updatedState } = checkFormFields();

    if (hasErrors) {
      updateFormData(updatedState);
      return;
    }

    const newObj = {};
    formDataEntities.forEach((entity) => {
      const key = entity[0];
      const value = entity[1];
      newObj[key] = value.value;
    });
    const formattedFormData = Object.entries(newObj).map(entity => `${getFieldName(entity[0])}: ${entity[1]} |`).join(' ');
    console.log(formattedFormData);
    fetch(`https://api.telegram.org/bot${token}/sendMessage?text=${formattedFormData}&chat_id=${chatId}`);
    toggleFormState(true);
    updateFormData(initialFormState);
  };

  useEffect(() => {
    if (!isDataFormSent) {
      type(
        `<div class='${styles.mainTitle}'>${t('form|Интересно?', lang)}</div>`,
        0, false, '', 'form-1', 25);
      type(
        `<div class='${styles.mainTitle}'>${t('form|Свяжитесь с нами', lang)}</div>`,
        0, false, '', 'form-2', 25);
    }
  }, [lang]);

  return (
    <>
      <Waypoint
        onEnter={() => {
          if (!isActive) {
            type(
              `<div class='${styles.mainTitle}'>${t('form|Интересно?', lang)}</div>`,
              0, false, '', 'form-1', 25);
            type(
              `<div class='${styles.mainTitle}'>${t('form|Свяжитесь с нами', lang)}</div>`,
              0, false, '', 'form-2', 25);
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
            <div
              className={`
                ${styles.mainTitle}
                ${styles.form1}
              `}
              id='form-1'
            />
             <div
              className={`
                ${styles.mainTitle}
                ${styles.form1}
              `}
              id='form-2'
            />
          </div>
          <div className={styles.paragraph}>
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
            placeholder={t('form|Введите ваше имя', lang)}
            label={t('form|Имя', lang)}
            classNames={styles.inputMobile}
            onChange={(e) => fillFormData(e, 'name')}
            required
            hasError={formData.name.error}
          />
          <Input
            placeholder={t('form|Введите ваш E-mail / Telegram / Skype', lang)}
            label='E-mail / Telegram / Skype'
            type='email'
            classNames={styles.inputMobile}
            onChange={(e) => fillFormData(e, 'email')}
            required
            hasError={formData.email.error}
          />
        </div>

        <div className={`
          ${styles.formPart}
          ${styles.formPartFlex}
        `}>
          <Input
            placeholder={t('form|Введите  ваше сообщение...', lang)}
            label={t('form|Сообщение', lang)}
            classNames={styles.inputMobile}
            onChange={(e) => fillFormData(e, 'message')}
            hasError={formData.message.error}
          />

          <Input
            classNames={`
              ${styles.inputMobile}
              ${styles.inputHeight}
            `}
            disabled
          />
          
          <Button
            classNames={`
              ${styles.button}
              ${isActive && styles.activeButton}
              ${styles.buttonBottom}
            `}
            onClick={sendFormData}
          >
            {t('form|Отправить', lang)}
          </Button>
        </div>
      </div>
      </div>
      }
    </>
  );
}