import React from "react";
import Testimonial from "../../resuable/testimonials/Testimonial";
import Heading from "../../components/Heading/Heading";
import ImageBoxRight from "../../components/ImageBoxRight/ImageBoxRight";
import ImageBoxLeft from "../../components/ImageBoxLeft/ImageBoxLeft";
import Trusted from "../../components/TrustedByCompany/Trusted";
import Card from "../../resuable/cards/Card";
import Investment from "../../components/InvestmentOpp/Investment";

import block from "../../images/about/blo.jpg";
import terrazzoTiles from "../../images/about/terrazzoTiles.jpg";
import aboutscreen from "../../images/about/aboutscreen.jpg";
import interlocks from "../../images/about/interlocks.jpg";
import pavers from "../../images/about/pavers.png";

import message from "../../images/about/message.svg";
import vision from "../../images/about/vision.svg";
import vision_big from "../../images/about/vision.jpg";
import message_big from "../../images/about/message.jpg";
import value_big from "../../images/about/value.jpg";
import Helper_numbers from "../../resuable/helper_numbers/Helper_numbers";
import CompanySlider from "../../resuable/company_slider/CompanySlider";

import img1 from "../../images/const1.jpg";
import img2 from "../../images/const2.jpg";

const Omrania_material = () => {
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
        heading1="Al-Omrania Materials Company"
        sub_heading="Al-Omrania Building Materials Company is a pioneer in the production and manufacturing of essential construction materials in the Kingdom of Saudi Arabia."
        button="Get started "
        page="Omrania_material"
      />
      <Heading
      page="Omrania_material"
        heading1="about omrania materials"
        heading2="Saudi Building Icon: Al-Omrania Materials Company"
        description1="Established in 1972, Omrania Materials Company has since secured a leading position in the production of essential building materials in the Kingdom of Saudi Arabia. Our vision is to continuously meet the market's needs by delivering high-quality and efficient products for various construction projects. With a distinguished history spanning over half a century, we commit to providing reliable solutions in the construction sector, including tiles, blocks, interlock pavers, and pavements. Our company has become a preferred choice for both government and private projects within the Kingdom. We adhere to the highest standards of quality and safety, leveraging modern technology and a spirit of innovation to offer products distinguished by efficiency and durability. Our factories showcase a strong commitment to quality through the establishment of advanced laboratories for monitoring and confirming quality, based on both international and local technical specifications."
        description2="
                We take pride in our commitment to high standards, including:
                
                - American Society for Quality Testing Specifications.
                - British Standard Tests.
                - Saudi Standards, Metrology, and Quality Organization.
                
                We continue to strive for continuous improvement and innovation to achieve the highest levels of customer satisfaction in the Kingdom of Saudi Arabia, maintaining our position at the forefront of the construction materials sector."
      />

      <Card
      page="Omrania_material"
        image1={vision_big}
        icon1={vision}
        heading1="Our Vision"
        subHeading1="We aim for sustainable leadership in the construction materials industry through continuous development. We exceed expectations by delivering distinguished products and consistently seek innovation."
        image2={message_big}
        icon2={message}
        heading2="Our Message"
        subHeading2="At Al-Omrania , we go beyond expectations through uniqueness and innovation in the construction materials industry. Our mission propels us towards the future, where we commit to achieving excellence and supremacy in the construction sector."
        image3={value_big}
        icon3={vision}
        heading3="QUALITY & SAFETY"
        subHeading3="The Omraniya factory was established on clear foundations and a comprehensive vision, so it adopted quality as a cornerstone. The management devoted its efforts and focused on quality to ensure obtaining an international Saudi product."
      />

      <Heading
        heading2="omrania materials company"
        description1="A pioneer in the production of terrazzo, cement tiles, and soles, as well as blocks, interlocks, and pavers in the Middle East region, adhering to the highest international and local standards, specifications, and certifications."
       page="Omrania_material_heading2"
      />

      {/* <Trusted /> */}
      <ImageBoxLeft
        imageSrc={terrazzoTiles}
        heading="Terrazzo Tiles"
        text="A pioneer in the production of terrazzo, cement tiles, and soles, as well as blocks, interlocks, and pavers in the Middle East region, adhering to the highest international and local standards, specifications, and certifications."
        buttonText="read more"
        page="Omrania_material"
      />
      <ImageBoxRight
        imageSrc={block}
        heading="Block"
        text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudayfer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
        buttonText="read more"
        page="Omrania_material"
      />
      <ImageBoxLeft
        imageSrc={interlocks}
        heading="interlock"
        text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudayfer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
        buttonText="read more"
        page="Omrania_material_ImageBoxLeft2"
      />
      <ImageBoxRight
        imageSrc={pavers}
        heading="pavers"
        text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudayfer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
        buttonText="read more"
        page="Omrania_material_ImageBoxRight2"
      />


<Heading
        heading1="Partner with OMRANIA CRUSHER"
        heading2="PRODUCTS WE WERE PART OF "
        page="Omrania_material_heading6"
      />
      

      <CompanySlider items={sliderItems} />
      <Heading
        heading1="Partner with OMRANIA CRUSHER"
        heading2="PRODUCTS WE WERE PART OF"
        page="Omrania_material_heading5"
      />

     

      <CompanySlider items={sliderItems} />

      <Heading
        heading1="Partner with OMRANIA for concrete"
        heading2="Testimonials"
        description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
      page="Omrania_material_heading4"
      />
      <br/>

      <Testimonial  page="Omrania_material"/>
      <Helper_numbers page="Omrania_material" />
    </div>
  );
};

export default Omrania_material;
