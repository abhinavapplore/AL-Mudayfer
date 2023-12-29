import React from 'react'
import styles from './ImageBox.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const ImageBoxLeft = ({ imageSrc, heading, text, buttonText, page }) => {

    const {t} = useTranslation()

    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src={imageSrc} alt="" />
                </div>
                <div className={styles.right}>
                    <div className={styles.right_heading}>
                    {t(`${page}.imageBoxLeft.heading`)}
                        <div className={styles.right_line}></div>
                    </div>

                    <div className={styles.right_text}>{t(`${page}.imageBoxLeft.text`)}</div>
                    <Link to='/contact'>
                        <div className={styles.right_button}>{t(`${page}.imageBoxLeft.buttonText`)}</div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ImageBoxLeft;