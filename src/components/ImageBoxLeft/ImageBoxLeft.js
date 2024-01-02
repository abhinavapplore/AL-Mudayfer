import React from "react";
import styles from "./ImageBox.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ImageBoxLeft = ({
  imageSrc,
  heading,
  description1,
  description2,
  button,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} />
      </div>
      <div className={styles.content}>
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
    </div>
  );
};

export default ImageBoxLeft;
