import React from "react";
import styles from "./ImageBox.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ImageBoxLeft = ({
  imageSrc,
  heading,
  description1,
  description2,
  button,page
}) => {

  
  const {t} = useTranslation()
  
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} />
      </div>
      <div className={styles.content}>
        <div className={styles.heading}> {t(`${page}.imageBoxLeft.heading`)}</div>
        <div className={styles.sub_heading}>
        {t(`${page}.imageBoxLeft.description1`)}
          <br />
          <br />
          {description2 && t(`${page}.imageBoxLeft.description2`)}
        </div>
        <Link to={page =="home" ? `/join`:`/contact`}>
          <div className={styles.button}>
          {t(`${page}.imageBoxLeft.buttonText`)}
            <div className={styles.arrow}>
              <BsArrowRight />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ImageBoxLeft;
