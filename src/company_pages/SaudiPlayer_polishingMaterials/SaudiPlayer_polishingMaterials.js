import React, { useEffect, useState } from 'react'
import Testimonial from '../../resuable/testimonials/Testimonial'
import Heading from '../../components/Heading/Heading'
import ImageBoxRight from '../../components/ImageBoxRight/ImageBoxRight'
import ImageBoxLeft from '../../components/ImageBoxLeft/ImageBoxLeft'
import Trusted from '../../components/TrustedByCompany/Trusted'
import Card from '../../resuable/cards/Card'
import Investment from '../../components/InvestmentOpp/Investment'

import stone from '../../images/about/stone1.jpg'
import castIron from '../../images/about/castIron.jpg'
import metal from '../../images/about/metal.jpg'
import sSteel from '../../images/about/sSteel.jpg'
import aboutscreen from '../../images/about/aboutscreen.jpg'

import message from '../../images/about/message.svg'
import vision from '../../images/about/vision.svg'
import vision_big from '../../images/about/vision.jpg'
import message_big from '../../images/about/message.jpg'
import value_big from '../../images/about/value.jpg'
import Helper_numbers from '../../resuable/helper_numbers/Helper_numbers'
import CompanySlider from '../../resuable/company_slider/CompanySlider'

import img1 from '../../images/const1.jpg'
import img2 from '../../images/const2.jpg'

const SaudiPlayer_polishingMaterials = () => {

    const [arr,setArr] = useState([])


    const SaudiPlayer_polishingMaterials_projetArr = [
        {
            image: img1,
            heading: 'Construction',
            subHeading: 'Supply to Olayan Descon Company',
        },
        {
            image: img2,
            heading: 'Construction',
            subHeading: 'Supply to Manar Al Omran Company',
        },
        {
            image: img1,
            heading: 'Construction',
            subHeading: 'Supply to Riyadh Foundry Company',
        },
        {
            image: img2,
            heading: 'Construction',
            subHeading: 'Al-Rajhi Industry And Trade Endowment Company',
        },
        {
            image: img2,
            heading: 'Construction',
            subHeading: 'Othman Abdul Rahman Al-Osaimi and Partners Trading Company',
        },
    ]


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

    const slideritemAr = [
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
            setArr( localStorage.getItem('i18nextLng') === "ar"? slideritemAr : sliderItemsEn)
           },[arr])

   

    return (
        <>
            <Investment
            page="SaudiPlayer_polishingMaterials"
                backgroundImage={aboutscreen}
                heading1="Saudi Factory for Grinding and Polishing Materials Company"
                sub_heading="A leader in the field of manufacturing building materials and the first specialized Saudi factory in the production of gears and cutting cylinders in various sizes and for various purposes."
                button="Get started "
            />
            <Heading
                page="SaudiPlayer_polishingMaterials"
                heading1="about omrania materials"
                heading2="Saudi Factory for Grinding and Polishing Materials Company"
                description1="One of the leading companies in the field of manufacturing building materials and the first specialized Saudi factory in the production of gears and cutting cylinders in various sizes and for various purposes. Some are used for cutting iron, others for cutting and breaking stones and tiles, as well as manufacturing grinding stones commonly used in tile polishing of various types. The idea of establishing a factory dedicated to producing these materials emerged from the founder Saleh Al-Madaifer's keenness to provide complementary materials for the production of tile industry instead of importing them. It is known that the tile industry, in its various types, requires, in its final stage, grinding the product to remove impurities, making it ready for installation. In addition, cutting cylinders are also used in tiling. This factory now meets the needs of the group's affiliated factories and similar factories. Besides, cylinders and gears are used for other purposes in light and heavy iron industries, supplying the local market with them."
                description2="The Saudi Grinding and Polishing Materials Factory is licensed by one of the global factories in Italy and holds the German MBA international quality certification."
            />

            <Card
                 page="SaudiPlayer_polishingMaterials"
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
            page="SaudiPlayer_polishingMaterials_heading2"
                heading2="omrania materials company"
                description1="A group of cutting, grinding and polishing gears such as"
            />

            {/* <Trusted /> */}
            <ImageBoxLeft
                page="SaudiPlayer_polishingMaterials"
                imageSrc={stone}
                heading="STONE"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit consectetur corporis eaque, saepe porro earum beatae? Sunt odit asperiores repellat officia consectetur ab adipisci quia nisi qui, recusandae atque!"
                buttonText="read more"
            />
            <ImageBoxRight
                page="SaudiPlayer_polishingMaterials"
                imageSrc={castIron}
                heading="CAST IRON"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit consectetur corporis eaque, saepe porro earum beatae? Sunt odit asperiores repellat officia consectetur ab adipisci quia nisi qui, recusandae atque!"
                buttonText="read more"
            />
            <ImageBoxLeft
                page="SaudiPlayer_polishingMaterials_ImageBoxLeft2"
                imageSrc={metal}
                heading="METAL"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit consectetur corporis eaque, saepe porro earum beatae? Sunt odit asperiores repellat officia consectetur ab adipisci quia nisi qui, recusandae atque!"
                buttonText="read more"
            />
            <ImageBoxRight
                 page="SaudiPlayer_polishingMaterials_ImageBoxRight2"
                imageSrc={sSteel}
                heading="S.STEEL"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit consectetur corporis eaque, saepe porro earum beatae? Sunt odit asperiores repellat officia consectetur ab adipisci quia nisi qui, recusandae atque!"
                buttonText="read more"
            />

{/* 
            <Heading
                 page="SaudiPlayer_polishingMaterials_heading3"
                heading1="Partner with OMRANIA CRUSHER"
                heading2="PRODUCTS WE WERE PART OF"
            />

            <CompanySlider items={arr} /> */}

            <Heading
                 page="SaudiPlayer_polishingMaterials_heading5"
                heading1="Partner with OMRANIA CRUSHER"
                heading2="PRODUCTS WE WERE PART OF"
            />

            <CompanySlider items={SaudiPlayer_polishingMaterials_projetArr} />

            <Heading
                page="SaudiPlayer_polishingMaterials_heading4"
                heading1="Partner with OMRANIA for concrete"
                heading2="Testimonials"
                description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
            />

            <Testimonial page="SaudiPlayer_polishingMaterials" />
            <Helper_numbers />
        </>
    )
}

export default SaudiPlayer_polishingMaterials