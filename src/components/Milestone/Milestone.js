import React from 'react'
import styles from './Milestone.module.css';
import { useTranslation } from 'react-i18next';

const Milestone = () => {

    const {t} = useTranslation()

    return (
        <>
              <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.heading}>{t('Milestone.yr.heading')}</div>
                    <div className={styles.sub_heading}>{t('Milestone.yr.subHeading')}</div>
                </div>

                <div className={styles.box}>
                    <div className={styles.heading}>{t('Milestone.projectsValue.heading')}</div>
                    <div className={styles.sub_heading}>{t('Milestone.projectsValue.subHeading')}</div>
                </div>

                <div className={styles.box}>
                    <div className={styles.heading}>{t('Milestone.annualSpend.heading')}</div>
                    <div className={styles.sub_heading}>{t('Milestone.annualSpend.subHeading')}</div>
                </div>

                <div className={styles.box}>
                    <div className={styles.heading}>{t('Milestone.completedProjects.heading')}</div>
                    <div className={styles.sub_heading}>{t('Milestone.completedProjects.subHeading')}</div>
                </div>
            </div>
        </>
    )
}

export default Milestone