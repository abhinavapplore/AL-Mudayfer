import React from "react";
import { BsArrowRight } from "react-icons/bs";

import styles from "./Investment.module.css";

const Investments = ({ backgroundImage, heading }) => {
  return (
    <>
      <div className={styles.containerInvestment}>
        <h1 className={styles.heading}>{heading}</h1>
        <div className={styles.imageWrapper}>
          <img src={backgroundImage} />
        </div>
      </div>
    </>
  );
};

export default Investments;
