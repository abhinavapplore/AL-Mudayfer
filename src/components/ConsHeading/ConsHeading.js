import React  from 'react'
import styles from './Cons.module.css';
import { useTranslation } from 'react-i18next';

const ConsHeading = () => {

    const {t} = useTranslation()

    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>{t('home.consHeading.heading')}</div>
                <div className={styles.sub_heading}>
                {t('home.consHeading.subHeading')}
                </div>
            </div>
        </>
    )
}

export default ConsHeading