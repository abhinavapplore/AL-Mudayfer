import React from "react";
import Investment from "../../components/InvestmentOpp/Investment";
import Heading from "../../components/Heading/Heading";

import Experience62 from "../../components/Experience62/Experience62";

import social__screen from "../../images/social/social_screen1.jpg";
import exp from "../../images/home/exp.jpg";
import Experience62Left from "../../components/Experience62Left/Experience62Left";

const Social_Responsibility = () => {
  return (
    <div className="page">
      <Investment
        backgroundImage={social__screen}
        heading1="Social"
        heading2="Responsibility"
        sub_heading="Leader in the manufacture of terrazza tiles, blocks, cement tiles, interlocks and balustrades for more than 50 years in the middle east."
        button="get started"
      />
      <Heading
        heading1="About Al-Mudayfer"
        heading2="Social Responsibility"
        description1="Saleh Al-Mudaifer Sons Holding Group carries in its genes the love of doing good for others, working for everyone, and the culture of social responsibility, believing that it is from this country and to it and part of its interconnected society. For this reason, Al-Mudaifer Holding has presented many community initiatives with different ideas that included direct support with materials and products from its factories, Training programs for university students and graduates have supported many charitable associations and institutions in their work."
        description2="The participation of Al-Mudaifer Holding Group at the group level or its subsidiaries in national events and activities is part of its firm belief in contributing to community interaction and the prosperity of society through its work. In general, Al-Mudaifer Holding finds that its extended work and contribution to the localization of industry, securing supply chains in the field of construction and building, and creating more jobs for the people of the country are an integral part of its social responsibility in national and human development."
      />
      <Experience62
        imageSrc={exp}
        heading="Experience 62+ Years"
        text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudayfer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
        buttonText="Learn More"
      />
      <Experience62Left
        imageSrc={exp}
        heading="Experience 62+ Years"
        text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudayfer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
        buttonText="Learn More"
      />
      <Experience62
        imageSrc={exp}
        heading="Experience 62+ Years"
        text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudayfer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
        buttonText="Learn More"
      />
    </div>
  );
};

export default Social_Responsibility;
