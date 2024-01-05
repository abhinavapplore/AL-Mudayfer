import React from "react";
import styles from "./Trusted.module.css";
import walmart from "../../images/investment/walmart.png";
import cisco from "../../images/investment/cisco.png";
import volvo from "../../images/investment/volvo.png";
import deloitte from "../../images/investment/deloitte.png";
import okta from "../../images/investment/okta.png";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";


const Trusted = ({ notRequired, heading ,trusted , page}) => {

  const {t} = useTranslation()

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          { t(`${page}.homeTrusted`)}
        </div>
        <div className={styles.images}>
          <img src={walmart} alt="" />
          <img src={cisco} alt="" />
          <img src={volvo} alt="" />
          <img src={deloitte} alt="" />
          <img src={okta} alt="" />
        </div>
        {!notRequired && (
          <div className={styles.content}>
            <div className={styles.heading1}> {t(`${page}.trusted.content.heading1`)}</div>
            <div className={styles.sub_heading}>
            {t(`${page}.trusted.content.sub_heading`)}
            </div>
            <div className={styles.button}>
            {t(`${page}.trusted.content.button_text`)}
              <div className={styles.arrow}>
                <BsArrowRight />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Trusted;
