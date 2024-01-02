import React from "react";
import styles from "./Card.module.css";
import message from "../../images/about/message.svg";
import vision from "../../images/about/vision.svg";
import vision_big from "../../images/about/vision.jpg";
import message_big from "../../images/about/message.jpg";
import value_big from "../../images/about/value.jpg";

const Card = ({
  image1,
  icon1,
  image2,
  icon2,
  image3,
  icon3,
  heading1,
  subHeading1,
  heading2,
  subHeading2,
  heading3,
  subHeading3,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.card}>
          <div className={styles.heading}>{heading1}</div>
          <div className={styles.sub_heading}>{subHeading1}</div>
        </div>
        <div className={styles.card}>
          <div className={styles.heading}>{heading2}</div>
          <div className={styles.sub_heading}>{subHeading2}</div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.card}>
          <div className={styles.heading}>{heading3}</div>
          <div className={styles.sub_heading}>{subHeading3}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
