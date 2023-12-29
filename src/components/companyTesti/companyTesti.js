import React from 'react'
import styles from "./companyTesti.module.css";
import { useTranslation } from 'react-i18next';

function CompanyTesti() {
const {t} = useTranslation()

  return (
    <div className={styles.top_right}>
                <div className={styles.logo}>
                  
                </div>
                <div className={styles.numbers}>
                1245
                  <div className={styles.numbers_description}>
                  Invested
                  </div>
                </div>
                <div className={styles.numbers}>
                  20M
                  <div className={styles.numbers_description}>Branches</div>
                </div>
                <div className={styles.numbers}>
                 3M Meters
                  <div className={styles.numbers_description}> onthly Production Capacity</div>
                </div>

                <div className={styles.right_button}>
                  <a href="https://comaco.sa/">https://comaco.sa/</a>
                </div>
              </div>
  )
}

export default CompanyTesti
