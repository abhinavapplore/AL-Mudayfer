import React, { useEffect, useState, useTransition } from "react";
import styles from "./Ourvalue.module.css";
import { useTranslation } from "react-i18next";

// import value from ''

const OurValues = ({selectheading ,selectdescription ,otherheading ,otherdescription}) => {
  const [selected, setSelected] = useState(1);
  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng') || 'en');

  const [ov,setOV]=useState(null)
  console.log(selected);

  
  useEffect(()=>{
    setOV(localStorage.getItem('i18nextLng') == "ar"? styles.Arabicright : styles.right)
   },[localStorage.getItem('i18nextLng')])

  const { t } = useTranslation();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div
            className={selected === 1 ? styles.heading : styles.sub_heading}
            onClick={() => setSelected(1)}
          >
           {t('home.ourValues.OurVal')}
          </div>
          <div
            className={selected === 2 ? styles.heading : styles.sub_heading}
            onClick={() => setSelected(2)}
          >
          {t('home.ourValues.ourVision')}
          </div>
        </div>
        <div className={ov}>
          <div className={styles.right_line}></div>
          <div className={styles.right_heading}>
            {selected === 1 ?   t('home.ourValues.selectHeading') : t('home.ourValues.otherHeading')}
          </div>
          <div className={styles.right_sub_heading}>
            {selected === 1
              ? t('home.ourValues.selectDescription')
              : t('home.ourValues.otherDescription') 
              }
          </div>
        </div>
      </div>
    </>
  );
};

export default OurValues;
