import React, { useRef } from 'react';
import styles from './Slider.module.css';
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { useTranslation } from 'react-i18next';




const Card = ({t, image, badge, heading, subHeading, buttonText }) => (
    <div className={styles.card_container}>
        <div className={styles.image}>
            <div className={styles.badge}>{badge}</div>
            <img src={image} alt="" />
        </div>
        <div className={styles.content}>
            <div className={styles.heading}>{heading}</div>
            <div className={styles.sub_heading}>{subHeading}</div>
            <div className={styles.read_more_button}>{buttonText}</div>
        </div>
    </div>
);


const Slider = ({ cards }) => {
    const { t } = useTranslation();

    
    const sliderRef = useRef(null);

    const scroll = (direction) => {
        const slides = sliderRef.current;
        if (slides) {
            const width = slides.clientWidth;
            slides.scrollLeft = direction === 'left' ? slides.scrollLeft - width : slides.scrollLeft + width;
        }
    };

    return (
        <div className={styles.slider_container}>
            <div className={styles.container} ref={sliderRef}>
                {cards.map((card, index) => (
                    <Card key={index} {...card} t={t} />
                ))}
            </div>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={() => scroll('left')}>
                    <CiCircleChevLeft />
                </button>
                <button className={styles.button} onClick={() => scroll('right')}>
                    <CiCircleChevRight />
                </button>
            </div>
        </div>
    );
};

export default Slider;