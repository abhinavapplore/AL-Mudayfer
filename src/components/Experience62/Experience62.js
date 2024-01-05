import React from "react";
import styles from "./experience62.module.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

const Experience62 = ({
  image1,
  image2,
  heading,
  description1,
  description2,
  button,
  page
}) => {

  const { t } = useTranslation();
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}> {t(`${page}.experience62.heading`)}</div>
        <div className={styles.sub_heading}>
        {t(`${page}.experience62.text`)}
          <br />
          <br />
          {/* {description2} */}
        </div>
        <Link to="/contact">
          <div className={styles.button}>
          {t(`${page}.experience62.buttonText`)}
            <div className={styles.arrow}>
              <BsArrowRight />
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.imagesWrapper}>
        <div className={styles.imageWrapper}>
          <img src={image1} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={image2} />
        </div>
      </div>
    </div>
  );
};

export default Experience62;
