import React from "react";
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

  const { t } = useTranslation();

  const handleHomeClick =()=>{
    window.location.href ="#employeesection"
  }

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
            <div className={styles.heading}>
              {tag && <span className={styles.tag}>{tag}</span>}
               {t(`${page}.investment.heading1`)}
              <br />
              
              { heading2&&t(`${page}.investment.heading2`)}
            </div>
            <div
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
              <img src={backgroundImage} />
            </div>
          )}
        </div>
      </div>
      <div id="employeesection" style={{height:'20px'}}></div>
    </>
  );
};

export default Investment;
