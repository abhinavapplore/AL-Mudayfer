import React, { useState } from "react";
import styles from "./NewsHealdine.module.css";
import news1 from "../../images/home/news1.png";
import news2 from "../../images/home/truck.jpg";
import news3 from "../../images/home/news3.png";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

const NewsHealdine = ({page}) => {
  const [currentNews, setCurrentNews] = useState(1);

  const {t} = useTranslation()
  return (
    <>
      <div className={styles.container}>
        <div className={styles.section1}>
          <span>{t('home.newsHeadline.lastNews')}</span>
          <h1>{t('home.newsHeadline.newsHeadline')}</h1>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={news1} />
            </div>
            <h3>{t('home.newsHeadline.mobileNews1.title')}</h3>
            <p>
            {t('home.newsHeadline.mobileNews1.content')}
            </p>
          </div>
          <div className={styles.button}>
          {t('home.newsHeadline.readMore')}
            <div className={styles.arrow}>
              <BsArrowRight />
            </div>
          </div>
          <ul className={styles.mobileNews}>
            <li className={currentNews === 1 ? styles.cardActive : styles.card}>
              <div className={styles.imageWrapper}>
                <img src={news1} />
              </div>
              <h3>{t('home.newsHeadline.mobileNews1.title')}</h3>
              <p>
              {t('home.newsHeadline.mobileNews1.content')}
              </p>
            </li>
            <li className={currentNews === 2 ? styles.cardActive : styles.card}>
              <div className={styles.imageWrapper}>
                <img src={news2} />
              </div>
              <h3>{t('home.newsHeadline.mobileNews2.title')}</h3>
              <p>
              {t('home.newsHeadline.mobileNews2.content')}
              </p>
            </li>
            <li className={currentNews === 3 ? styles.cardActive : styles.card}>
              <div className={styles.imageWrapper}>
                <img src={news3} />
              </div>
              <h3>{t('home.newsHeadline.mobileNews3.title')}</h3>
              <p>
              {t('home.newsHeadline.mobileNews3.content')}
              </p>
            </li>
          </ul>
          <div className={styles.prevNextButtons}>
            <button
              className={currentNews !== 1 ? styles.active : ""}
              onClick={
                currentNews === 1 ? null : () => setCurrentNews(currentNews - 1)
              }
            >
              <FaChevronLeft size={12} />
            </button>
            <button
              className={currentNews !== 3 ? styles.active : ""}
              onClick={
                currentNews === 3 ? null : () => setCurrentNews(currentNews + 1)
              }
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={currentNews === 2 ? styles.cardActive : styles.card}>
            <div className={styles.imageWrapper}>
              <img src={news2} />
            </div>
            <h3>{t('home.newsHeadline.mobileNews2.title')}</h3>
            <p>{t('home.newsHeadline.mobileNews2.content')}</p>
          </div>
          <div className={currentNews === 3 ? styles.cardActive : styles.card}>
            <div className={styles.imageWrapper}>
              <img src={news3} />
            </div>
            <h3>{t('home.newsHeadline.mobileNews3.title')}</h3>
            <p>{t('home.newsHeadline.mobileNews3.content')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsHealdine;
