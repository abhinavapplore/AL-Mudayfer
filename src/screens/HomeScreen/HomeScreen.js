import React, { useEffect, useState } from "react";
import NewsHealdine from "../../components/NewsHeadline/NewsHeadline";
import ImageBoxLeft from "../../components/ImageBoxLeft/ImageBoxLeft";
import Company from "../../components/Company/Company";
import ImageBoxRight from "../../components/ImageBoxRight/ImageBoxRight";
import Investment from "../../components/InvestmentOpp/Investment";
import Experience62 from "../../components/Experience62/Experience62";
import Heading from "../../components/Heading/Heading";
import Timeline from "../../components/Timeline/Timeline";
import Trusted from "../../components/TrustedByCompany/Trusted";
import Milestone from "../../components/Milestone/Milestone";
import OurValues from "../../components/Ourvalues/OurValue";
import ConsHeading from "../../components/ConsHeading/ConsHeading";
import homescreen from "../../images/home/homescreen.jpg";
import employment from "../../images/home/employment.jpg";
import exp from "../../images/home/exp.jpg";
import board from "../../images/home/board.jpg";
import invest from "../../images/home/ourvalue.jpg";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Experience62New from "../../components/Experience62new/Experience62new";

const HomeScreen = () => {

const {t} = useTranslation()
 

  return (
    <>
      <Investment
        backgroundImage={homescreen}
        heading1="AL-MUDAYFER"
        heading2="Holding"
        sub_heading="The name that has been associated with building and construction works for development monuments over generations from the Kingdom of Saudi Arabia and to the Middle East."
        button="Know More "
        page="home"
      />
  
    <Heading
        heading1="Partner with AL-MUDAYFER"
        heading2="The BUILDING & CONSTRUCTION EXPERT"
        description1="The Sons of Saleh Almudayfer Sons Holding  Group is characterized by leadership and sustainability in the business and investment world. As a successful investor, the group seeks diversification and sustainable expansion, with a focus on innovation and the development of new investment models. With its distinguished history, the group remains committed to excellence and leadership, achieving excellence in various aspects of its business and participating as a key member in a leading alliance of prominent investment companies in the region."
        page="home"
      />
   
      <Milestone />

     <Experience62New
     imageSrc={exp}
     page="home"
     />
  

      {/* <Experience62
        imageSrc={exp}
        heading="Experience 62+ Years"
        text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
        buttonText="Learn More"
        page="home"
      /> */}

      <Trusted trust={t('home.trust')}/>
      
      <OurValues 
      selectheading=" Quality, Reliability, Leadership"
      selectdescription ="We invested in building a nation, and in developing a human being,so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
      otherheading="Vision"
      otherdescription ="Striving for excellence in the world of investment and developing a global model for success, with a focus on continuous evolution and the enhancement of innovative values."
      />
      <ConsHeading />

      <ImageBoxRight
        imageSrc={board}
        heading="the board of directors"
        text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
        buttonText="Get to know"
        page="home"
      />
      <Company
        backgroundImage={invest}
        heading1="INVESTMENT"
        heading2="OPPORTUNITIES"
        sub_heading="The name that has been associated with building and construction works for development monuments over generations from the Kingdom of Saudi Arabia and to the Middle East."
        button="Know More "
        page="home"
      />
      <ImageBoxLeft
        imageSrc={employment}
        heading="Employment Portal"
        text="Joining the work community of Saleh Al-Mudaifer Sons Holding Group companies is an opportunity that we are proud to offer to Saudi youth of all abilities and backgrounds, as the group’s work is diverse. We consider those working with us as our extended family in an ideal work environment that guarantees obtaining many job benefits and practical experiences."
        buttonText="know more"
        page="home"
      />
   
      <NewsHealdine />
    </>
  );
};

export default HomeScreen;
