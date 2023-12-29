import React from 'react'
import styles from './ImageBox.module.css';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const ImageBoxRight = ({ imageSrc, heading, text, buttonText ,page }) => {
    
    
    const {t} = useTranslation()
    return (
        <>
            <div className={styles.container}>

                <div className={styles.right}>
                    <div className={styles.right_heading}>
                        {t(`${page}.imageBoxRight.heading`)} 
                        <div className={styles.right_line}></div>
                    </div>
                    <div className={styles.right_text}>{t(`${page}.imageBoxRight.text`)} </div>
                    <Link to='/contact'>
                        <div className={styles.right_button}>{t(`${page}.imageBoxRight.buttonText`)}</div>
                    </Link>
                </div>

                <div className={styles.left}>
                    {/* <img src='https://thumbs.dreamstime.com/b/bengal-tiger-tige-basking-sun-zoo-51748104.jpg' alt="" /> */}
                    <img src={imageSrc} alt="" />
                </div>
            </div>
        </>
    )
}

export default ImageBoxRight