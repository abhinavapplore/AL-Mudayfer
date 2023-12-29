import React from 'react'
import styles from './Heading.module.css';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';


const Heading = ({
    heading1,
    heading2,
    description1,
    description2,
    page
}) => {


    const { t } = useTranslation();

    
    return (
        <>
        {
            page === "timeline" ? 
            <div className={styles.container} >
            <div className={styles.heading1} style={{textTransform:'capitalize'}}> {t(`home.${page}.heading1`)}</div>
            <div className={styles.heading2}>{t(`home.${page}.heading2`)}</div>
            {
                description1 && 
                <div div className={styles.description1}>{t(`home.${page}.description1`)}</div>
            }
            {
                description2 &&  page != "about" && 
                <div className={styles.description2}>{t(`home.${page}.description2`)}</div>
            }
        </div>
            :
            <div className={styles.container} id='homePartner'>
                {
                    page !== "omraniaCrusher_products" && page !== "Omraniaheading2" && page !== "Omrania_material_heading2" && page !=="Omrania_metalPower_heading2" && page !== "SaudiPlayer_polishingMaterials_heading2"  && page !=="Omrania_landTransport_heading2" && page !=="Omrania_logisticSupport_heading2"  && page != "contact" ? <div className={styles.heading1}> {t(`${page}.partner.heading1`)}</div> : null
                }
            
            <div className={styles.heading2}>{t(`${page}.partner.heading2`)}</div>
            {
                description1 &&
                <div div className={styles.description1}>{t(`${page}.partner.description1`)}</div>
            }
            {
                description2 &&  page != "about" && page !== "SaudiPlayer_polishingMaterials" &&
                <div className={styles.description2}>{t(`${page}.partner.description2`)}</div>
            }
        </div>
        }
        
           

        </>
    )
}

export default Heading