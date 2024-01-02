import React from "react";
import styles from "./experience62.module.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Experience62 = ({
  image1,
  image2,
  heading,
  description1,
  description2,
  button,
}) => {
  return (
    <div className={styles.container}>
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
      <div className={styles.imagesWrapper}>
        <div className={styles.imageWrapper}>
          <img src={image1} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={image2} />
        </div>
      </div>
    </div>
  );
};

export default Experience62;
