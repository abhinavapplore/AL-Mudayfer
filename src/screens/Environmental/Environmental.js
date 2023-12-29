import React from 'react'
import Investment from '../../components/InvestmentOpp/Investment'
import Heading from '../../components/Heading/Heading'

import Experience62 from '../../components/Experience62/Experience62'

import social__screen from '../../images/about/environmental.jpg'
import exp from '../../images/home/exp.jpg'
import Experience62Left from '../../components/Experience62Left/Experience62Left'
import { useTranslation } from 'react-i18next'

const Environmental = () => {

    const {t} = useTranslation()
    return (
        <>
            <Investment
                backgroundImage={social__screen}
                heading1="environmental"
                heading2="responsibility"
                sub_heading="Leader in the manufacture of terrazza tiles, blocks, cement tiles, interlocks and balustrades for more than 50 years in the middle east."
                button="get started"
                page="environmental"
            />
            <Heading
                heading1="About AL-MUDAYFER"
                heading2="environmental responsibility"
                page="environmental"
                description1="Despite the close connection and clear connection between the activities of the companies of the Saleh Al-Mudaifer Sons Holding Group and the impacts on the environment from geological or industrial works and carbon emissions to industrial waste, the group was keen to put this matter in the highest consideration, so it developed a comprehensive and systematic plan to include all the work of the Saleh Al-Mudaifer Sons Holding Group and its factories. It applies strict national standards towards the environment and carbon emissions, and the group is environmentally friendly. For this reason, it has been partnered with the most prominent specialized companies to supervise and control with regard to the potential environmental impact resulting from the business, and to assist the group in obtaining the necessary national certificates in this field to confirm the solidity of the business."
                description2="On this side. Al-Mudaifer Holding has achieved tangible results as a result of this environmental concern, starting from preserving the health of its employees to preserving the general environment or surrounding the work and activities of companies and factories and reducing carbon emissions. Environmental commitment is one of the most prominent pillars on which the group’s work is based, which has reflected its excellence over time."
            />
            <Experience62
                imageSrc={exp}
                heading="Experience 62+ Years"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="Learn More"
                page="environmental"
            />
            <Experience62Left
                imageSrc={exp}
                heading="Experience 62+ Years"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="Learn More"
                page="environmental"
            />
            <Experience62
                imageSrc={exp}
                heading="Experience 62+ Years"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="Learn More"
                page="environmental"
            />
        </>
    )
}

export default Environmental                                            