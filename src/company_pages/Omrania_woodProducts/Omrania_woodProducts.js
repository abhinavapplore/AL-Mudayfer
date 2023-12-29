import React, { useEffect, useState } from 'react'
import Testimonial from '../../resuable/testimonials/Testimonial'
import Heading from '../../components/Heading/Heading'
import ImageBoxRight from '../../components/ImageBoxRight/ImageBoxRight'
import ImageBoxLeft from '../../components/ImageBoxLeft/ImageBoxLeft'
import Trusted from '../../components/TrustedByCompany/Trusted'
import Card from '../../resuable/cards/Card'
import Investment from '../../components/InvestmentOpp/Investment'

import receptionUnit from '../../images/about/receptionUnit.jpg'
import cabinets from '../../images/about/cabinets.jpg'
import kitchen from '../../images/about/kitchen.jpg'
import wallPanel from '../../images/about/wallPanel.jpg'
import doors from '../../images/about/doors.jpg'
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

const Omrania_woodProducts = () => {

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


    const sliderItemsAr = [
          {
            "image": img1,
            "heading": "الإنشاءات",
            "subHeading": "أصول الخبرة للمقاولات"
          },
          {
            "image": img2,
            "heading": "الإنشاءات",
            "subHeading": "بدر الدوسري للمقاولات"
          },
          {
            "image": img1,
            "heading": "الإنشاءات",
            "subHeading": "أصول الخبرة للمقاولات"
          },
          {
            "image": img2,
            "heading": "الإنشاءات",
            "subHeading": "بدر الدوسري للمقاولات"
          }
        ]
      

        useEffect(()=>{
            setArr( localStorage.getItem('i18nextLng') === "ar"? sliderItemsAr : sliderItemsEn)
           },[arr])

    

    return (
        <>
            <Investment
            page="Omrania_woodProducts"
                backgroundImage={aboutscreen}
                heading1="Al-Omrania Company for Wooden Products"
                sub_heading="A leading Saudi company in manufacturing high-quality furniture and producing custom-made furniture"
                button="Get started "
            />
            <Heading
            page="Omrania_woodProducts"
                heading1="about omrania materials"
                heading2="Al-Omrania Company for Wooden Products"
                description1="It is a leading Saudi company in the manufacturing of high-quality furniture, producing custom-made furniture such as reception units, cabinets, kitchens, wall panels, doors, ceilings, and bespoke solutions. They utilize the latest technologies to manufacture furniture that meets the highest international standards. Al-Omrania for Wood Products is one of the investments of the Sons of Saleh Al-Mudayfer Holding Company, established in 1996. They have significant commercial interests in a wide range of activities across the Kingdom. Al-Mudayfer Company aims to form an integrated industrial group serving urban areas, corporate affairs, and individuals. From this vision, the idea of establishing Al-Umrania for Wood Products emerged. The wood products factory is an integral service component, in addition to other services provided by the holding group."
            />

            <Card
                page="Omrania_woodProducts"
                image1={vision_big}
                icon1={vision}
                heading1="Our Vision"
                subHeading1="Project management is conducted in a timely manner with the required quality, and the values we achieve align with the Vision 2030 of the Kingdom of Saudi Arabia in industrial development, aiming to compete with global industries."

                image2={message_big}
                icon2={message}
                heading2="Our Message"
                subHeading2="Paying meticulous attention to details, uniqueness in creativity, and providing an exceptional experience of beauty and quality in the world of furniture, translating it from local to global."

                image3={value_big}
                icon3={vision}
                heading3="QUALITY & SAFETY"
                subHeading3="Wide-ranging expertise and established partnerships with effective companies have shaped our work in local and global joint ventures, recognized as leaders. This contributes to achieving excellence and mastering partnerships with high efficiency, all to maintain the company's vision characterized by sincerity and trust."
            />

            <Heading
                page="Omrania_woodProducts_heading2"
                heading2="Al-Omrania Company for Wooden Products"
                description1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit consectetur corporis eaque, saepe porro earum beatae? Sunt odit asperiores repellat officia consectetur ab adipisci quia nisi qui, recusandae atque!"
            />

            {/* <Trusted /> */}
            <ImageBoxLeft
            page="Omrania_woodProducts"
                imageSrc={receptionUnit}
                heading="Reception Units"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit consectetur corporis eaque, saepe porro earum beatae? Sunt odit asperiores repellat officia consectetur ab adipisci quia nisi qui, recusandae atque!"
                buttonText="read more"
            />
            <ImageBoxRight
            page="Omrania_woodProducts"
                imageSrc={cabinets}
                heading="Cabinets"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit consectetur corporis eaque, saepe porro earum beatae? Sunt odit asperiores repellat officia consectetur ab adipisci quia nisi qui, recusandae atque!"
                buttonText="read more"
            />
            <ImageBoxLeft
            page="Omrania_woodProducts_ImageBoxLeft2"
                imageSrc={kitchen}
                heading="Kitchens"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit consectetur corporis eaque, saepe porro earum beatae? Sunt odit asperiores repellat officia consectetur ab adipisci quia nisi qui, recusandae atque!"
                buttonText="read more"
            />
            <ImageBoxRight
            page="Omrania_woodProducts_ImageBoxRight2"
                imageSrc={wallPanel}
                heading="Wall Panels"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit consectetur corporis eaque, saepe porro earum beatae? Sunt odit asperiores repellat officia consectetur ab adipisci quia nisi qui, recusandae atque!"
                buttonText="read more"
            />
            <Heading
                page="Omrania_woodProducts_heading3"
                heading1="Partner with OMRANIA CRUSHER"
                heading2="PRODUCTS WE WERE PART OF"
            />

            <CompanySlider items={arr} />


            <Heading
            page="Omrania_woodProducts_heading4"
                heading1="Partner with OMRANIA for concrete"
                heading2="Testimonials"
                description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
            />

            <Testimonial page="Omrania_woodProducts" />
            <Helper_numbers />
        </>
    )
}

export default Omrania_woodProducts;