import React from 'react'
import styles from './Company.module.css'
import { BsArrowRight } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';

const Company = ({ backgroundImage, heading1, heading2, sub_heading, button ,page}) => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    const {t} = useTranslation()

   

    return (
        <>
            <div className={styles.container} >
                <div className={styles.background_image} style={backgroundStyle}>
                    <div className={styles.content}>
                        <div className={styles.heading}>{t(`${page}.company.heading1`)}</div>
                        <div className={styles.heading}>{t(`${page}.company.heading2`)}</div>
                        <div className={styles.heading_line}></div>
                        <div className={styles.sub_heading}>{t(`${page}.company.sub_heading`)}</div>
                        <a href="/investment" >          
                        <div className={styles.button} >{t(`${page}.company.button`)} <BsArrowRight /></div>
                       </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Company