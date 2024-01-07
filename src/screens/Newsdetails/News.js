import React, { useEffect, useState } from "react";
import styles from "./News.module.css";
import Investment from "../../components/InvestmentOpp/Investment";
import media1 from "../../images/media/media1.png";
import media2 from "../../images/media/media2.png";
import Heading from "../../components/Heading/Heading";
import Testimonial from "../../resuable/testimonials/Testimonial";
import ImageBoxRight from "../../components/ImageBoxRight/ImageBoxRight";
import board from "../../images/home/board.jpg";
import { Link, useParams } from "react-router-dom";
import investscreen from "../../images/media/mediascreen.jpg";
import Slider from "../../resuable/slider/Slider";
import worker1 from "../../images/join/worker1.png";
import worker2 from "../../images/join/worker2.png";
import worker3 from "../../images/join/worker3.png";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from 'react-i18next';


const News = () => {

 
  const { t } = useTranslation()

  const {id}= useParams()




  return (
    <div className={styles.page}>

<Investment
        tag=""   
        heading1="Quality, Reliability, Leadership"
        sub_heading="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
        join={true}
        // heading2={true}
        page={`newsDetailpage${id}`}
        backgroundImage={investscreen}
      />

   
    </div>
  );
};

export default News;
