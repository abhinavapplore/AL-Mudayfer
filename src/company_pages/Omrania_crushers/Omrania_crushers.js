import React from "react";
import Testimonial from "../../resuable/testimonials/Testimonial";
import Heading from "../../components/Heading/Heading";
import ImageBoxRight from "../../components/ImageBoxRight/ImageBoxRight";
import ImageBoxLeft from "../../components/ImageBoxLeft/ImageBoxLeft";
import Trusted from "../../components/TrustedByCompany/Trusted";
import Card from "../../resuable/cards/Card";
import Investment from "../../components/InvestmentOpp/Investment";

import gravel from "../../images/about/gravel.png";
import stone from "../../images/about/stone.png";
import aboutscreen from "../../images/about/aboutscreen.jpg";
import rock from "../../images/about/rock.png";
import skirting from "../../images/about/skirting.jpg";

import message from "../../images/about/message.svg";
import vision from "../../images/about/vision.svg";
import vision_big from "../../images/about/vision.jpg";
import message_big from "../../images/about/message.jpg";
import value_big from "../../images/about/value.jpg";
import Helper_numbers from "../../resuable/helper_numbers/Helper_numbers";
import CompanySlider from "../../resuable/company_slider/CompanySlider";

import img1 from "../../images/const1.jpg";
import img2 from "../../images/const2.jpg";

const Omrania_crushers = () => {
  const sliderItems = [
    {
      image: img1,
      heading: "Construction",
      subHeading: "Origins of Expertise Contracting Est",
    },
    {
      image: img2,
      heading: "Construction",
      subHeading: "Badr Al Dosari Contracting Est",
    },
    {
      image: img1,
      heading: "Construction",
      subHeading: "Origins of Expertise Contracting Est",
    },
    {
      image: img2,
      heading: "Construction",
      subHeading: "Badr Al Dosari Contracting Est",
    },
  ];

  return (
    <div className="page">
      <Investment
        backgroundImage={aboutscreen}
        heading1="Omrania Crusher"
        sub_heading="Leader in the manufacture of terrazza tiles, blocks, cement tiles, interlocks and balustrades for more than 50 years in the middle east."
        button="Get started "
      />
      <Heading
        heading1="about omrania crusher"
        heading2="from the land of saudi arabia"
        description1="From the land of Saudi Arabia... Omrania Crusher.
                Because raw materials are a priority for the success of the industry, we invested in establishing Omrania Crusher in 2004. This investment marks our journey in producing construction materials with high reliability, meeting the highest specifications, and ensuring sustainability.
                We supply the local market with the finest types of gravel in various sizes, which are used in many different cement industries. These materials play a crucial role in development and progress. Omrania Crusher has contributed to the execution of numerous distinguished projects within the Kingdom. Our product quality sets the foundation for the overall quality of the factories, starting with the quality of the crusher materials."
      />

      <Card
        image1={vision_big}
        icon1={vision}
        heading1="Our Vision"
        subHeading1="We aim to provide highly reliable raw materials with extensive distribution in the Saudi market."
        image2={message_big}
        icon2={message}
        heading2="Company Mission"
        subHeading2="Our mission is to meet the supply chain needs for cement products according to the highest standards."
        image3={value_big}
        icon3={vision}
        heading3="QUALITY & SAFETY"
        subHeading3="Implemented a Quality Control department with advanced testing for customized products meeting global standards. A Safety and Security department, managed by a skilled team, ensures meticulous and safe task execution, minimizing risks to property, the environment, and personnel."
      />

      <Heading
        heading2="OMRANIA CRUSHER COMPANY PRODUCTS"
        description1="Our quarries have been selected based on geological factors and meticulous planning. The extraction of materials (gravel, stone, and rock) from the earth is carried out using the best methods, tools, and techniques to ensure the production of a high-quality final product."
      />

      <ImageBoxLeft
        imageSrc={gravel}
        heading="GRAVEL"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit consectetur corporis eaque, saepe porro earum beatae? Sunt odit asperiores repellat officia consectetur ab adipisci quia nisi qui, recusandae atque!"
        buttonText="read more"
      />
      <ImageBoxRight
        imageSrc={stone}
        heading="STONE"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit consectetur corporis eaque, saepe porro earum beatae? Sunt odit asperiores repellat officia consectetur ab adipisci quia nisi qui, recusandae atque!"
        buttonText="read more"
      />
      <ImageBoxLeft
        imageSrc={rock}
        heading="ROCK"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit consectetur corporis eaque, saepe porro earum beatae? Sunt odit asperiores repellat officia consectetur ab adipisci quia nisi qui, recusandae atque!"
        buttonText="read more"
      />
      {/* <ImageBoxRight
                imageSrc={tiles}
                heading="tiles"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudayfer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="read more"
            /> */}

      <Heading
        heading1="Partner with OMRANIA CRUSHER"
        heading2="our products pulse to"
      />

      <CompanySlider items={sliderItems} />

      <Heading
        heading1="Partner with OMRANIA CRUSHER"
        heading2="Testimonials"
        description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
      />

      <Testimonial />
      <Helper_numbers />
    </div>
  );
};

export default Omrania_crushers;
