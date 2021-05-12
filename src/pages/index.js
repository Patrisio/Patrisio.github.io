import React, { useState, useEffect } from "react";
// import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl';
import Header from '../components/Header/Header';
import MainScreen from '../components/MainScreen/MainScreen';
import Indicators from '../components/Indicators/Indicators';
import TextBlock from '../components/TextBlock/TextBlock';
import Title from '../components/Title/Title';
import Paragraph from '../components/Paragraph/Paragraph';
import Sources from '../components/Sources/Sources';
import Form from '../components/Form/Form';
import Footer from '../components/Footer/Footer';
import InfiniteSlider from '../components/InfiniteSlider/InfiniteSlider';
import LoadingPage from '../components/LoadingPage/LoadingPage';
import anim from '../images/anim.json';
import { Context } from '../context';
import Charts from '../components/Charts/Charts';
import Features from '../components/Features/Features';
import * as styles from './index.module.css';
import { Waypoint } from 'react-waypoint';
import type from '../utils/type';

import { Helmet } from "react-helmet";
import 'reset-css';

const IndexPage = () => {
  const [lang, changeLang] = useState('ru');
  const [isActive, toggleActive] = useState(false);
  const [isLoading, toggleLoading] = useState(true);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  const loadHandler = () => {
    console.log('__LAOD__');
  };

  useEffect(() => {
    window.version = '1.0.16';
    const module = typeof window !== `undefined` ? require("../utils/detector") : null;
    const detect = module.default;
    document.addEventListener('load', loadHandler);

    if (detect.mobile() || detect.tablet() || detect.phone()) {
      setIsMobileDevice(true);
    }
  }, []);

  return (
    <Context.Provider value={{ lang, changeLang }}>
      <main style={{ fontFamily: '"JetBrains Mono", monospace', background: '#0C1201' }}>
        {
          isLoading ?
          <LoadingPage toggleLoading={toggleLoading}/> :
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
              <Indicators id='aboutus' isMobileDevice={isMobileDevice}/>

              <div className={styles.textBlockContainer}>
                <TextBlock>
                  <div className={styles.titleContainer}>
                    <Title
                      text='Мы дадим заряженных людей вокруг'
                    />
                  </div>
                  <div className={styles.paragraphContainer} id='ourpros'>
                    <Paragraph text='Мы делаем огромные объемы трафика в сутки, обгоняя многих конкурентов. Наш принцип - максимально инвестировать в инфраструктуру, брать лучших и надежных людей. Мы семья, которая помогает друг другу во всем.'/>
                  </div>
                </TextBlock>
              </div>

              <Features isMobileDevice={isMobileDevice} />

              <Waypoint
                onEnter={() => {
                  if (!isActive) {
                    const speed = isMobileDevice ? 10 : 20;
                    type(
                      `<h2 class='${styles.description}'>Мы готовы обсуждать сотрудничество с целыми командами, брать их под свое крыло и давать всю инфраструктуру для того, чтобы делать х10 от того, что они делают сейчас.</h2>`,
                      0, false, '', 'index-1', speed);
                  }
                }}
              />
              <TextBlock>
                <div className={styles.paragraph2}>
                  <h2 className={styles.description} style={{ height: '75px' }} id='index-1' />
                </div>
              </TextBlock>
            </div>

            <Waypoint
              onEnter={() => {
                if (!isActive) {
                  type(
                    `<div class='${styles.titleFlex}'>наши клиенты Нереально амбициозные</div>`,
                    0, false, '', 'index-2', 20);
                  type(
                    `<h2 class='${styles.paragraphFlex}'>Мы отслеживаем более 1 миллиона коммерческих кликов через наших клиентов ежемесячно.</h2>`,
                    0, false, '', 'index-3', 20); 
                }
              }}
            />
            <TextBlock flex>
              <div className={styles.titleFlex} id='clients'>
                <div className={styles.titleFlex} id='index-2' />
              </div>
              <div className={styles.paragraphFlex}>
                <h2 className={styles.paragraphFlex} id='index-3' />
              </div>
            </TextBlock>

            <InfiniteSlider />

            <Sources/>

            <Waypoint
              onEnter={() => {
                toggleActive(true);
              }}
              bottomOffset={isMobileDevice ? 0 : 500}
            />

            <TextBlock>
              <div className={`
                ${styles.title3}
                ${isActive && styles.active}
              `}>
                <Title
                  text='идеальное решение для вашего бизнеса'
                />
              </div>
              <div className={`
                ${styles.paragraph3}
                ${isActive && styles.active}
              `}>
                <Paragraph text='Syndicate Group - это медиабаинг, заряженный на результат. Мы работаем только с качественными источниками трафика, которые приносят максимальную выгоду нашим клиентам.' />
              </div>
              <div className={styles.mobileParagraphs}>
                <Paragraph text='Syndicate Group - это медиабаинг, заряженный на результат.'/>
                <Paragraph text='Мы работаем только с качественными источниками трафика, которые приносят максимальную выгоду нашим клиентам.'/>
              </div>
            </TextBlock>

            <Charts id='cases' />

            <Form id='form' isMobileDevice={isMobileDevice}/>

            <Footer />
          </>
        }
      </main>
    </Context.Provider>
  )
}

export default IndexPage;