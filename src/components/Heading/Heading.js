import React from "react";
import styles from "./Heading.module.css";
import { useTranslation } from 'react-i18next';

const  Heading = ({
  heading1,
  heading2,
  description1,
  description2,
  description3,
  description4,
  page
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.container} >
        <div className={styles.heading1}>
          {heading1 && <h1>{t(`${page}.partner.heading1`)}</h1>}
        </div>
        <div className={styles.heading2} style={{textTransform:'capitalize'}}>{t(`${page}.partner.heading2`)}</div>
        <p className={styles.description}>
          {description1 && <>{t(`${page}.partner.description1`)}</>}
          {description2 && (
            <>
              <br />
              <br />
              {t(`${page}.partner.description2`)}
            </>
          )}
          {description3 && (
            <>
              <br />
              <br />
              {t(`${page}.partner.description3`)}
            </>
          )}
          {description4 && (
            <>
              <br />
              <br />
              {t(`${page}.partner.description4`)}
            </>
          )}
        </p>
      </div>
    </>
  );
};

export default Heading;
