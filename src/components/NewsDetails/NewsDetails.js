import React from 'react'
import Investment from '../../components/InvestmentOpp/Investment'
import Heading from '../../components/Heading/Heading'

import Experience62 from '../../components/Experience62/Experience62'

import social__screen from '../../images/about/environmental.jpg'
import exp from '../../images/home/exp.jpg'
import Experience62Left from '../../components/Experience62Left/Experience62Left'
import { useTranslation } from 'react-i18next'
import NewsHero from '../NewsHero/Newshero'
import NewsExplain from '../NewsExplain/NewsExplain'

const NewsDetails = () => {

    const {t} = useTranslation()
    return (
        <>
            <NewsHero
                backgroundImage={social__screen}
                heading1=""
              
                page="newsDetails"
            />
            <br/> <br/> <br/> <br/>
           
           
            <NewsExplain
                imageSrc={exp}
                heading="Experience 62+ Years"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="Learn More"
                page="newsDetails"
               
            />
          <br/> <br/>
        </>
    )
}

export default NewsDetails                                            