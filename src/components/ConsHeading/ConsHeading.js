import React from "react";
import styles from "./Cons.module.css";
import { useTranslation } from 'react-i18next';

const ConsHeading = () => {

  const {t} = useTranslation()
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>{t('home.consHeading.heading')}</h1>
        </div>
        <div className={styles.sub_heading}>
        {t('home.consHeading.subHeading1')}
          <br />
          {t('home.consHeading.subHeading2')}
        </div>
      </div>
    </>
  );
};

export default ConsHeading;
