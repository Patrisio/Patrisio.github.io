import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import Shadow from '../Shadow/Shadow';

import { Context } from '../../context';

import client4 from '../../images/client4.svg';
import client8 from '../../images/client8.svg';
import client9 from '../../images/client9.svg';

import * as styles from './testimonials.module.css';
import star from '../../images/star.svg';

export default function Testimonials({ id }) {
  const { lang, t } = useContext(Context);

  const testimonials = [
    {
      logo: client4,
      testimonialText: t('testimonials|Всегда отличное качество трафика, феноменальная скорость отклика и быстрые результаты, а также приятное общение с нашим менеджером. Чего еще можно ждать от партнера? Мы с удовольствием работаем и смотрим, каких же еще результатов сможем достичь в нашем сотрудничестве.', lang),
      stars: [1,2,3,4,5],
      date: t('testimonials|20 октября', lang),
    },
    {
      logo: client9,
      testimonialText: t('testimonials|Мы работаем вместе почти 2 года, и наши отношения всегда были прекрасными. Они льют разные источники и ГЕО, что полностью соответствует нашим потребностям. Менеджер всегда приветливая, готова ответить на любые вопросы. Мы надеемся на  долгосрочное партнерство и на сохранение дружеских отношений.', lang),
      stars: [1,2,3,4,5],
      date: t('testimonials|05 ноября', lang),
    },
    {
      logo: client8,
      testimonialText: t('testimonials|Мы начали работать в 2018 году и до сих пор поддерживаем плодотворные и взаимовыгодные партнерские отношения. Их команда всегда оказывает большую поддержку и делает все возможное, чтобы обеспечить непрерывный рост объема трафика. Общение было и остается ключевым моментом, и помимо постоянных диалогов на уровне бизнеса, мы также наслаждаемся чувством юмора нашего чудесного менеджера.', lang),
      stars: [1,2,3,4,5],
      date: t('testimonials|12 декабря', lang),
    },
  ];
  
  return (
    <div className={styles.chartContainer} id={id}>
      <div className={styles.desktopChart}>
          {
            testimonials.map(({ logo, testimonialText, stars, date }, idx) => (
              <div
                key={idx}
                className={styles.chartSlide}
              >
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

                  <div>
                    <div className={styles.testimonialText}>{ testimonialText }</div>

                    <div className={styles.testimonialFooterContainer}>
                      <div className={styles.starsContainer}>
                        {
                          stars.map((starItem) => (
                            <div
                              key={starItem}
                              className={styles.starItem}
                            >
                              <img
                                src={star}
                                alt='star'
                              />
                            </div>
                          ))
                        }
                      </div>

                      <div className={styles.date}>
                        { date }
                      </div>
                    </div>
                  </div>
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
            ))
          }
      </div>

      <div className={styles.testimonialsMobile}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
        >
          {
            testimonials.map(({ logo, testimonialText, stars, date }, idx) => (
              <SwiperSlide key={idx}>
                <div
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

                  <div>
                    <img src={logo} alt='logo' className={styles.logoIcon}/>

                    <div>
                      <div className={styles.testimonialText}>{ testimonialText }</div>

                      <div className={styles.testimonialFooterContainer}>
                        <div className={styles.starsContainer}>
                          {
                            stars.map((starItem) => (
                              <div
                                key={starItem}
                                className={styles.starItem}
                              >
                                <img
                                  className={styles.starIcon}
                                  src={star}
                                  alt='star'
                                />
                              </div>
                            ))
                          }
                        </div>

                        <div className={styles.date}>
                          { date }
                        </div>
                      </div>
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
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>

      {/* <div className={styles.chartsContainerMobile}>
        {
          testimonials.map(({
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
      </div> */}
    </div>
  );
}