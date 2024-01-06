import React from "react";

import Investment from "../../components/InvestmentOpp/Investment";
import Heading from "../../components/Heading/Heading";
import Milestone from "../../components/Milestone/Milestone";
import Trusted from "../../components/TrustedByCompany/Trusted";
import ImageBoxRight from "../../components/ImageBoxRight/ImageBoxRight";
import ImageBoxLeft from "../../components/ImageBoxLeft/ImageBoxLeft";
import Card from "../../resuable/cards/Card";
import Triplet from "../../resuable/triplet/Triplet";

import block from "../../images/about/block.jpg";
import interlock from "../../images/about/interlock.jpg";
import aboutscreen from "../../images/about/aboutscreen.jpg";
import tiles from "../../images/about/tiles.jpg";
import skirting from "../../images/about/skirting.jpg";
import Testimonial from "../../resuable/testimonials/Testimonial";
import vision from "../../images/about/vision.svg";
import vision_big from "../../images/about/vision.jpg";
import message from "../../images/about/message.svg";
import message_big from "../../images/about/message.jpg";
import value_big from "../../images/about/value.jpg";
import Responsibility from "../../components/About/Responsibility";
import board from "../../images/about/responsiblity.png";
import Timelines from "../../components/Timelines/Timelines";


const About = () => {



  return (
    <div className="page">
      <Investment
        backgroundImage={aboutscreen}
        heading1="Saleh Almudayfer "
        heading2="Sons Holding Company "
        sub_heading="Leader in the manufacture of terrazza tiles, blocks, cement tiles, interlocks and balustrades for more than 50 years in the middle east."
        button="Get started "
        page="about"
      />
      <Heading
        heading1="Partner with Al-Mudayfer"
        heading2="The Building & Construction Experts"
        description1="In the sixties, the Saleh Almudayfer Sons Holding Group embarked on its investment journey by establishing the Omrania Materials Materials Company for building materials. This marked the splendid beginning of an investment history filled with achievements and uniqueness. Since then, the group has preserved its strong legacy and prosperity over the decades, achieving remarkable success in various economic fields."
        description2="Today, the group is recognized as a leading force in the investment sector, characterized by innovation and excellence. Its ambitious investment vision is distinguished by the ability to make smart decisions and foster innovation, making it a key player in a pioneering alliance of the region's foremost investment companies."
        description3="The group's investments span across various sectors, including building materials, concrete, and wooden products."
        description4="These investments reflect a diverse and creative investment journey, contributing effectively to sustainable development. With pride in its long and inspiring history, the Sons of Saleh Al-Mudayfer Holding Group continues to elevate its vision and excel in all areas of its business."
        page="about"
      />

      <Card
        image1={vision_big}
        icon1={vision}
        heading1="Our Vision"
        subHeading1="Striving for excellence in the world of investment and developing a global model for success, with a focus on continuous evolution and the enhancement of innovative values."
        image2={message_big}
        icon2={message}
        heading2="Our Mission"
        subHeading2="To empower individuals and businesses by providing cutting-edge solutions and unparalleled services, fostering sustainable growth and prosperity. We are dedicated to pioneering innovative approaches, maintaining the highest standards of integrity, and making a positive impact on the global landscape."
        image3={value_big}
        icon3={vision}
        heading3="Our Values"
        subHeading3="Excellence, innovation, integrity, and sustainability are the core values that drive our business. We are committed to achieving the highest standards of quality and excellence in all our endeavors. We are dedicated to fostering innovation and creativity, and we are committed to the highest standards of integrity and transparency. We are committed to sustainable development and making a positive impact on the global landscape."
        page="about"
      />

      <Trusted notRequired={true} trusted={true}  page="about" />
      {/* <Heading
        heading1="Partner with Al-Mudayfer"
        heading2="The Building & Construction Experts"
        description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion."
        description2="So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
        description3="Trust our project management experts at Al-Mudafir Holdings from Design to Completion!"
        page="about_testi"
      /> */}
      
      <br/>
      <ImageBoxRight
        imageSrc={board}
        subheading="our responsibility"
        heading="Social, National, Environmental"
        description1="Our responsibility extends beyond business success to encompass a commitment to societal and environmental well-being. We believe in contributing positively to the communities in which we operate, minimizing our environmental footprint, and promoting ethical and sustainable practices."
        description2="Our responsibility is to serve as a catalyst for positive change, fostering social development, and environmental stewardship. Through transparent and accountable actions, we aim to inspire others and be recognized as a responsible corporate citizen dedicated to making a meaningful impact on the world."
        button="Read More"
        background={true}
        page="about"
      />
        <div id="social" style={{height:'2px'}}></div>
      <Triplet page="about" />

      <Heading
      page="abouttesti1"
        heading1="Partner with Al-Mudayfer"
        heading2="Testimonials"
        description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
      />
      <br/>
      <br/>
      <Testimonial page="about" />
      <Heading
      page="abouttesti2"
        heading1="Partner with Al-Mudayfer"
        heading2="Timeline"
        description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
      />
      <Timelines page="about" />
    </div>
  );
};

export default About;
