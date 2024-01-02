import React from "react";
import styles from "./Heading.module.css";

const Heading = ({
  heading1,
  heading2,
  description1,
  description2,
  description3,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading1}>
          <h1>{heading1}</h1>
        </div>
        <div className={styles.heading2}>{heading2}</div>
        {description1 && (
          <div div className={styles.description}>
            {description1}
          </div>
        )}
        {description2 && (
          <div className={styles.description}>{description2}</div>
        )}
        {description3 && (
          <div className={styles.description}>{description3}</div>
        )}
      </div>
    </>
  );
};

export default Heading;
