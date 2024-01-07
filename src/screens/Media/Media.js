import React, { useEffect, useState } from "react";
import styles from "./Media.module.css";
import Investment from "../../components/InvestmentOpp/Investment";
import media1 from "../../images/media/media1.png";
import media2 from "../../images/media/media2.png";
import Heading from "../../components/Heading/Heading";
import Testimonial from "../../resuable/testimonials/Testimonial";
import ImageBoxRight from "../../components/ImageBoxRight/ImageBoxRight";
import board from "../../images/home/board.jpg";
import { Link } from "react-router-dom";
import investscreen from "../../images/media/mediascreen.jpg";
import Slider from "../../resuable/slider/Slider";
import worker1 from "../../images/join/worker1.png";
import worker2 from "../../images/join/worker2.png";
import worker3 from "../../images/join/worker3.png";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from 'react-i18next';


const Media = () => {

  const [slider, setslider] = useState([])
  const { t } = useTranslation()

  const EnSlider = [
    {
      heading: "راعياً ذهبياً لمعرض البناء السعودي 2023",
      subHeading: "شركة أبناء صالح المديفر القابضة راعياً ذهبياً لمعرض البناء السعودي 2023 المقام في تاريخ 06 إلى 09 نوفمبر 2023,",
      image: "https://almudayfer.com/wp-content/uploads/2023/10/%D8%B5%D9%88%D8%B1%D8%A9-%D9%85%D8%B9%D8%B1%D8%B6-%D8%A7%D9%84%D8%A8%D9%86%D8%A7%D8%A1-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A-%D8%A8%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE-1445-04-03-%D9%81%D9%8A-10.57.29.jpg",
      buttonText: "Read More",
      date: "November 9, 2023",
      index:1
    },
    {
      heading: "Saleh Almudayfer Sons Holding company participated in the Saudi building and construction exhibition 2022",
      subHeading: "In order to keep pace with the continuous development, and to promote the kingdom’s Vision 2030 to achieve a diversified and prosperous economy We continue to play an active role in development Our companies were present at the Saudi building and construction exhibition 2022 under the umbrella of the most prestigious brand in the construction world",
      image: "https://almudayfer.com/wp-content/uploads/2022/11/%D8%B5-2.jpg",
      buttonText: "Read More",
      date: "November 9, 2022",
      index:2
    },
    {
      heading: "The Launch Of The New Logos",
      subHeading: "The selection of the new logos of the Group’s companies reflects and enhances the confidence and reputation gained by our esteemed customers throughout our service to them for more than half a century throughout the Kingdom.",
      image: "https://almudayfer.com/wp-content/uploads/2022/03/%D8%A7%D9%84%D9%87%D9%88%D9%8A%D8%A9-2-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9.jpg",
      buttonText: "Read More",
      date: "March 1, 2022",
      index:3
    },
    {
      heading: "راعياً ذهبياً لمعرض البناء السعودي 2023",
      subHeading: "شركة أبناء صالح المديفر القابضة راعياً ذهبياً لمعرض البناء السعودي 2023 المقام في تاريخ 06 إلى 09 نوفمبر 2023,",
      image: "https://almudayfer.com/wp-content/uploads/2023/10/%D8%B5%D9%88%D8%B1%D8%A9-%D9%85%D8%B9%D8%B1%D8%B6-%D8%A7%D9%84%D8%A8%D9%86%D8%A7%D8%A1-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A-%D8%A8%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE-1445-04-03-%D9%81%D9%8A-10.57.29.jpg",
      buttonText: "Read More",
      date: "November 9, 2023",
      index:1
    },
    {
      heading: "Saleh Almudayfer Sons Holding company participated in the Saudi building and construction exhibition 2022",
      subHeading: "In order to keep pace with the continuous development, and to promote the kingdom’s Vision 2030 to achieve a diversified and prosperous economy We continue to play an active role in development Our companies were present at the Saudi building and construction exhibition 2022 under the umbrella of the most prestigious brand in the construction world",
      image: "https://almudayfer.com/wp-content/uploads/2022/11/%D8%B5-2.jpg",
      buttonText: "Read More",
      date: "November 9, 2022",
      index:2
    },
   
  ]
  const ArSlider = [
    {
      image: "https://almudayfer.com/wp-content/uploads/2023/10/%D8%B5%D9%88%D8%B1%D8%A9-%D9%85%D8%B9%D8%B1%D8%B6-%D8%A7%D9%84%D8%A8%D9%86%D8%A7%D8%A1-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A-%D8%A8%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE-1445-04-03-%D9%81%D9%8A-10.57.29.jpg",
      heading: "راعياً ذهبياً لمعرض البناء السعودي 2023",
      subHeading: "شركة أبناء صالح المديفر القابضة راعياً ذهبياً لمعرض البناء السعودي 2023 المقام في تاريخ 06 إلى 09 نوفمبر 2023,",
      buttonText: "اعرف المزيد عن",
      date: "November 9, 2023",
      index:1
    },
    {
      image: "https://almudayfer.com/wp-content/uploads/2022/11/%D8%B5-2.jpg",
      heading: "تاجر المواد",
      subHeading: "من أجل مواكبة التطور المستمر وتعزيز رؤية المملكة 2030 لتحقيق اقتصاد متنوع ومزدهر، نواصل اللعب دورًا فعّالًا في التطوير. كانت شركاتنا حاضرة في معرض البناء والإنشاءات السعودي 2022 تحت مظلة أرقى العلامات التجارية في عالم البناء.",
      buttonText: "اعرف المزيد عن",
      date: "November 9, 2022",
      index:2
    },
    {
      image: "https://almudayfer.com/wp-content/uploads/2022/03/%D8%A7%D9%84%D9%87%D9%88%D9%8A%D8%A9-2-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9.jpg",
      heading: "تاجر المواد",
      subHeading: "اختيار شعارات جديدة لشركات المجموعة يعكس ويعزز الثقة والسمعة التي اكتسبتها من قبل عملائنا الكرام على مدى خمسة عقود في جميع أنحاء المملكة.",
      buttonText: "اعرف المزيد عن",
      date: "November 9, 2022",
      index:3
    },
    {
      image: "https://almudayfer.com/wp-content/uploads/2022/11/%D8%B5-2.jpg",
      heading: "تاجر المواد",
      subHeading: "من أجل مواكبة التطور المستمر وتعزيز رؤية المملكة 2030 لتحقيق اقتصاد متنوع ومزدهر، نواصل اللعب دورًا فعّالًا في التطوير. كانت شركاتنا حاضرة في معرض البناء والإنشاءات السعودي 2022 تحت مظلة أرقى العلامات التجارية في عالم البناء.",
      buttonText: "اعرف المزيد عن",
      date: "November 9, 2022",
      index:2
    },
    {
      image: "https://almudayfer.com/wp-content/uploads/2023/10/%D8%B5%D9%88%D8%B1%D8%A9-%D9%85%D8%B9%D8%B1%D8%B6-%D8%A7%D9%84%D8%A8%D9%86%D8%A7%D8%A1-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A-%D8%A8%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE-1445-04-03-%D9%81%D9%8A-10.57.29.jpg",
      heading: "راعياً ذهبياً لمعرض البناء السعودي 2023",
      subHeading: "شركة أبناء صالح المديفر القابضة راعياً ذهبياً لمعرض البناء السعودي 2023 المقام في تاريخ 06 إلى 09 نوفمبر 2023,",
      buttonText: "اعرف المزيد عن",
      date: "November 9, 2023",
      index:1
    },
    
  ]


  useEffect(() => {
    const storedLanguage = localStorage.getItem('i18nextLng');
    setslider(storedLanguage === 'ar' ? ArSlider : EnSlider)
  }, [localStorage.getItem('i18nextLng')])


  return (
    <div className={styles.page}>
      <Investment
        backgroundImage={investscreen}
        heading1="Media Center"
        sub_heading="Always be close to us and part of our journey and get what you want from it’s source."
        media={true}
        page="media"
        button={true}
      />
      <Heading
        // heading1="Partner with Al-Mudayfer"
        heading2="News"
        description1="The most important developments about and about the group."
        page="media"
      />

      <Slider cards={slider} />
      <div className={styles.media_section}>
        <div className={styles.media_kit}>
          <div className={styles.right}>
            <div className={styles.right_heading}>{t(`media.media_kit1.right_heading`)}</div>
            <div className={styles.right_sub_heading}>{t(`media.media_kit1.right_sub_heading1`)}</div>
            <div className={styles.right_sub_heading}>{t(`media.media_kit1.right_sub_heading2`)}</div>
            <div className={styles.right_sub_heading}>{t(`media.media_kit1.right_sub_heading3`)}</div>
            {/* <p className={styles.description}>
            {t(`media.media_kit1.description`)}
            </p> */}
            <div className={styles.buttonArrow}>
              {t(`media.media_kit1.buttonArrow.text`)}
              <div className={styles.arrow}>
                <BsArrowRight />
              </div>
            </div>
          </div>
          <div className={styles.left}>
            <img src={media1} alt="" />
          </div>
        </div>
        <div className={styles.media_kit}>
          <div className={styles.left}>
            <img src={media2} alt="" />
          </div>
          <div className={styles.right}>
            <div className={styles.right_heading}> {t(`media.media_relationship.right_heading`)}</div>
            <p className={styles.description}>
              {t(`media.media_relationship.description`)}
            </p>
            <div className={styles.buttonArrow}>
              {t(`media.media_relationship.buttonArrow.text`)}
              <Link to="/contact">
                <div className={styles.arrow}>
                  <BsArrowRight />
                </div>
                </Link>
            </div>
          </div>
        </div>
      </div>

      <Investment
        tag="PRESS RELEASE"
        heading1="Quality, Reliability, Leadership"
        sub_heading="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
        join={true}
        page="mediaInvest"
      />
    </div>
  );
};

export default Media;
