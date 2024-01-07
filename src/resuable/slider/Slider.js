import React, { useRef, useState } from "react";
import styles from "./Slider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Card = ({ image, badge, heading, subHeading, buttonText, date ,join }) => (
  <div className={styles.card_container}>
    <div className={styles.image}>
      <div className={styles.badge}>{badge}</div>
      <img src={image} alt="" />
    </div>
    <div className={styles.content}>
      <div className={styles.heading}>{heading.slice(0,30)}</div>
      {date && <span className={styles.date}>{date}</span>}
      <div className={styles.sub_heading}>{subHeading.slice(0,180)}</div>
      {!join && <div className={styles.buttonArrow}>
        {buttonText}
        <div className={styles.arrow}>
          <BsArrowRight />
        </div>
      </div>}
    </div>
  </div>
);

const Slider = ({ cards ,join }) => {
  const sliderRef = useRef(null);
  const [state, setState] = useState(1);

  const scroll = (direction) => {
    const slides = sliderRef.current;
    if (slides) {
      const width = slides.clientWidth;
      slides.scrollLeft =
        direction === "left"
          ? slides.scrollLeft - width
          : slides.scrollLeft + width;
    }
  };
  return (
    <div className={styles.slider_container}>
      <div className={styles.buttons}>
        <button
          className={state !== 1 ? styles.buttonActive : styles.button}
          onClick={() => scroll("left")}
        >
          <FaChevronLeft />
        </button>
        <button
          className={
            state <= cards.length - 2 && cards.length > 3
              ? styles.buttonActive
              : styles.button
          }
          onClick={() => scroll("right")}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className={styles.container} ref={sliderRef}>
        {cards.map((card, index) => (
          <Card key={index} {...card} join={join}/>
        ))}
      </div>
    </div>
  );
};

export default Slider;
