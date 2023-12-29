import React from 'react'
import styles from './Helper.module.css';

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { useTranslation } from 'react-i18next';



const Helper_numbers = () => {

    const {t} = useTranslation()

    return (
        <>
            <div className={styles.helper__container}>
                <div className={styles.helper__heading}>
                    {t('omraniaCrusher.helper_nums.heading')}
                </div>
                <div className={styles.tab}>
                    <FaPhoneAlt /> &nbsp; {t('omraniaCrusher.helper_nums.phone.text')}
                </div>
                <div className={styles.tab}>
                    <MdEmail /> &nbsp; {t('omraniaCrusher.helper_nums.email.text')}
                </div>
                <div className={styles.tab}>
                    <RiWhatsappFill /> &nbsp;  {t('omraniaCrusher.helper_nums.whatsapp.text')}
                </div>
            </div>
        </>
    )
}

export default Helper_numbers