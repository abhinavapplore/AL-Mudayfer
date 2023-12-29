import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import styles from './Investment.module.css';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';



const Investment = ({ backgroundImage, heading1, heading2, sub_heading, button ,page  }) => {

     const {id} = useParams()
  
     
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };


    const eployeentDEsc = " Joining the work community of Saleh Al-Mudaifer Sons Holding Group companies is  an opportunity that we are proud to offer to Saudi youth of all abilities and   backgrounds, as the group’s work is diverse. We consider those working with us as   our extended family in an ideal work environment that guarantees obtaining many job   benefits and practical experiences."
    const employeeARAB = "الإنضمام لمجتمع عمل شركات مجموعة أبناء صالح المديفر القابضة فرصة نعتز أن نقدمها للشباب السعودي بكافة كفائته وخلفياته ، حيث أن أعمال المجموعة متنوعة نعد العاملين معنا كأسرتنا الممتدة في بيئة عمل مثالية تضمن الحصول على العديد من المزايا الوظيفية والخبرات العملية    "
    
    const investerDEsc = "As an investor or entrepreneur with creative and distinct ideas, we integrate with you in the Al-Mudaifer Group, and we are happy to exchange opinions about ideas and  are open to everyone, until we implement projects on reality.  You can now complete the following information to begin your investment journey with Al-Mudaifer Holding, as we will contact you after the initial study"

    const { t } = useTranslation();
  
    return (
        <>
            <div className={styles.container} >

            <div className={styles.content}>
                        <div>
                        {
                            page === "join" ? 
                            <div className={styles.heading} style={{textTransform:'capitalize'}}>{`Join As ${id}`}</div>
                             :
                            <div className={styles.heading} style={{textTransform:'capitalize'}}>{t(`${page}.investment.heading1`)}</div>

                        }
                        {(page !== "invest" && page !== "join" &&  page !== "media" && page !== "SaudiPlayer_polishingMaterials"  && page!== "Omrania_landTransport" && page!=="Omrania_logisticSupport"   && page !== "omraniaCrusher" )  && <div className={styles.heading} style={{textTransform:'capitalize'}}>{ t(`${page}.investment.heading2`)}</div>}

                        </div>

                        {/* <div className={styles.heading_line}></div> */}
                        {
                            localStorage.getItem('i18nextLng') == "en"?
                            <div className={styles.sub_heading}>  {id === "employee" ? eployeentDEsc : (id === "investor" ? investerDEsc : t(`${page}.investment.sub_heading`))}</div>
                            :
                            <div className={styles.sub_heading}>  {id === "employee" ? employeeARAB : (id === "investor" ? investerDEsc : t(`${page}.investment.sub_heading`))}</div>


                        }
                      

                      {
                        page == "join" ? 
                        <a href="#formSection" > 
                       
                        <div className={styles.button}>{t(`${page}.investment.button`)}<span className={styles.arrowspan}><BsArrowRight /></span></div>
                        </a> 
                        :

                        <a href="#homePartner" > 
                       
                        <div className={styles.button}>{t(`${page}.investment.button`)}&nbsp;&nbsp;&nbsp;<span className={styles.arrowspan}> <BsArrowRight /></span></div>
                        </a> 
                      }
                        
                    </div>
                <div className={styles.background_image} style={backgroundStyle}>
                   
                </div>
            </div>

         
            
        </>
    )
}

export default Investment

