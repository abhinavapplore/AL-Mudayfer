import React from "react";
import { BsArrowRight } from "react-icons/bs";

import styles from "./Investment.module.css";

const Investment = ({
  backgroundImage,
  heading1,
  heading2,
  sub_heading,
  button,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background_image}>
          <div className={styles.content}>
            <div className={styles.heading}>
              {heading1}
              <br />
              {heading2}
            </div>
            <div className={styles.sub_heading}>{sub_heading}</div>
            <div className={styles.button}>
              {button}
              <div className={styles.arrow}>
                <BsArrowRight />
              </div>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img src={backgroundImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Investment;
