import React from "react";
import { BsArrowRight } from "react-icons/bs";

import styles from "./Investment.module.css";

const Investment = ({
  backgroundImage,
  tag,
  heading1,
  heading2,
  sub_heading,
  button,
  join,
  media,
}) => {
  return (
    <>
      <div
        className={
          join
            ? styles.joinContainer
            : media
            ? styles.mediaContainer
            : styles.container
        }
      >
        <div className={styles.background_image}>
          <div className={styles.content}>
            <div className={styles.heading}>
              {tag && <span className={styles.tag}>{tag}</span>}
              {heading1}
              <br />
              {heading2}
            </div>
            <div
              className={join ? styles.join_sub_heading : styles.sub_heading}
            >
              {sub_heading}
            </div>
            {button && (
              <div className={styles.button}>
                {button}
                <div className={styles.arrow}>
                  <BsArrowRight />
                </div>
              </div>
            )}
          </div>
          {backgroundImage && (
            <div className={styles.imageWrapper}>
              <img src={backgroundImage} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Investment;
