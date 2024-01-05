import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import styles from "./Investment.module.css";

const Investments = ({ backgroundImage, heading ,page }) => {

  const {t} = useTranslation()
  return (
    <>
      <div className={styles.containerInvestment}>
        <h1 className={styles.heading}>{t(`${page}.investment.heading1`)}</h1>
        <div className={styles.imageWrapper}>
          <img src={backgroundImage} />
        </div>
      </div>
    </>
  );
};

export default Investments;
