import React from 'react'
import styles from './NewsHealdine.module.css';
import build0 from '../../images/home/building0.jpg';
import truck from '../../images/home/truck.jpg';
import build2 from '../../images/home/building2.jpg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NewsHealdine = () => {

  const {t} = useTranslation()


  return (
    <>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <img src={build0} alt="" />
          <div className={styles.content}>
            <div className={styles.content_heading}>{t('home.newsHeadline.heading')}</div>
            <div className={styles.content_sub_heading}>
            {t('home.newsHeadline.subHeading')}
            </div>
            <Link to='/contact'>
              <div className={styles.content_button}> {t('home.newsHeadline.buttonText')}</div>
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.top}>
            <img src={truck} alt="" />
          </div>
          {/* <div className={styles.bottom}>
            <img src={build2} alt="" />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default NewsHealdine