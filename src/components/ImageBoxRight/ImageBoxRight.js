import React from "react";
import styles from "./ImageBox.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ImageBoxRight = ({
  imageSrc,
  subheading,
  heading,
  description1,
  description2,
  button,
  bacground,
  page
}) => {

  const {t} = useTranslation()


  return (
    <div className={bacground ? styles.containerActive : styles.container}>
      <div className={styles.content}>
        <span className={styles.subheading}>{subheading}</span>
        <div className={styles.heading}> {t(`${page}.imageBoxRight.heading`)}</div>
        <div className={styles.sub_heading}>
        {t(`${page}.imageBoxRight.description1`)}
          <br />
          <br />
          {description2 &&  t(`${page}.imageBoxRight.description2`)}
        </div>
        {
          page =="about"? 
         <a href="#social" >
          <div className={styles.button}>
          {t(`${page}.imageBoxRight.buttonText`)}
            <div className={styles.arrow}>
              <BsArrowRight />
            </div>
          </div>
         </a>
        :
        <Link to="/contact">
          <div className={styles.button}>
          {t(`${page}.imageBoxRight.buttonText`)}
            <div className={styles.arrow}>
              <BsArrowRight />
            </div>
          </div>
        </Link>
        }
        
      </div>
      <div className={styles.imageWrapper} style={{height:'420px'}} id="">
        <img src={imageSrc} />
      </div>
    </div>
  );
};

export default ImageBoxRight;
