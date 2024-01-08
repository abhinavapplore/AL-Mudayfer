import React from 'react'
import styles from './Helper.module.css';

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { useTranslation } from 'react-i18next';


const Helper_numbers = ({page}) => {

    const {t} = useTranslation()

    return (
        <>
            <div className={styles.helper__container}>
                <div className={styles.helper__heading}>
                {t(`${page}.helper_section.heading1`)}
                    <br />
                    {t(`${page}.helper_section.heading2`)}
                </div>
               <div style={{display:'flex',width:'90%',gap:'20px'}}>
               <div className={styles.tab}>
                    <FaPhoneAlt /> &nbsp;   {t(`${page}.helper_section.tab1.content`)}
                </div>
                <div className={styles.tab}>
                    <MdEmail /> &nbsp; {t(`${page}.helper_section.tab2.content`)}
                </div>
                <div className={styles.tab}>
                    <RiWhatsappFill /> &nbsp;  {t(`${page}.helper_section.tab3.content`)}
                </div>
               </div>
            </div>
        </>
    )
}

export default Helper_numbers