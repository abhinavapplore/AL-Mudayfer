import React from "react";
import styles from "./Responsibility.module.css";
import { useTranslation } from "react-i18next";

// import value from ''

const Responsibility = () => {

  const { t } = useTranslation();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.heading}>{t('about.responsibility.heading')}</div>
        </div>
        <div className={styles.right}>
          <div className={styles.right_line}></div>
          <div className={styles.right_heading}>
          {t('about.responsibility.right_heading')}
          </div>
          <div className={styles.right_sub_heading}>
            {t('about.responsibility.right_sub_heading')}
          </div>
        </div>
      </div>
    </>
  );
};

export default Responsibility;
