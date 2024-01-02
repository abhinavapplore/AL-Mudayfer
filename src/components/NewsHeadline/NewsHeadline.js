import React, { useState } from "react";
import styles from "./NewsHealdine.module.css";
import news1 from "../../images/home/news1.png";
import news2 from "../../images/home/news2.png";
import news3 from "../../images/home/news3.png";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const NewsHealdine = () => {
  const [currentNews, setCurrentNews] = useState(1);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.section1}>
          <span>LAST NEWS</span>
          <h1>News Headline</h1>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={news1} />
            </div>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
              morbi.
            </p>
          </div>
          <div className={styles.button}>
            Read More
            <div className={styles.arrow}>
              <BsArrowRight />
            </div>
          </div>
          <ul className={styles.mobileNews}>
            <li className={currentNews === 1 ? styles.cardActive : styles.card}>
              <div className={styles.imageWrapper}>
                <img src={news1} />
              </div>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus fringilla dui amet faucibus nam. Erat id laoreet
                posuere etiam morbi.
              </p>
            </li>
            <li className={currentNews === 2 ? styles.cardActive : styles.card}>
              <div className={styles.imageWrapper}>
                <img src={news2} />
              </div>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus fringilla dui amet faucibus nam. Erat id laoreet
                posuere etiam morbi.
              </p>
            </li>
            <li className={currentNews === 3 ? styles.cardActive : styles.card}>
              <div className={styles.imageWrapper}>
                <img src={news3} />
              </div>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus fringilla dui amet faucibus nam. Erat id laoreet
                posuere etiam morbi.
              </p>
            </li>
          </ul>
          <div className={styles.prevNextButtons}>
            <button
              className={currentNews !== 1 ? styles.active : ""}
              onClick={
                currentNews === 1 ? null : () => setCurrentNews(currentNews - 1)
              }
            >
              <FaChevronLeft size={12} />
            </button>
            <button
              className={currentNews !== 3 ? styles.active : ""}
              onClick={
                currentNews === 3 ? null : () => setCurrentNews(currentNews + 1)
              }
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={currentNews === 2 ? styles.cardActive : styles.card}>
            <div className={styles.imageWrapper}>
              <img src={news2} />
            </div>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
              morbi.
            </p>
          </div>
          <div className={currentNews === 3 ? styles.cardActive : styles.card}>
            <div className={styles.imageWrapper}>
              <img src={news3} />
            </div>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
              morbi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsHealdine;
