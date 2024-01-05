import React from "react";
import Testimonial from "../../resuable/testimonials/Testimonial";
import Heading from "../../components/Heading/Heading";
import ImageBoxRight from "../../components/ImageBoxRight/ImageBoxRight";
import ImageBoxLeft from "../../components/ImageBoxLeft/ImageBoxLeft";
import Trusted from "../../components/TrustedByCompany/Trusted";
import Card from "../../resuable/cards/Card";
import Investment from "../../components/InvestmentOpp/Investment";

import shippingService from "../../images/about/shippingService.jpg";
import storageService from "../../images/about/storageService.jpg";
import distributionService from "../../images/about/distributionService.jpg";
// import interlocks from '../../images/about/interlocks.jpg'
// import pavers from '../../images/about/pavers.png'
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

const Omrania_logisticSupport = () => {
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
        heading1="Al-Omrania Logistics Support Company"
        sub_heading="The Al-Omrania Materials for Logistics Support company is based on core values that it adheres to and contributes to its business growth. These values include integrity, quality, and excellence."
        button="Get started "
        page="Omrania_logisticSupport"
      />
      <Heading
        heading1="about omrania materials"
        heading2="Saudi Building Icon: Al-Omrania Materials Company"
        description1="Established in 2019 as part of the Sons of Saleh Al-Mudayfer Holding Company to keep pace with developments in the logistics sector, especially with the focus on the Kingdom's Vision 2030 and the establishment of a national strategy for transportation and logistics."
        description2="Al-Omrania Logistics, as a subsidiary, excels in planning, implementing, and controlling the flexible and efficient flow and storage of goods between the point of production and the point of consumption, aiming to satisfy the consumer."
        page="Omrania_logisticSupport"
      />

      <Card
      page="Omrania_logisticSupport"
        image1={vision_big}
        icon1={vision}
        heading1="Our Vision"
        subHeading1="Aligning with the Kingdom's Vision 2030, Al-Omrania Logistics serves as a key supporter of logistic activities, playing a fundamental role in driving economic leadership through logistic services."
        image2={message_big}
        icon2={message}
        heading2="Our Message"
        subHeading2="Developing the transportation system in the Kingdom to become a logistics hub connecting the three continents, enhancing sustainable economic development and competitiveness in line with the Kingdom's Vision 2030."
        image3={value_big}
        icon3={vision}
        heading3="QUALITY & SAFETY"
        subHeading3="The Urban Materials Logistics Support Company is based on several core values that it adheres to, contributing to its business growth. These values include: - Integrity - Quality - Excellence"
      />

      <Heading
      page="Omrania_logisticSupport_heading2"
        heading2="Al-Omrania Logistics Support Company"
        description1="No need to worry about your shipping procedures with Al-Omrania for Logistics Support, a trusted shipping agent in the region. With extensive coverage and a vast network of agents, backed by years of experience in the field, we handle shipments whether they are large quantities or just a few kilograms. Whether shipping by air, sea, or land, businesses worldwide entrust us with their cargo. Our experience over the years has helped businesses grow and expand across borders. In addition to shipping, we also commit to assisting with customs clearance and import-export, working alongside you to provide value-added services."
      />

      {/* <Trusted /> */}
      <ImageBoxLeft
        imageSrc={shippingService}
        heading="Shipping services"
        text="No need to worry about your shipping procedures with Al-Omrania for Logistics Support, a trusted shipping agent in the region. With extensive coverage and a vast network of agents, backed by years of experience in the field, we handle shipments whether they are large quantities or just a few kilograms. Whether shipping by air, sea, or land, businesses worldwide entrust us with their cargo. Our experience over the years has helped businesses grow and expand across borders. In addition to shipping, we also commit to assisting with customs clearance and import-export, working alongside you to provide value-added services."
        buttonText="read more"
        page="Omrania_logisticSupport"
      />
      <ImageBoxRight
        imageSrc={storageService}
        heading="Storage services"
        text="We provide storage solutions that meet your requirements. We specialize in storage, offering inventory planning and management services, as well as contracting various logistics services. We also provide inventory analysis services to ensure maximum efficiency in material management and achieve optimal performance for supply and distribution operations."
        buttonText="read more"
        page="Omrania_logisticSupport"
      />
      <ImageBoxLeft
        imageSrc={distributionService}
        heading="Distribution services"
        text="With the trust we've built as a logistics services partner and strategically located warehouses, you can expect easy entry into local markets in the shortest time by working with us. Our extensive network of operations allows us to tailor our fleet to your transportation and logistics service requirements. We can accurately assess the local goods distribution network in terms of size and area, then customize a package that meets all your essential needs."
        buttonText="read more"
        page="Omrania_logisticSupport_ImageBoxLeft2"
      />
      {/* <ImageBoxRight
                imageSrc={pavers}
                heading="pavers"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudayfer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="read more"
            /> */}

      <Heading
        heading1="Partner with OMRANIA CRUSHER"
        heading2="PRODUCTS WE WERE PART OF"
        page="Omrania_logisticSupport_heading3"
      />

      <CompanySlider items={sliderItems} />

      <Heading
      page="Omrania_logisticSupport_heading4"
        heading1="Partner with OMRANIA for concrete"
        heading2="Testimonials"
        description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
      />
<br/>
<br/>
      <Testimonial page="Omrania_landTransport" />
      <Helper_numbers  page="Omrania_material"  />
    </div>
  );
};

export default Omrania_logisticSupport;
