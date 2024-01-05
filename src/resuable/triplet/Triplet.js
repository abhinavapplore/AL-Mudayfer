import React from "react";
import styles from "./Triplet.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import social from "../../images/about/social.jpg";
import national from "../../images/about/national.jpg";
import environmental from "../../images/about/environmental.jpg";

const Triplet = ({ img1, img2, img3, heading1, description1, button,page }) => {

  const { t } = useTranslation();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.heading}>{t(`${page}.triplets.1.heading`)}</h1>
          <p className={styles.description}>
          {t(`${page}.triplets.1.description`)}
          </p>
          <Link to="/about/social_responsibility">
            <div className={styles.button}>
            {t(`${page}.triplets.1.link.text`)}
              <div className={styles.arrow}>
                <BsArrowRight />
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.card}>
          <h1 className={styles.heading}>{t(`${page}.triplets.2.heading`)}</h1>
          <p className={styles.description}>
          {t(`${page}.triplets.2.description`)}
          </p>
          <Link to="/about/national_responsibility">
            <div className={styles.button}>
            {t(`${page}.triplets.2.link.text`)}
              <div className={styles.arrow}>
                <BsArrowRight />
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.card}>
          <h1 className={styles.heading}>{t(`${page}.triplets.3.heading`)}</h1>
          <p className={styles.description}>
          {t(`${page}.triplets.3.description`)}
          </p>
          <Link to="/about/environmental_responsibility">
            <div className={styles.button}>
              {t(`${page}.triplets.3.link.text`)}
              <div className={styles.arrow}>
                <BsArrowRight />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Triplet;
