import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import styles from "./Investment.module.css";
import { Link } from "react-router-dom";

const Investment = ({
  backgroundImage,
  tag,
  heading1,
  heading2,
  sub_heading,
  button,
  join,
  media,
  page="true"
}) => {
const [align,setalign] = useState("left")
  const { t } = useTranslation();

  const handleHomeClick =()=>{
    window.location.href ="#employeesection"
  }

  useEffect(() => {
    const storedLanguage = localStorage.getItem('i18nextLng');
    storedLanguage == "ar" ? setalign('justify') : setalign('left')
  }, [localStorage.getItem('i18nextLng')])


  return (
    <>
      <div
        className={
          join
            ? styles.joinContainer
            : media
            ? styles.joinContainer
            : styles.container
        }
      >
        <div className={styles.background_image}>
          <div className={styles.content}>
            <div className={styles.heading} style={{textTransform:'capitalize',textAlign:`${align}`}}>
              {tag && <span className={styles.tag}>{t('joinInvest.investment.tag')}</span>}
                {t(`${page}.investment.heading1`)}
              <br />
              
              { heading2&&t(`${page}.investment.heading2`)}
            </div>
            <div style={{textAlign:`${align}`}}
              className={join ? styles.join_sub_heading : styles.sub_heading}
            >
             {t(`${page}.investment.sub_heading`)}
            </div>
            {button && (
              page   ? 
              <div className={styles.button} onClick={handleHomeClick}>
              {t(`${page}.investment.button`)}
               <div className={styles.arrow} >
                 <BsArrowRight />
               </div>
             </div>
              :
              <div className={styles.button}>
               {t(`${page}.investment.button`)}
                <div className={styles.arrow} >
                  <BsArrowRight />
                </div>
              </div>
            )}
          </div>
          {backgroundImage && (
            <div className={styles.imageWrapper}>
              <img src={page.includes('newsDetailpage') ? t(`${page}.investment.img`) : backgroundImage} />
            </div>
          )}
        </div>
      </div>
      <div id="employeesection" style={{height:'20px'}}></div>
    </>
  );
};

export default Investment;
