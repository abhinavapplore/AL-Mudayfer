import React from 'react'
import styles from './Media.module.css'
import Investment from '../../components/InvestmentOpp/Investment'
import mediascreen from '../../images/media/mediascreen.jpg'
import Heading from '../../components/Heading/Heading'
import Testimonial from '../../resuable/testimonials/Testimonial'
import ImageBoxRight from '../../components/ImageBoxRight/ImageBoxRight'
import board from '../../images/home/board.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import NewsCards from '../../components/News/News'

const Media = () => {
    const { t } = useTranslation();
    return (
        <>
            <Investment
                backgroundImage={mediascreen}
                heading1="media center"
                // heading2="contact us"
                sub_heading="Always be close to us and part of our journey and get what you want from it’s source."
                button="get started"
                page="media"
                
            />
            <Heading
                heading1="Partner with "
                heading2="News"
                description1="The most important developments about and about the group."
                page="media"
            />
            <NewsCards page="media" />
            
{/* 
            <Link to='/'>
                <div className={styles.read_more}>
              {t('media.readMoreLink')}
                </div>
            </Link> */}

            <div className={styles.media_kit}>
                <div className={styles.left}>
                    <img src={board} alt="" />
                </div>
                <div className={styles.right}>
                    <div className={styles.right_heading}> {t('media.mediaKit.heading')}</div>
                    <div className={styles.right_sub_heading}>{t('media.mediaKit.Logo')}</div>
                    <div className={styles.right_sub_heading}>{t('media.mediaKit.Assets')}</div>
                    <div className={styles.right_sub_heading}>{t('media.mediaKit.Management')}</div>
                    <Link to='/contact'>
                        <div className={styles.right_button}>{t('media.mediaKit.button')}</div>
                    </Link>
                </div>
            </div>

            <div className={styles.media_relaionship}>
                <div className={styles.left}>
                    <div className={styles.left_heading}>
                    {t('media.mediaRelationship.heading')}
                    </div>
                    <div className={styles.left_subheading}>
                    {t('media.mediaRelationship.subHeading')}                    </div>
                    <Link to="/contact">
                        <div className={styles.left_button}>  {t('media.mediaRelationship.button')} </div>
                    </Link>
                </div>
                <div className={styles.right}>
                    <img src={board} alt="" />
                </div>
            </div>


            <div className={styles.blue_board}>
                <div className={styles.heading}>{t('media.blueBoard.heading')}   </div>
                <div className={styles.sub_heading}>{t('media.blueBoard.subHeading')} </div>

                <div className={styles.white_board}>
                    <div className={styles.white_heading}>
                    {t('media.blueBoard.whiteBoard.whiteHeading')}
                    </div>
                    <div className={styles.white_sub_heading}>
                    {t('media.blueBoard.whiteBoard.whiteSubHeading')}                    </div>
                </div>
            </div>

        </>
    )
}

export default Media