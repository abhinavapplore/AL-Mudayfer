import React from 'react'
import styles from './ImageBox.module.css';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Experience62Left = ({ imageSrc, heading, text, buttonText ,page }) => {

    const {t} = useTranslation()
    return (
        <>
            <div className={styles.container}>
                <div className={styles.right}>
                    <div className={styles.right_heading}>{t('environmental.experience62.heading')}</div>
                    <div className={styles.right_text}>{t('environmental.experience62.text')}</div>
                    <Link to='/contact'>
                        <div className={styles.right_button}>{t('environmental.experience62.buttonText')}</div>
                    </Link>
                </div>
                <div className={styles.left}>
                    <img src={imageSrc} alt="" />
                </div>
            </div>
        </>
    )
}

export default Experience62Left