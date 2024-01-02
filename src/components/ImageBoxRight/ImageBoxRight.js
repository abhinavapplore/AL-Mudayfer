import React from "react";
import styles from "./ImageBox.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ImageBoxRight = ({
  imageSrc,
  subheading,
  heading,
  description1,
  description2,
  button,
  bacground,
}) => {
  return (
    <div className={bacground ? styles.containerActive : styles.container}>
      <div className={styles.content}>
        <span className={styles.subheading}>{subheading}</span>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.sub_heading}>
          {description1}
          <br />
          <br />
          {description2}
        </div>
        <Link to="/contact">
          <div className={styles.button}>
            {button}
            <div className={styles.arrow}>
              <BsArrowRight />
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} />
      </div>
    </div>
  );
};

export default ImageBoxRight;
