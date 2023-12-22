import React, { useEffect, useState } from 'react'
import Testimonial from '../../resuable/testimonials/Testimonial'
import Heading from '../../components/Heading/Heading'
import ImageBoxRight from '../../components/ImageBoxRight/ImageBoxRight'
import ImageBoxLeft from '../../components/ImageBoxLeft/ImageBoxLeft'
import Trusted from '../../components/TrustedByCompany/Trusted'
import Card from '../../resuable/cards/Card'
import Investment from '../../components/InvestmentOpp/Investment'

import readyMixedConcrete from '../../images/about/readyMixedConcrete.jpg'
import interlock from '../../images/about/interlock.jpg'
import aboutscreen from '../../images/about/aboutscreen.jpg'
import tiles from '../../images/about/tiles.jpg'
import skirting from '../../images/about/skirting.jpg'

import message from '../../images/about/message.svg'
import vision from '../../images/about/vision.svg'
import vision_big from '../../images/about/vision.jpg'
import message_big from '../../images/about/message.jpg'
import value_big from '../../images/about/value.jpg'
import Helper_numbers from '../../resuable/helper_numbers/Helper_numbers'
import CompanySlider from '../../resuable/company_slider/CompanySlider'

import img1 from '../../images/const1.jpg'
import img2 from '../../images/const2.jpg'
import imgProduct1 from '../../images/Omrania_concrete_imgProduct1.png'
import imgschoolImg from '../../images/Omrania_concrete_imgschool.png'


const Omrania_concrete = () => {


    const [arr,setArr] = useState([])
    

    const productslider = [
        {
            image: imgProduct1,
            heading: 'Product',
            subHeading: 'Ready Mixed Concrete',
        },  
    ]

    // SLIDER DATA
    const sliderItemsEn = [
        {
            image: img1,
            heading: 'Construction',
            subHeading: 'Establishment of Dr. Sulaiman Al-Habib Hospital',
        },
        {
            image: img2,
            heading: 'Construction',
            subHeading: 'Construction of 500 residential villas',
        },
        {
            image: img1,
            heading: 'Construction',
            subHeading: 'Asas Makin residential projects',
        },
        {
            image: img2,
            heading: 'Construction',
            subHeading: 'Increasing the efficiency of water plants',
        },
        {
            image: imgschoolImg,
            heading: 'Construction',
            subHeading: ' Establishing educational schools and international schools - Science Oasis Schools',
        },
    ];
    const sliderItemsAr = [
        {
          image: img1,
          heading: 'البناء',
          subHeading: 'أصول خبرة المقاولات'
        },
        {
          image: img2,
          heading: 'البناء',
          subHeading: 'بدر الدوسري للمقاولات'
        },
        {
          image: img1,
          heading: 'البناء',
          subHeading: 'أصول خبرة المقاولات'
        },
        {
          image: imgschoolImg,
          heading: 'البناء',
          subHeading: 'بدر الدوسري للمقاولات'
        }
      ];

      

      useEffect (()=>{
        setArr( localStorage.getItem('i18nextLng') === "ar"? sliderItemsAr : sliderItemsEn)
       },[arr])
      
      

    return (
        <>
            <Investment
                backgroundImage={aboutscreen}
                heading1="Omrania For"
                heading2=" Concrete"
                sub_heading="Leader in the manufacture of terrazza tiles, blocks, cement tiles, interlocks and balustrades for more than 50 years in the middle east."
                button="Get started "
                page="Omrania_concrete"
            />
            <Heading
            page="Omrania_concrete"
                heading1="about omrania for concrete"
                heading2="Al-Omrania Ready Mix Concrete Company"
                description1="One of our holding group's companies, established in 2003, strives to provide confidence and certainty to all stakeholders through an innovative and sustainable approach. We aim to assist them in delivering high-quality construction materials and products, along with providing reliable services to customers and local communities.
                At Al-Omrania Ready Mix Concrete, we strongly believe that business and environmental preservation should go hand in hand. This is achieved by promoting local culture and traditions and integrating the company's strategies regarding industrial efficiency and innovation with climate protection, reducing reliance on natural resources, and minimizing harmful air emissions."
                description2="It is a source of pride and honor to use the company's products in constructing some of the finest buildings and renowned structures in the Kingdom. This contributes to enhancing its future position by providing services to the market and meeting the growing needs of consumers.

                The Riyadh-based factory houses the latest computer-operated production lines, consisting of five modern wet-mixing stations with a total production capacity of up to 720 m³/hour. The factory also includes the latest fleet of German-made mixers for the fastest transportation of ready-mix concrete to construction sites, with a total of 60 mixers. We pay great attention to quality, precision, efficiency, and construction standards in the manufacturing of concrete blocks."
            />

            <Card
              page="Omrania_concrete"
                image1={vision_big}
                icon1={vision}
                heading1="Our Vision"
                subHeading1="We aspire to be pioneers in providing innovative and promising solutions, setting new standards in the field of concrete products, with a focus on maximizing benefits for all stakeholders in the industry."

                image2={message_big}
                icon2={message}
                heading2="Our Mission"
                subHeading2="Committed to positive impact in the concrete industry, we deliver innovative, sustainable solutions. Dedicated to excellence, we contribute to societal and environmental progress through continuous development and operational enhancement."

                image3={value_big}
                icon3={vision}
                heading3="Quality and safety"
                subHeading3="The company has specialized maintenance workshops for heavy equipment, mixers, and pumps, managed by skilled technicians. Our high-level quality laboratory conducts essential tests, ensuring production quality. We employ an advanced system for mixing, automated weight control, and size control."
            />

            <Heading
                 page="Omraniaheading2"
                heading2="omrania for concrete products"
                description1="Al-Omraniya Concrete Company provides you with the service you need  at the lowest costs and in the shortest possible time to ensure ease of work."
            />

            <ImageBoxLeft
                imageSrc={readyMixedConcrete}
                heading="Ready Mixed Concrete"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="read more"
                page="Omrania_concrete"
            />
            {/* <ImageBoxRight
                imageSrc={interlock}
                heading="interlock"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="read more"
            />
            <ImageBoxLeft
                imageSrc={skirting}
                heading="SKIRTING"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="read more"
            />
            <ImageBoxRight
                imageSrc={tiles}
                heading="tiles"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="read more"
            /> */}

            <Heading
             page="Omraniaheading3"
                heading1="Partner with OMRANIA CRUSHER"
                heading2="PRODUCTS WE WERE PART OF "
            />

            <CompanySlider items={productslider} />

            <Heading
                page="Omraniaheading5"
                heading1="Partner with OMRANIA CRUSHER"
                heading2="PROJECT WE WERE PART OF"
            />

            <CompanySlider items={arr} />

            <Heading
            page="Omraniaheading4"
                heading1="Partner with OMRANIA for concrete"
                heading2="Testimonials"
                description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
            />

            <Testimonial page="Omrania_concrete" />
            <Helper_numbers />
        </>
    )
}

export default Omrania_concrete;
