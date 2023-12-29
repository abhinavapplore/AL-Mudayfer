import React from 'react'
import styles from './Triplet.module.css'

import social from '../../images/about/social.jpg'
import national from '../../images/about/national.jpg'
import environmental from '../../images/about/environmental.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Triplet = ({
    img1,
    img2,
    img3,
    heading1,
    description1,
    button
}) => {
    const { t } = useTranslation();

    return (
        <>
            <div className={styles.container}>
                {/* LEFT */}
                <div className={styles.left}>
                    <img src={social} alt="" />
                    <div className={styles.content}>
                        <div className={styles.content_heading}>
                        {t('about.triplet.social.heading')}
                            <div className={styles.under__line}></div>
                        </div>
                        <div className={styles.content_sub_heading}>
                        {t('about.triplet.social.sub_heading')}                        </div>
                        <Link to='/social_responsibility'>
                            <div className={styles.content_button}>{t('about.triplet.social.button')} </div>
                        </Link>
                    </div>
                </div>

                {/* RIGHT */}
                <div className={styles.right}>
                    <div className={styles.top}>
                        <img src={national} alt="" />
                        <div className={styles.content}>
                            <div className={styles.content_heading}>
                            {t('about.triplet.national.heading')}
                                <div className={styles.under__line}></div>
                            </div>

                            <Link to='/national_responsibility'>
                                <div className={styles.content_button}>{t('about.triplet.national.heading')}</div>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <img src={environmental} alt="" />
                        <div className={styles.content}>
                            <div className={styles.content_heading}>
                            {t('about.triplet.environmental.heading')}
                                <div className={styles.under__line}></div>
                            </div>
                            <Link to='/environmental_responsibility'>
                                <div className={styles.content_button}>{t('about.triplet.environmental.button')}</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Triplet