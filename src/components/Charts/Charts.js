import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Shadow from '../Shadow/Shadow';

import client4 from '../../images/client4.svg';
import client8 from '../../images/client8.svg';
import client9 from '../../images/client9.svg';
import client11 from '../../images/client11.svg';
import mobileChart1 from '../../images/chart-mobile1.svg';
import mobileChart2 from '../../images/chart-mobile2.svg';
import mobileChart3 from '../../images/chart-mobile3.svg';
import mobileChart4 from '../../images/chart-mobile4.svg';

import 'swiper/swiper.scss';

import * as styles from './charts.module.css';

export default function Charts({ id }) {
  const charts = [
    {
      logo: client4,
      chartMobile: mobileChart1,
      animationPath: 'https://assets1.lottiefiles.com/packages/lf20_d5mw0s3z.json',
      greenLabelText: 'покупка сериалов',
      whiteLabelText: 'установок',

      mobileAchivementnNumbersOne: '3 900 000',
      mobileAchivementTextOne: 'Установок',

      mobileAchivementnNumbersTwo: '5,5%',
      mobileAchivementTextTwo: 'В покупку',

      mobileAchivementnNumbersThree: 'CPI + KPI',
      mobileAchivementTextThree: 'модель работы',
    },
    {
      logo: client9,
      chartMobile: mobileChart2,
      animationPath: 'https://assets10.lottiefiles.com/packages/lf20_twymt7rd.json',
      greenLabelText: 'в подписку',
      whiteLabelText: 'установок',

      mobileAchivementnNumbersOne: '1 000 000',
      mobileAchivementTextOne: 'Установок',

      mobileAchivementnNumbersTwo: '7%',
      mobileAchivementTextTwo: 'В покупку',

      mobileAchivementnNumbersThree: 'CPA',
      mobileAchivementTextThree: 'модель работы',
    },
    {
      logo: client8,
      chartMobile: mobileChart4,
      animationPath: 'https://assets9.lottiefiles.com/packages/lf20_8u1ywjxe.json',
      greenLabelText: 'в покупку',
      whiteLabelText: 'установок',

      mobileAchivementnNumbersOne: '3 900 000',
      mobileAchivementTextOne: 'Установок',

      mobileAchivementnNumbersTwo: '5,5%',
      mobileAchivementTextTwo: 'В покупку',

      mobileAchivementnNumbersThree: 'CPI + KPI',
      mobileAchivementTextThree: 'модель работы',
    },
    {
      logo: client11,
      chartMobile: mobileChart3,
      animationPath: 'https://assets1.lottiefiles.com/packages/lf20_d5mw0s3z.json',
      greenLabelText: 'одежда магазин',
      whiteLabelText: 'товары китая',

      mobileAchivementnNumbersOne: '24к',
      mobileAchivementTextOne: 'Установок',

      mobileAchivementnNumbersTwo: '20%',
      mobileAchivementTextTwo: 'РОСТ ОРГАНИКИ',

      mobileAchivementnNumbersThree: '5РУБ',
      mobileAchivementTextThree: 'ЗА УСТАНОВКУ',
    },
  ];
  
  return (
    <div className={styles.chartContainer} id={id}>
      <div className={styles.desktopChart}>
        {/* <Swiper
          spaceBetween={62}
          slidesPerView={2}
          centeredSlides={true}
        > */}
          {
            charts.map(({ logo, greenLabelText, whiteLabelText, animationPath }, idx) => (
              // <SwiperSlide key={idx}>
                <div className={styles.chartSlide}>
                  <div className={styles.left}>
                    <div className={styles.top}>
                      <div className={styles.greenTail} />
                      <Shadow
                        count={15}
                        classNames={styles.shadowTop}
                      />
                    </div>

                    <div className={styles.bottom}>
                      <div className={styles.greenTail} />
                      <Shadow
                        count={15}
                        classNames={styles.shadowBottom}
                      />
                    </div>
                  </div>

                  <div className={styles.chartHeader}>
                    <img src={logo} alt='logo' />

                    <div className={styles.legendsContainer}>
                      <div className={styles.legendContainer}>
                        <div className={`${styles.legend} ${styles.green}`} />
                        <span className={styles.text}>{ greenLabelText }</span>
                      </div>

                      <div className={styles.legendContainer}>
                        <div className={`${styles.legend} ${styles.white}`} />
                        <span className={styles.text}>{ whiteLabelText }</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.chart}>
                    <lottie-player
                      src={animationPath}
                      background="transparent"
                      speed="1"
                      autoplay
                    />
                  </div>

                  <div className={styles.right}>
                    <div className={styles.top}>
                      <div className={styles.greenTail} />
                      <Shadow
                        count={15}
                        classNames={styles.shadowTop}
                      />
                    </div>

                    <div className={styles.bottom}>
                      <div className={`${styles.greenTail} ${styles.greenTailBottom}`} />
                      <Shadow
                        count={15}
                        classNames={`${styles.shadowBottom}`}
                      />
                    </div>
                  </div>
                </div>
              // {/* </SwiperSlide> */}
            ))
          }
        {/* </Swiper> */}
      </div>

      <div className={styles.chartsContainerMobile}>
        {
          charts.map(({
            logo, greenLabelText,
            whiteLabelText, chartMobile,
            mobileAchivementTextOne,
            mobileAchivementnNumbersOne,
            mobileAchivementTextTwo,
            mobileAchivementnNumbersTwo,
            mobileAchivementTextThree,
            mobileAchivementnNumbersThree,
          }, idx) => (
            <div
              key={idx}
              className={styles.chartCard}
            >
              <div className={styles.left}>
                <div className={styles.top}>
                  <div className={styles.greenTail} />
                  <Shadow
                    count={15}
                    classNames={`${styles.shadowTop} ${styles.shadowMobile}`}
                  />
                </div>

                <div className={styles.bottom}>
                  <div className={`${styles.greenTail} ${styles.greenTailBottom}`} />
                  <Shadow
                    count={15}
                    classNames={`${styles.shadowBottom} ${styles.shadowMobile}`}
                  />
                </div>
              </div>

              <div className={styles.chartPreview}>
                <div className={styles.mobileLogo}>
                  <img src={logo} />
                </div>

                <div className={`${styles.legendContainer} ${styles.marginBottom}`}>
                  <div className={`${styles.legend} ${styles.green}`} style={{ width: '4px', height: '4px'}} />
                  <span className={styles.textWhite}>{ greenLabelText }</span>
                </div>

                <div className={`${styles.legendContainer} ${styles.marginBottom}`}>
                  <div className={`${styles.legend} ${styles.white}`} style={{ width: '4px', height: '4px'}} />
                  <span className={styles.textWhite}>{ whiteLabelText }</span>
                </div>

                <div className={styles.mobileCharts}>
                  <img src={chartMobile} alt='chart-mobile' />
                </div>
              </div>

              <div>
                <div className={styles.description}>
                  <span className={styles.numbers}>{ mobileAchivementnNumbersOne }</span>
                  <span className={styles.chartText}>{ mobileAchivementTextOne }</span>

                  <span className={styles.numbers}>{ mobileAchivementnNumbersTwo }</span>
                  <span className={styles.chartText}>{ mobileAchivementTextTwo }</span>

                  <span className={styles.numbers}>{ mobileAchivementnNumbersThree }</span>
                  <span className={styles.chartText}>{ mobileAchivementTextThree }</span>
                </div>
              </div>

              <div className={styles.right}>
                <div className={styles.top}>
                  <div className={styles.greenTail} />
                  <Shadow
                    count={15}
                    classNames={`${styles.shadowTop} ${styles.shadowMobile}`}
                  />
                </div>

                <div className={styles.bottom}>
                  <div className={`${styles.greenTail} ${styles.greenTailBottom}`} />
                  <Shadow
                    count={15}
                    classNames={`${styles.shadowBottom} ${styles.shadowMobile}`}
                  />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}