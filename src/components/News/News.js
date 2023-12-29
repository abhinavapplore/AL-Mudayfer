import React from 'react'
import styles from './News.module.css'
import girls from '../../images/girls.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Accordion from '../Accordian/Accordian';


const NewsCards = ({page}) => {

  const { t } = useTranslation();

  const headlines = [
    "All news" , "Latest news"
  ];

  return (
    <>
      <div className={styles.container}>

    


<div  >
<Accordion headlines={headlines}/>
</div>

        

<div className={styles.const_container} style={{backgroundImage: `url('https://almudayfer.com/wp-content/uploads/2023/10/%D8%B5%D9%88%D8%B1%D8%A9-%D9%85%D8%B9%D8%B1%D8%B6-%D8%A7%D9%84%D8%A8%D9%86%D8%A7%D8%A1-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A-%D8%A8%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE-1445-04-03-%D9%81%D9%8A-10.57.29.jpg')`,
  }}>
  <div className={styles.bottom}>
    <div className={styles.date}>{t(`${page}.testimonial.date`)}</div>
    <div className={styles.headline}> (العربية) راعياً ذهبياً لمعرض البناء السعودي 2023 </div>
    <div className={styles.details}> Sorry, this entry is only available in Arabic. </div>
    <div className={styles.readmore}>
      <Link to='/newsDetails/1'>
        {t(`${page}.testimonial.read_more`)}
      </Link>
    </div>
    <div className={styles.line}></div>
  </div>
</div>


        
        <div className={styles.const_container} style={{backgroundImage: `url('https://almudayfer.com/wp-content/uploads/2022/11/%D8%B5-2.jpg')`}}>
          <div className={styles.bottom}>
          <div className={styles.date}>{t(`${page}.testimonial.date`)}</div>
          <div className={styles.headline}> The launch of the new logos</div>
          <div className={styles.details}> New Logos The selection of the new logos of the Group's </div>
          <div className={styles.readmore}>
          <Link to='/newsDetails/2'>
            {t(`${page}.testimonial.read_more`)}
            </Link>
          </div>
            
            <div className={styles.line}></div>
          </div>
        </div> 


        
        <div className={styles.const_container} style={{backgroundImage: `url('https://almudayfer.com/wp-content/uploads/2022/03/%D8%A7%D9%84%D9%87%D9%88%D9%8A%D8%A9-2-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9.jpg')`}}>
          <div className={styles.bottom}>
          <div className={styles.date}>{t(`${page}.testimonial.date`)}</div>
          <div className={styles.headline}> Saleh Almudayfer Sons Holdin</div>
          <div className={styles.details}> In order to keep pace with the continuous development</div>
          <div className={styles.readmore}>
          <Link to='/newsDetails/3'>
            {t(`${page}.testimonial.read_more`)}
            </Link>
          </div>
            
            <div className={styles.line}></div>
          </div>
        </div> 

      </div>
    </>
  )
}

export default NewsCards