import React, { useState, useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import Investments from "../../components/InvestmentOpp/Investments";
import aboutscreen from "../../images/about/aboutscreen.jpg";

import styles from "./Investment.module.css";
import building from "../../images/investment/buildings.jpg";
import company1 from "../../images/investment/company1.svg";
import company2 from "../../images/investment/company2.svg";
import company3 from "../../images/investment/company3.svg";
import company4 from "../../images/investment/company4.png";
import company41 from "../../images/investment/company4.svg";
import company5 from "../../images/investment/company5.svg";
import company6 from "../../images/investment/company6.svg";
import company7 from "../../images/investment/company7.svg";
import company8 from "../../images/investment/company8.svg";
import investscreen from "../../images/investment/investmentsscreen.png";
import img1 from "../../images/investment/img1.png";
import img2 from "../../images/investment/img2.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

const Investment = ({page}) => {
  const [selected, setSelected] = useState(1);

const {t} = useTranslation()

  return (
    <div className={styles.page}>
      <Investments backgroundImage={investscreen} heading="Our Investments" page="invest" />
      {/* <Heading
        heading1="Partner with Al-Mudayfer"
        heading2="our companies"
        description1="
        As an investor or entrepreneur with creative and distinct ideas, we integrate with you
        in the Al-Mudaifer Group, and we are happy to exchange opinions about ideas and
        are open to everyone, until we implement projects on reality."
        description2="Today, Al-Mudaifer Holding Group finds itself accelerating the pace of expanding its
          business to keep pace with all the giant projects created by Vision 2030 and
          intersecting with the group’s work, especially with the group’s known products of high
          reliability and the long-standing experience of a national company.
          Al-Mudaifer Holding Group aspires to work diligently to enhance its national presence
          and write new chapters of its success story through its distinctive interaction with the
          comprehensive national vision and enter into more projects and investments that
          enhance its effective presence at all levels, including localization of the industry,
          enhancing local content, industrial growth, creating job opportunities and bridging the
          gap in the market. Locally and looking to expand externally.
          "
      /> */}

      <div className={styles.container}>
        <div className={styles.left_container}>
          <div className={styles.sticky_container}>
            <a
              href="#section1"
              className={`${selected === 1 ? styles.active : ""}`}
              onClick={() => setSelected(1)}
            >
              <div className={styles.builder_names}>{t(`invest.companies.1`)}</div>
            </a>
            <a
              href="#section2"
              className={`${selected === 2 ? styles.active : ""}`}
              onClick={() => setSelected(2)}
            >
              <div className={styles.builder_names}>{t(`invest.companies.2`)}</div>
            </a>
            <a
              href="#section3"
              className={`${selected === 3 ? styles.active : ""}`}
              onClick={() => setSelected(3)}
            >
              <div className={styles.builder_names}>{t(`invest.companies.3`)}</div>
            </a>
            <a
              href="#section4"
              className={`${selected === 4 ? styles.active : ""}`}
              onClick={() => setSelected(4)}
            >
              <div className={styles.builder_names}>{t(`invest.companies.4`)}</div>
            </a>

            <a
              href="#section5"
              className={`${selected === 5 ? styles.active : ""}`}
              onClick={() => setSelected(5)}
            >
              <div className={styles.builder_names}>
              {t(`invest.companies.5`)}
              </div>
            </a>

            <a
              href="#section6"
              className={`${selected === 6 ? styles.active : ""}`}
              onClick={() => setSelected(6)}
            >
              <div className={styles.builder_names}>
              {t(`invest.companies.6`)}
              </div>
            </a>
            <a
              href="#section7"
              className={`${selected === 7 ? styles.active : ""}`}
              onClick={() => setSelected(7)}
            >
              <div className={styles.builder_names}>
              {t(`invest.companies.7`)}
              </div>
            </a>
            <a
              href="#section8"
              className={`${selected === 8 ? styles.active : ""}`}
              onClick={() => setSelected(8)}
            >
              <div className={styles.builder_names}> {t(`invest.companies.8`)}</div>
            </a>
          </div>
        </div>

        {/* TESTING */}
        <div className={styles.right_container}>
          {/* COMPANY 1 */}
          <div className={styles.company} id="section1">
            <div className={styles.wrapper}>
              <div className={styles.logo}>
                <img src={company4} alt="" />
              </div>
              <Link to="/investment/omrania_material">
                <div className={styles.button}>
                {t(`invest.companyDetails.readMore`)}
                  <div className={styles.arrow}>
                    <BsArrowRight />
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.gridWrapper}>
              <p>
              {t(`invest.companyDetails.1.description1`)}
              </p>
              <p>
              {t(`invest.companyDetails.1.description2`)}
              </p>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.info}>
                <h2> {t(`invest.companyDetails.1.detail.1.year`)}</h2>
                <span>{t(`invest.companyDetails.1.detail.1.label`)}</span>
              </div>
              <div className={styles.info}>
                <h2>{t(`invest.companyDetails.1.detail.2.year`)}</h2>
                <span>{t(`invest.companyDetails.1.detail.2.label`)}</span>
              </div>
              <div className={styles.info}>
              <h2>{t(`invest.companyDetails.1.detail.3.year`)}</h2>
                <span>{t(`invest.companyDetails.1.detail.3.label`)}</span>
              </div>
            </div>
            <div className={styles.gridWrapper}>
              <div className={styles.imageWrapper}>
                <img src={img1} />
              </div>
              <div className={styles.imageWrapper}>
                <img src={img2} />
              </div>
            </div>
          </div>
          <div className={styles.company} id="section2">
            <div className={styles.wrapper}>
              <div className={styles.logo}>
                <img src={company2} alt="" />
              </div>
              <Link to="/investment/omrania_concrete">
                <div className={styles.button}>
               {t(`invest.companyDetails.readMore`)}
                  <div className={styles.arrow}>
                    <BsArrowRight />
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.gridWrapper}>
            <p>
              {t(`invest.companyDetails.2.description1`)}
              </p>
              <p>
              {t(`invest.companyDetails.2.description2`)}
              </p>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.2.detail.1.year`)}</h2>
                <span>{t(`invest.companyDetails.2.detail.1.label`)}</span>
              </div>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.2.detail.2.year`)}</h2>
                <span>{t(`invest.companyDetails.2.detail.2.label`)}</span>
              </div>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.2.detail.3.year`)}</h2>
                <span>{t(`invest.companyDetails.2.detail.3.label`)}</span>
              </div>
            </div>
            <div className={styles.gridWrapper}>
              <div className={styles.imageWrapper}>
                <img src={img1} />
              </div>
              <div className={styles.imageWrapper}>
                <img src={img2} />
              </div>
            </div>
          </div>
          <div className={styles.company} id="section3">
            <div className={styles.wrapper}>
              <div className={styles.logo}>
                <img src={company3} alt="" />
              </div>
              <Link to="/investment/omrania_wood_products">
                <div className={styles.button}>
               {t(`invest.companyDetails.readMore`)}
                  <div className={styles.arrow}>
                    <BsArrowRight />
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.gridWrapper}>
              <p>
              {t(`invest.companyDetails.3.description1`)}
              </p>
              <p>
              {t(`invest.companyDetails.3.description2`)}
              </p>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.3.detail.1.year`)}</h2>
                <span>{t(`invest.companyDetails.3.detail.1.label`)}</span>
              </div>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.3.detail.2.year`)}</h2>
                <span>{t(`invest.companyDetails.3.detail.2.label`)}</span>
              </div>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.3.detail.3.year`)}</h2>
                <span>{t(`invest.companyDetails.3.detail.3.label`)}</span>
              </div>
            </div>
            <div className={styles.gridWrapper}>
              <div className={styles.imageWrapper}>
                <img src={img1} />
              </div>
              <div className={styles.imageWrapper}>
                <img src={img2} />
              </div>
            </div>
          </div>
          <div className={styles.company} id="section4">
            <div className={styles.wrapper}>
              <div className={styles.logo}>
                <img src={company5} alt="" />
              </div>
              <Link to="/investment/omrania_metal_power">
                <div className={styles.button}>
               {t(`invest.companyDetails.readMore`)}
                  <div className={styles.arrow}>
                    <BsArrowRight />
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.gridWrapper}>
              <p>  {t(`invest.companyDetails.4.description1`)}</p>
              <p>  {t(`invest.companyDetails.4.description2`)}</p>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.4.detail.1.year`)}</h2>
                <span>{t(`invest.companyDetails.4.detail.1.label`)}</span>
              </div>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.4.detail.2.year`)}</h2>
                <span>{t(`invest.companyDetails.4.detail.2.label`)}</span>
              </div>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.4.detail.3.year`)}</h2>
                <span>{t(`invest.companyDetails.4.detail.3.label`)}</span>
              </div>
            </div>
            <div className={styles.gridWrapper}>
              <div className={styles.imageWrapper}>
                <img src={img1} />
              </div>
              <div className={styles.imageWrapper}>
                <img src={img2} />
              </div>
            </div>
          </div>
          <div className={styles.company} id="section5">
            <div className={styles.wrapper}>
              <div className={styles.logo}>
                <img src={company1} alt="" />
              </div>
              <Link to="/investment/SaudiPlayer_polishing_materials">
                <div className={styles.button}>
               {t(`invest.companyDetails.readMore`)}
                  <div className={styles.arrow}>
                    <BsArrowRight />
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.gridWrapper}>
            <p>  {t(`invest.companyDetails.5.description1`)}</p>
              <p>  {t(`invest.companyDetails.5.description2`)}</p>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.5.detail.1.year`)}</h2>
                <span>{t(`invest.companyDetails.5.detail.1.label`)}</span>
              </div>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.5.detail.2.year`)}</h2>
                <span>{t(`invest.companyDetails.5.detail.2.label`)}</span>
              </div>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.5.detail.3.year`)}</h2>
                <span>{t(`invest.companyDetails.5.detail.3.label`)}</span>
              </div>
            </div>
            <div className={styles.gridWrapper}>
              <div className={styles.imageWrapper}>
                <img src={img1} />
              </div>
              <div className={styles.imageWrapper}>
                <img src={img2} />
              </div>
            </div>
          </div>
          <div className={styles.company} id="section6">
            <div className={styles.wrapper}>
              <div className={styles.logo}>
                <img src={company8} alt="" />
              </div>
              <Link to="/investment/omrania_land_transport">
                <div className={styles.button}>
               {t(`invest.companyDetails.readMore`)}
                  <div className={styles.arrow}>
                    <BsArrowRight />
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.gridWrapper}>
            <p>  {t(`invest.companyDetails.6.description1`)}</p>
              <p>  {t(`invest.companyDetails.6.description2`)}</p>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.6.detail.1.year`)}</h2>
                <span>{t(`invest.companyDetails.6.detail.1.label`)}</span>
              </div>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.6.detail.2.year`)}</h2>
                <span>{t(`invest.companyDetails.6.detail.2.label`)}</span>
              </div>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.6.detail.3.year`)}</h2>
                <span>{t(`invest.companyDetails.6.detail.3.label`)}</span>
              </div>
            </div>
            <div className={styles.gridWrapper}>
              <div className={styles.imageWrapper}>
                <img src={img1} />
              </div>
              <div className={styles.imageWrapper}>
                <img src={img2} />
              </div>
            </div>
          </div>
          <div className={styles.company} id="section7">
            <div className={styles.wrapper}>
              <div className={styles.logo}>
                <img src={company6} alt="" />
              </div>
              <Link to="/investment/omrania_logistic_support">
                <div className={styles.button}>
               {t(`invest.companyDetails.readMore`)}
                  <div className={styles.arrow}>
                    <BsArrowRight />
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.gridWrapper}>
            <p>  {t(`invest.companyDetails.7.description1`)}</p>
              <p>  {t(`invest.companyDetails.7.description2`)}</p>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.7.detail.1.year`)}</h2>
                <span>{t(`invest.companyDetails.7.detail.1.label`)}</span>
              </div>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.7.detail.2.year`)}</h2>
                <span>{t(`invest.companyDetails.7.detail.2.label`)}</span>
              </div>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.7.detail.3.year`)}</h2>
                <span>{t(`invest.companyDetails.7.detail.3.label`)}</span>
              </div>
            </div>
            <div className={styles.gridWrapper}>
              <div className={styles.imageWrapper}>
                <img src={img1} />
              </div>
              <div className={styles.imageWrapper}>
                <img src={img2} />
              </div>
            </div>
          </div>
          <div className={styles.company} id="section8">
            <div className={styles.wrapper}>
              <div className={styles.logo}>
                <img src={company7} alt="" />
              </div>
              <Link to="/investment/omrania_crusher">
                <div className={styles.button}>
               {t(`invest.companyDetails.readMore`)}
                  <div className={styles.arrow}>
                    <BsArrowRight />
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.gridWrapper}>
            <p>  {t(`invest.companyDetails.8.description1`)}</p>
              <p>  {t(`invest.companyDetails.8.description2`)}</p>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.8.detail.1.year`)}</h2>
                <span>{t(`invest.companyDetails.8.detail.1.label`)}</span>
              </div>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.8.detail.2.year`)}</h2>
                <span>{t(`invest.companyDetails.8.detail.2.label`)}</span>
              </div>
              <div className={styles.info}>
              <h2> {t(`invest.companyDetails.8.detail.3.year`)}</h2>
                <span>{t(`invest.companyDetails.8.detail.3.label`)}</span>
              </div>
            </div>
            <div className={styles.gridWrapper}>
              <div className={styles.imageWrapper}>
                <img src={img1} />
              </div>
              <div className={styles.imageWrapper}>
                <img src={img2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
