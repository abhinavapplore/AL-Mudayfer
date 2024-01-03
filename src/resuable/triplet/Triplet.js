import React from "react";
import styles from "./Triplet.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import social from "../../images/about/social.jpg";
import national from "../../images/about/national.jpg";
import environmental from "../../images/about/environmental.jpg";

const Triplet = ({ img1, img2, img3, heading1, description1, button }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.heading}>Social Responsibility</h1>
          <p className={styles.description}>
            Saleh Al-Mudaifer Sons Holding Group carries in its genes the love
            of doing good for others, working for everyone, and the culture of
            social responsibility, believing that it is from this country and to
            it and part of its interconnected society.
          </p>
          <Link to="/investment/social_responsibility">
            <div className={styles.button}>
              Learn More
              <div className={styles.arrow}>
                <BsArrowRight />
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.card}>
          <h1 className={styles.heading}>National Responsibility</h1>
          <p className={styles.description}>
            Saleh Al-Mudaifer Sons Holding Group carries in its genes the love
            of doing good for others, working for everyone, and the culture of
            social responsibility, believing that it is from this country and to
            it and part of its interconnected society.
          </p>
          <Link to="/investment/national_responsibility">
            <div className={styles.button}>
              Learn More
              <div className={styles.arrow}>
                <BsArrowRight />
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.card}>
          <h1 className={styles.heading}>Environmental Responsibility</h1>
          <p className={styles.description}>
            Saleh Al-Mudaifer Sons Holding Group carries in its genes the love
            of doing good for others, working for everyone, and the culture of
            social responsibility, believing that it is from this country and to
            it and part of its interconnected society.
          </p>
          <Link to="/investment/environmental_responsibility">
            <div className={styles.button}>
              Learn More
              <div className={styles.arrow}>
                <BsArrowRight />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Triplet;
