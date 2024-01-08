import React from "react";
import styles from "./Card.module.css";
import message from "../../images/about/message.svg";
import vision from "../../images/about/vision.svg";
import vision_big from "../../images/about/vision.jpg";
import message_big from "../../images/about/message.jpg";
import value_big from "../../images/about/value.jpg";
import { useTranslation } from 'react-i18next';

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
  page
}) => {

  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.card}>
          <div className={styles.heading}>{t(`${page}.card.vision.heading`)}</div>
          <div className={styles.sub_heading}>{t(`${page}.card.vision.subHeading`)}</div>
        </div>
        <div className={styles.card}>
          {
            page !="about"?
            <>
                <div className={styles.heading}>{t(`${page}.card.values.heading`)}</div>
              <div className={styles.sub_heading}>{t(`${page}.card.mission.subHeading3`)}</div>
            </>
            :
            <>
              <div className={styles.heading}>{t(`${page}.card.mission.heading`)}</div>
              <div className={styles.sub_heading}>{t(`${page}.card.mission.subHeading`)}</div>
            </>
          }
          
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.card}>
          {page !="about" && <>
          <div className={styles.heading}>{t(`${page}.card.mission.heading`)}</div>
          <div className={styles.sub_heading}>{t(`${page}.card.mission.subHeading`)}</div>

          </>}
          {page != "about" ?

            <>
              <div className={styles.sub_heading}>{t(`${page}.card.mission.subHeading2`)}</div>
              <div className={styles.sub_heading}>{t(`${page}.card.mission.subHeading3`)}</div>

            </>
            :
            <>
            
              <div className={styles.heading}>{t(`${page}.card.values.heading`)}</div>
              <div className={styles.sub_heading}>{t(`${page}.card.values.subHeading`)}</div>
              <ul>
            <li>{t(`home.ourValues.selectHeading1`)}</li>
            <li>{t(`home.ourValues.selectHeading2`)}</li>
            <li>{t(`home.ourValues.selectHeading3`)}</li>
            <li>{t(`home.ourValues.selectHeading4`)}</li>
            <li>{t(`home.ourValues.selectHeading5`)}</li>
            <li>{t(`home.ourValues.selectHeading6`)}</li>

          </ul>
            </>
          }
        </div>

      </div>
    </div>
  );
};

export default Card;
