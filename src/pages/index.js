import React, { useState, useEffect } from "react";
// import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl';
import Header from '../components/Header/Header';
import MainScreen from '../components/MainScreen/MainScreen';
import Indicators from '../components/Indicators/Indicators';
import TextBlock from '../components/TextBlock/TextBlock';
import Title from '../components/Title/Title';
import Paragraph from '../components/Paragraph/Paragraph';
import Sources from '../components/Sources/Sources';
import Testimonials from '../components/Testimonials/Testimonials';
import Form from '../components/Form/Form';
import Footer from '../components/Footer/Footer';
import InfiniteSlider from '../components/InfiniteSlider/InfiniteSlider';
import LoadingPage from '../components/LoadingPage/LoadingPage';
import { Context } from '../context';
import Charts from '../components/Charts/Charts';
import Features from '../components/Features/Features';
import * as styles from './index.module.css';
import { Waypoint } from 'react-waypoint';
import type from '../utils/type';
import { translations } from '../translations';

import { Helmet } from "react-helmet";
import 'reset-css';

const IndexPage = () => {
  const [lang, changeLang] = useState('ru');
  const [isActive, toggleActive] = useState(false);
  const [isLoading, toggleLoading] = useState(true);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const t = (phrase, lang) => {
    const [prefix, phrasePart] = phrase.split('|');
    console.log(prefix);
    return translations[prefix].find(phrase => phrase.ru === phrasePart)[lang];
  };

  useEffect(() => {
    window.version = '1.0.16';
    const module = typeof window !== `undefined` ? require("../utils/detector") : null;
    const detect = module.default;

    if (detect.mobile() || detect.tablet() || detect.phone()) {
      setIsMobileDevice(true);
    }
  }, []);

  useEffect(() => {
    type(
      `<div class='${styles.titleFlex}'>${t('infiniteSlider|наши клиенты Нереально амбициозные', lang)}</div>`,
      0, false, '', 'index-2', 20);
  }, [lang])

  return (
    <Context.Provider value={{ lang, changeLang, t }}>
    <Helmet>
      <title>SYNDICATE GROUP</title>
    </Helmet>

      <main style={{ fontFamily: '"JetBrains Mono", monospace', background: '#0C1201' }}>
        {
          <>
            <LoadingPage
              toggleLoading={toggleLoading}
              classNames={isLoading ? styles.activeLoadingPage : styles.hiddenLoadingPage}
            />
            <>
              <div style={{ maxWidth: '1264px', margin: '0 auto' }}>
                <Helmet>
                  <link rel="preconnect" href="https://fonts.gstatic.com" />
                  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
                  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                  <script defer src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"></script>
                </Helmet>
                <Header />
                <MainScreen />
                <Indicators id='aboutus' isMobileDevice={isMobileDevice} />

                <div className={styles.textBlockContainer}>
                  <TextBlock>
                    <div className={styles.titleContainer}>
                      <Title
                        text={t('clients|Клиенты - наше все', lang)}
                      />
                    </div>
                    <div className={styles.paragraphContainer} id='ourpros'>
                      <Paragraph text={t('clients|Наша Главная цель - это привлекать новых пользователей для наших клиентов, которые окупятся в максимально короткий срок.', lang)} />
                      <Paragraph text={t('clients|Мы ценим долгосрочное сотрудничество и стремимся стать стратегическим партнером для каждого из наших клиентов.', lang)} />
                    </div>
                  </TextBlock>
                </div>

                <Features isMobileDevice={isMobileDevice} />

                {/* <Waypoint
                  onEnter={() => {
                    if (!isActive) {
                      const speed = isMobileDevice ? 10 : 20;
                      type(
                        `<h2 class='${styles.description}'>Мы готовы обсуждать сотрудничество с целыми командами, брать их под свое крыло и давать всю инфраструктуру для того, чтобы делать х10 от того, что они делают сейчас.</h2>`,
                        0, false, '', 'index-1', speed);
                    }
                  }}
                /> */}
                {/* <TextBlock>
                  <div className={styles.paragraph2}>
                    <h2 className={styles.description} style={{ height: '75px' }} id='index-1' />
                  </div>
                </TextBlock> */}
              </div>

              <Waypoint
                onEnter={() => {
                  if (!isActive) {
                    type(
                      `<div class='${styles.titleFlex}'>${t('infiniteSlider|наши клиенты Нереально амбициозные', lang)}</div>`,
                      0, false, '', 'index-2', 20);
                    // type(
                    //   `<h2 class='${styles.paragraphFlex}'>Мы отслеживаем более 1 миллиона коммерческих кликов через наших клиентов ежемесячно.</h2>`,
                    //   0, false, '', 'index-3', 20); 
                  }
                }}
              />
              <TextBlock flex>
                <div className={styles.titleFlex} id='clients'>
                  <div className={styles.titleFlex} id='index-2' />
                </div>
                {/* <div className={styles.paragraphFlex}>
                  <h2 className={styles.paragraphFlex} id='index-3' />
                </div> */}
              </TextBlock>

              <InfiniteSlider />

              {/* <Sources/> */}

              <Waypoint
                onEnter={() => {
                  toggleActive(true);
                }}
                bottomOffset={isMobileDevice ? 0 : 150}
              />
                <TextBlock
                  classNames={styles.wrapperTextBlock}
                >
                  <div className={`
                    ${styles.title3}
                    ${isActive && styles.active}
                  `}>
                    <Title
                      text={t('partners|Партнерство с&nbsp;независимыми арбитражными командами', lang)}
                    />
                  </div>
                  <div className={`
                    ${styles.paragraph3}
                    ${isActive && styles.active}
                  `}>
                    <Paragraph text={t('partners|Мы готовы обсуждать сотрудничество с целыми командами, брать их под свое крыло и давать всю инфраструктуру для того, чтобы делать х10 от того, что они делают сейчас.', lang)} />
                  </div>
                  <div className={styles.mobileParagraphs}>
                    <Paragraph text={t('partners|Мы готовы обсуждать сотрудничество с целыми командами, брать их под свое крыло и давать всю инфраструктуру для того, чтобы делать х10 от того, что они делают сейчас.', lang)} />
                  </div>
                </TextBlock>

              {/* <Charts id='cases' /> */}
              <Testimonials id='testimonials' />

              <Form id='form' isMobileDevice={isMobileDevice}/>

              <Footer />
            </>
          </>
        }
      </main>
    </Context.Provider>
  )
}

export default IndexPage;