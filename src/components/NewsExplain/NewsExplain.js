import React from 'react'
import styles from './newsexplain.module.css';
import { Link,useParams } from 'react-router-dom'

import { useTranslation } from 'react-i18next';

const NewsExplain = ({ imageSrc, heading, text, buttonText ,page }) => {

    const {id} = useParams()
    
    const {t} = useTranslation()
    return (
        <>
            <div className={styles.container}>
                <div className={styles.right}>
                    <div className={styles.right_heading}>{t(`${page}.news${id}.heading`)}</div>
                    <div className={styles.right_text}>{t(`${page}.news${id}.text`)}</div>
                    {/* <Link to='/contact'>
                        <div className={styles.right_button}>{t(`${page}.news2.buttonText`)}</div>
                    </Link> */}
                </div>
                <div className={styles.left}>
                    <img src={t(`${page}.news${id}.img`)} alt="" />
                </div>
            </div>
        </>
    )
}

export default NewsExplain;