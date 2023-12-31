import React, { useState } from "react";
import styles from "./NewsHealdine.module.css";
import news1 from "../../images/home/news1.png";
import news2 from "../../images/home/truck.jpg";
import news3 from "../../images/home/news3.png";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

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
              <img style={{objectFit:'fill'}} src={t('newsDetails.news1.img')} />
            </div>
            <h3>{t('newsDetails.news1.heading')}</h3>
            <p>
            {t('newsDetails.news1.text')}
            </p>
            <br/>
            <Link to="/media/1">
         <div className={styles.button}>
          {t('home.newsHeadline.readMore')}
            <div className={styles.arrow}>
              <BsArrowRight />
            </div>
          </div>
         </Link>
          </div>
        
          <ul className={styles.mobileNews}>
            <li className={currentNews === 1 ? styles.cardActive : styles.card}>
              <div className={styles.imageWrapper}>
                <img style={{objectFit:'fill'}} src={news1} />
              </div>
              <h3>{t('newsDetails.news1.heading')}</h3>
              <p>
              {t('newsDetails.news1.text')}
              </p>
            </li>
            <li className={currentNews === 2 ? styles.cardActive : styles.card}>
              <div className={styles.imageWrapper}>
                <img src={t('newsDetails.news2.img')} />
              </div>
              <h3>{t('newsDetails.news2.heading')}</h3>
              <p>
              {t('newsDetails.news2.text')}
              </p>
            </li>
            <li className={currentNews === 3 ? styles.cardActive : styles.card}>
              <div className={styles.imageWrapper}>
                <img src={news3} />
              </div>
              <h3>{t('newsDetails.news3.img')}</h3>
              <p>
              {t('newsDetails.news3.img')}
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
              <img src={t('newsDetails.news2.img')} />
            </div>
            <h3>{t('newsDetails.news2.heading')}</h3>
            <p>{t('newsDetails.news2.text')}</p>
            <br/>
            <Link to="/media/2">
         <div className={styles.button}>
          {t('home.newsHeadline.readMore')}
            <div className={styles.arrow}>
              <BsArrowRight />
            </div>
          </div>
         </Link>
          </div>
          <div className={currentNews === 3 ? styles.cardActive : styles.card}>
            <div className={styles.imageWrapper}>
              <img src={t('newsDetails.news3.img')} />
            </div>
            <h3>{t('newsDetails.news3.heading')}</h3>
            <p>{t('newsDetails.news3.text')}</p>
            <br/>
            <Link to="/media/3">
         <div className={styles.button}>
          {t('home.newsHeadline.readMore')}
            <div className={styles.arrow}>
              <BsArrowRight />
            </div>
          </div>
         </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsHealdine;
