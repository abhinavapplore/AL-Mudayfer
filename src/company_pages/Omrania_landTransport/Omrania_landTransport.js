import React, { useEffect, useState } from 'react'
import Testimonial from '../../resuable/testimonials/Testimonial'
import Heading from '../../components/Heading/Heading'
import ImageBoxRight from '../../components/ImageBoxRight/ImageBoxRight'
import ImageBoxLeft from '../../components/ImageBoxLeft/ImageBoxLeft'
import Trusted from '../../components/TrustedByCompany/Trusted'
import Card from '../../resuable/cards/Card'
import Investment from '../../components/InvestmentOpp/Investment'

import block from '../../images/about/blo.jpg'
import landTransportationByTruck from '../../images/about/landTransportByTruck.jpg'
import aboutscreen from '../../images/about/aboutscreen.jpg'
import interlocks from '../../images/about/interlocks.jpg'
import pavers from '../../images/about/pavers.png'

import message from '../../images/about/message.svg'
import vision from '../../images/about/vision.svg'
import vision_big from '../../images/about/vision.jpg'
import message_big from '../../images/about/message.jpg'
import value_big from '../../images/about/value.jpg'
import Helper_numbers from '../../resuable/helper_numbers/Helper_numbers'
import CompanySlider from '../../resuable/company_slider/CompanySlider'

import img1 from '../../images/const1.jpg'
import img2 from '../../images/const2.jpg'

const Omrania_landTransport = () => {

    const [arr,setArr] = useState([])
    const sliderItemsEn = [
        {
            image: img1,
            heading: 'Construction',
            subHeading: 'Origins of Expertise Contracting Est',
        },
        {
            image: img2,
            heading: 'Construction',
            subHeading: 'Badr Al Dosari Contracting Est',
        },
        {
            image: img1,
            heading: 'Construction',
            subHeading: 'Origins of Expertise Contracting Est',
        },
        {
            image: img2,
            heading: 'Construction',
            subHeading: 'Badr Al Dosari Contracting Est',
        },
    ];

    const sliderItemsAr =[
          {
            "image": img1,
            "heading": "البناء",
            "subHeading": "أصول الخبرة للمقاولات"
          },
          {
            "image": img2,
            "heading": "البناء",
            "subHeading": "مؤسسة بدر الدوسري للمقاولات"
          },
          {
            "image": img1,
            "heading": "البناء",
            "subHeading": "أصول الخبرة للمقاولات"
          },
          {
            "image": img2,
            "heading": "البناء",
            "subHeading": "مؤسسة بدر الدوسري للمقاولات"
          }
        ]


        useEffect(()=>{
            setArr( localStorage.getItem('i18nextLng') === "ar"? sliderItemsAr : sliderItemsEn)
           },[arr])
      

    return (
        <>
            <Investment
            page="Omrania_landTransport"
                backgroundImage={aboutscreen}
                heading1="Al-Omrania Materials Company for Land Transport"
                sub_heading="Integrated and innovative solutions specialized in land transportation with the latest technologies. We have provided a ground transportation fleet with the highest standards of safety and security to ensure the preservation of products."
                button="Get started "
            />
            <Heading
            page="Omrania_landTransport"
                heading1="about omrania materials"
                heading2="Al-Omrania Materials Company for Land Transport"
                description1="Due to the significant and continuous economic development,Al-Omrania Land Transportation Company was established to keep pace with progress and provide integrated and innovative solutions specialized in land transportation with the latest technologies. We have introduced a ground transportation fleet with the highest standards of safety and security to ensure the preservation of products. Through continuous planning and the adoption of advanced methods and technologies, the company has gained great trust, established relationships with major companies and brands, and became the optimal solution for transporting raw materials and infrastructure for all factories and contracting companies."
                description2="    
                • It serves as a key driver for the growth of import and export companies by providing international land transportation solutions (partial and full) based on the following principles:
                • We commit to the concept of comprehensive quality in all our operations and services to achieve added value for our customers and stakeholders.
                • We strive to achieve leadership in all aspects of our business by following an approach of innovation, creativity, and future thinking.
                • We adhere to the highest standards of behavior and ethical practices at all levels of the company's operations.
                • We take pride in the high professional conduct and the contribution to the development of the land transportation industry."
            />


            <Card
            page="Omrania_landTransport"
                image1={vision_big}
                icon1={vision}
                heading1="Our Vision"
                subHeading1="Leadership and excellence in product diversity with the highest standards in the field of manufacturing grinding and polishing materials."

                image2={message_big}
                icon2={message}
                heading2="Our Message"
                subHeading2="Commitment to continuous investment in intensifying research and product development."

                image3={value_big}
                icon3={vision}
                heading3="QUALITY & SAFETY"
                subHeading3="The Saudi Grinding and Polishing Materials Factory is licensed by one of the global factories in Italy and holds the German MBA international quality certification."
            />

            <Heading
               page="Omrania_landTransport_heading2"
                heading2="Al-Omrania Materials Company for Land Transport"
                description1="Freight transport by trucks includes the movement of raw materials and products within and outside the Kingdom."
            />

            {/* <Trusted /> */}
            <ImageBoxLeft
            page="Omrania_landTransport"
                imageSrc={landTransportationByTruck}
                heading="Land transportation via trucks"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit consectetur corporis eaque, saepe porro earum beatae? Sunt odit asperiores repellat officia consectetur ab adipisci quia nisi qui, recusandae atque!"
                buttonText="read more"
            />
            {/* <ImageBoxRight
                imageSrc={block}
                heading="Block"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="read more"
            />
            <ImageBoxLeft
                imageSrc={interlocks}
                heading="interlock"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="read more"
            />
            <ImageBoxRight
                imageSrc={pavers}
                heading="pavers"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="read more"
            /> */}


            <Heading
            page="Omrania_landTransport_heading3"
                heading1="Partner with OMRANIA CRUSHER"
                heading2="PRODUCTS WE WERE PART OF"
            />

            <CompanySlider items={arr} />

            <Heading
            page="Omrania_landTransport_heading4"
                heading1="Partner with OMRANIA for concrete"
                heading2="Testimonials"
                description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
            />

            <Testimonial page="Omrania_landTransport" />
            <Helper_numbers />
        </>
    )
}

export default Omrania_landTransport