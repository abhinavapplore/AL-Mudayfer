import React, { useState } from "react";
import styles from "./Ourvalue.module.css";

// import value from ''

const OurValues = () => {
  const [selected, setSelected] = useState(1);
  console.log(selected);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Our Values</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tincidunt feugiat arcu quis
            amet diam
          </p>
          <ul>
            <li>Quality</li>
            <li>Reliability</li>
            <li>Leadership</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h2>Our Vision</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tincidunt feugiat arcu quis
            amet diam
          </p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur. Tincidunt feugiat arcu
              quis amet diam non faucibus
            </li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur. Tincidunt feugiat arcu
              quis amet
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OurValues;
