import React from 'react'
import styles from './experience.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Experience62New = ({ imageSrc, heading, text, buttonText ,page }) => {

    const { t } = useTranslation();
    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                <div className={styles.right_heading}>
                        {t(`${page}.experience62.heading`)}
                        <div className={styles.right_line}></div>
                    </div>
                    <div className={styles.right_text}>{t(`${page}.experience62.text`)}</div>
                    <Link to='/contact'>
                        <div className={styles.right_button}>{t(`${page}.experience62.buttonText`)}</div>
                    </Link>
                   
                </div>
                <div className={styles.right}>
                     <div>
                     <img src={imageSrc} alt="" />
                     </div>
                     <div style={{marginTop:'30px'}}>
                     <img src={imageSrc} alt="" />
                     </div>
                </div>
            </div>
        </>
    )
}

export default Experience62New;