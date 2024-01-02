import React from "react";
import styles from "./Heading.module.css";

const Heading = ({
  heading1,
  heading2,
  description1,
  description2,
  description3,
  description4,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading1}>
          <h1>{heading1}</h1>
        </div>
        <div className={styles.heading2}>{heading2}</div>
        <p className={styles.description}>
          {description1 && <>{description1}</>}
          {description2 && (
            <>
              <br />
              <br />
              {description2}
            </>
          )}
          {description3 && (
            <>
              <br />
              <br />
              {description3}
            </>
          )}
          {description4 && (
            <>
              <br />
              <br />
              {description4}
            </>
          )}
        </p>
      </div>
    </>
  );
};

export default Heading;
