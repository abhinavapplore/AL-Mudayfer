import React from "react";
import Testimonial from "../../resuable/testimonials/Testimonial";
import Heading from "../../components/Heading/Heading";
import ImageBoxRight from "../../components/ImageBoxRight/ImageBoxRight";
import ImageBoxLeft from "../../components/ImageBoxLeft/ImageBoxLeft";
import Trusted from "../../components/TrustedByCompany/Trusted";
import Card from "../../resuable/cards/Card";
import Investment from "../../components/InvestmentOpp/Investment";

import electrostatic from "../../images/about/electrostatic.jpg";
import punching from "../../images/about/punching.jpg";
import formingMetals from "../../images/about/formingMetals.jpg";
import weldingMaterials from "../../images/about/weldingMaterials.jpg";
import aboutscreen from "../../images/about/aboutscreen.jpg";

import message from "../../images/about/message.svg";
import vision from "../../images/about/vision.svg";
import vision_big from "../../images/about/vision.jpg";
import message_big from "../../images/about/message.jpg";
import value_big from "../../images/about/value.jpg";
import Helper_numbers from "../../resuable/helper_numbers/Helper_numbers";
import CompanySlider from "../../resuable/company_slider/CompanySlider";

import img1 from "../../images/const1.jpg";
import img2 from "../../images/const2.jpg";

const Omrania_metalPower = () => {
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
        heading1="Al-Omrania Materials Company for Metal Forming"
        sub_heading="Al-Omrania Materials Metal Forming Company is a leader in the field of metal forming, providing modern and contemporary engineering solutions that meet the needs of various metal forming domains."
        button="Get started "
      />
      <Heading
        heading1="about AL-Omrania materials"
        heading2="Al-Omrania Materials Company for Metal Forming"
        description1="Al-Omrania Metal Forming Company was established in 2018. It is a specialized company in metal forming, providing modern and contemporary engineering solutions in all fields of metal forming. The company boasts a technical team with the highest qualifications and experiences, utilizing the latest advanced technologies and adhering to industrial methods with the highest standards."
      />

      <Card
        image1={vision_big}
        icon1={vision}
        heading1="Our Vision"
        subHeading1="To innovate from metals an integrated modern life, building close relationships with our customers, and working together to enhance the use of the metal of the future."
        image2={message_big}
        icon2={message}
        heading2="Our Message"
        subHeading2="We strive to contribute to building the future by providing our customers with high-quality metals that can be used in various advanced fields"
        image3={value_big}
        icon3={vision}
        heading3="QUALITY & SAFETY"
        subHeading3="Precision in executing work with the finest global machinery and the most advanced technology, providing the customer with an exceptional view of both the work and the product."
      />

      <Heading
        heading2="omrania materials company"
        description1="The company offers a number of precise and high-quality artistic works, including:

                1. Electrostatics
                2. Punching
                3. Forming various metal materials
                4. Welding of metal materials"
      />

      {/* <Trusted /> */}
      <ImageBoxLeft
        imageSrc={electrostatic}
        heading="Electrostatic"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit consectetur corporis eaque, saepe porro earum beatae? Sunt odit asperiores repellat officia consectetur ab adipisci quia nisi qui, recusandae atque!"
        buttonText="read more"
      />
      <ImageBoxRight
        imageSrc={punching}
        heading="Punching"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit consectetur corporis eaque, saepe porro earum beatae? Sunt odit asperiores repellat officia consectetur ab adipisci quia nisi qui, recusandae atque!"
        buttonText="read more"
      />
      <ImageBoxLeft
        imageSrc={formingMetals}
        heading="Forming various metals"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit consectetur corporis eaque, saepe porro earum beatae? Sunt odit asperiores repellat officia consectetur ab adipisci quia nisi qui, recusandae atque!"
        buttonText="read more"
      />
      <ImageBoxRight
        imageSrc={weldingMaterials}
        heading="Welding of metal materials"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit consectetur corporis eaque, saepe porro earum beatae? Sunt odit asperiores repellat officia consectetur ab adipisci quia nisi qui, recusandae atque!"
        buttonText="read more"
      />

      <Heading
        heading1="Welding equipment for the Al-Omrania Crusher Company"
        heading2="PRODUCTS WE WERE PART OF"
      />

      <CompanySlider items={sliderItems} />

      <Heading
        heading1="Partner with OMRANIA for concrete"
        heading2="Testimonials"
        description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
      />

      <Testimonial />
      <Helper_numbers />
    </div>
  );
};

export default Omrania_metalPower;
