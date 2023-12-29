import React from 'react'
import styles from './Card.module.css';
import message from '../../images/about/message.svg'
import vision from '../../images/about/vision.svg'
import vision_big from '../../images/about/vision.jpg'
import message_big from '../../images/about/message.jpg'
import value_big from '../../images/about/value.jpg'
import { useTranslation } from 'react-i18next';

const Card = ({
    image1, icon1,
    image2, icon2,
    image3, icon3,
    heading1, subHeading1,
    heading2, subHeading2,
    heading3, subHeading3,page
}) => {

    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={image1} alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.icon}>
                        <img src={icon1} alt="" />
                    </div>
                    <div className={styles.heading}>{t(`${page}.card.vision.heading`)}</div>
                    <div className={styles.sub_heading}>{t(`${page}.card.vision.subHeading`)}</div>
                </div>
            </div>
            <div className={styles.card_down}>
                <div className={styles.image}>
                    <img src={image2} alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.icon}>
                        <img src={icon2} alt="" />
                    </div>
                    <div className={styles.heading}>{t(`${page}.card.mission.heading`)}</div>
                    <div className={styles.sub_heading}>{t(`${page}.card.mission.subHeading`)}</div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={image3} alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.icon}>
                        <img src={icon3} alt="" />
                    </div>
                    <div className={styles.heading}>{t(`${page}.card.values.heading`)}</div>
                    <div className={styles.sub_heading}>{t(`${page}.card.values.subHeading`)}</div>
                </div>
            </div>
        </div>
    )
}

export default Card