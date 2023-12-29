import React from 'react'
import styles from './ImageBox.module.css';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Experience62 = ({ imageSrc, heading, text, buttonText ,page }) => {

    const { t } = useTranslation();
    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src={imageSrc} alt="" />
                </div>
                <div className={styles.right}>
                    <div className={styles.right_heading}>
                        {t(`${page}.experience62.heading`)}
                        <div className={styles.right_line}></div>
                    </div>
                    <div className={styles.right_text}>{t(`${page}.experience62.text`)}</div>
                    <Link to='/contact'>
                        <div className={styles.right_button}>{t(`${page}.experience62.buttonText`)}</div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Experience62