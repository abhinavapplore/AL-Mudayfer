import React from "react";
import styles from "./Cons.module.css";

const ConsHeading = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>with Al-Mudayfer</h1>
        </div>
        <div className={styles.sub_heading}>
          Conscios Leadership
          <br />
          Welcomes You
        </div>
      </div>
    </>
  );
};

export default ConsHeading;
