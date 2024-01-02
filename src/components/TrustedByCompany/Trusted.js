import React from "react";
import styles from "./Trusted.module.css";
import walmart from "../../images/investment/walmart.png";
import cisco from "../../images/investment/cisco.png";
import volvo from "../../images/investment/volvo.png";
import deloitte from "../../images/investment/deloitte.png";
import okta from "../../images/investment/okta.png";
import { BsArrowRight } from "react-icons/bs";

const Trusted = ({ notRequired, heading }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          {heading ? heading : "Our Investments"}
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
            <div className={styles.heading1}>We Invest</div>
            <div className={styles.sub_heading}>
              Extend the hand of investment, as our hands are extended to all
              available opportunities.
            </div>
            <div className={styles.button}>
              Know More
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
