import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import styles from './newshero.module.css';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';




const NewsHero = ({ backgroundImage, heading1, heading2, sub_heading, button, page }) => {


    const { id } = useParams()
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };



    const { t } = useTranslation();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.background_image} style={backgroundStyle}>
                    <div className={styles.content}>
                        <center>
                            <div className={styles.heading} style={{ textTransform: 'capitalize', textAlign: 'center' }}>{t(`newsDetails.news${id}.heading`)}</div>

                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsHero