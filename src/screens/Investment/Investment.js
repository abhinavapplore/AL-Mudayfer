import React, { useState,useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import Investment1 from "../../components/InvestmentOpp/Investment";
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
import investscreen from "../../images/investment/investmentscreen.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Investment = ({gallery}) => {
  const [selected, setSelected] = useState(1);

  const { t } = useTranslation();

  return (
    <>
      <Investment1
        backgroundImage={investscreen}
        // heading1="our investments"
        // sub_heading="Always be close to us and part of our journey and get what you want from it’s source."
        // button="get started"
        page="invest"
        
      />
      <Heading
        heading1="Partner with AL-MUDAYFER"
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
          page="invest"
      />

      <div className={styles.container}>
        <div className={styles.left_container}>
          <div className={styles.sticky_container}>
            <a
              href="#section1"
              className={`${selected === 1 ? styles.active : ""}`}
              onClick={() => setSelected(1)}
            >
              <div className={styles.builder_names}>{t('invest.companies.1')}</div>
            </a>
            <a
              href="#section2"
              className={`${selected === 2 ? styles.active : ""}`}
              onClick={() => setSelected(2)}
            >
              <div className={styles.builder_names}>
                {" "}
                {t('invest.companies.2')}
              </div>
            </a>
            <a
              href="#section3"
              className={`${selected === 3 ? styles.active : ""}`}
              onClick={() => setSelected(3)}
            >
              <div className={styles.builder_names}>
                {" "}
                {t('invest.companies.3')}
              </div>
            </a>
            <a
              href="#section4"
              className={`${selected === 4 ? styles.active : ""}`}
              onClick={() => setSelected(4)}
            >
              <div className={styles.builder_names}>{t('invest.companies.4')}</div>
            </a>

            <a
              href="#section5"
              className={`${selected === 5 ? styles.active : ""}`}
              onClick={() => setSelected(5)}
            >
              <div className={styles.builder_names}>{t('invest.companies.5')}</div>
            </a>

            <a
              href="#section6"
              className={`${selected === 6 ? styles.active : ""}`}
              onClick={() => setSelected(6)}
            >
              <div className={styles.builder_names}>
                {" "}
                {t('invest.companies.6')}
              </div>
            </a>
            <a
              href="#section7"
              className={`${selected === 7 ? styles.active : ""}`}
              onClick={() => setSelected(7)}
            >
              <div className={styles.builder_names}>
                {" "}
                {t('invest.companies.7')}
              </div>
            </a>
            <a
              href="#section8"
              className={`${selected === 8 ? styles.active : ""}`}
              onClick={() => setSelected(8)}
            >
              <div className={styles.builder_names}>
                {" "}
                {t('invest.companies.8')}
              </div>
            </a>
          </div>
        </div>

        {/* TESTING */}
        <div className={styles.right_container}>
          {/* COMPANY 1 */}
          <div className={styles.company} id="section1">
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company4} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                {t('invest.companyDetails.1.description1')}
                </div>
                <div className={styles.left_description}>
                {t('invest.companyDetails.1.description2')}
                </div>
                <div className={styles.link__button}>
                  <Link to="/omrania_material">{t('invest.companyDetails.1.buttonText')}</Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company41} alt="" />
                </div>
                <div className={styles.numbers}>
                {t('invest.companyDetails.1.establishmentYear')}
                  <div className={styles.numbers_description}>
                  {t('invest.companyDetails.doe')}
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}-
                  <div className={styles.numbers_description}> {t('invest.companyDetails.achievement1')}</div>
                </div>
                <div className={styles.numbers}>
                  {/* 20M */}-
                  <div className={styles.numbers_description}> {t('invest.companyDetails.achievement2')}</div>
                </div>

                <div className={styles.right_button}>
                  <a href="https://comaco.sa/">https://comaco.sa/</a>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>{t('invest.gallery')}</div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>
          {/* COMPANY 2 */}
          <div className={styles.company} id="section2">
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company2} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                {t('invest.companyDetails.2.description1')}
                </div>
                <div className={styles.left_description}>
                {t('invest.companyDetails.2.description2')}
                </div>
                <div className={styles.link__button}>
                  <Link to="/omrania_concrete" preventScrollReset={false}>
                  {t('invest.companyDetails.1.buttonText')}
                  </Link>
                </div>
              </div>
              

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company2} alt="" />
                </div>
                <div className={styles.numbers}>
                {t('invest.companyDetails.2.establishmentYear')}
                  <div className={styles.numbers_description}>
                  {t('invest.companyDetails.doe')}
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}-
                  <div className={styles.numbers_description}> {t('invest.companyDetails.achievement1')}</div>
                </div>
                <div className={styles.numbers}>
                  {/* 20M */}-
                  <div className={styles.numbers_description}> {t('invest.companyDetails.achievement2')}</div>
                </div>

                <div className={styles.right_button}>
                  <a href="https://orm.sa/">https://orm.sa/</a>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>{t('invest.gallery')}</div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>
          {/* COMPANY 3 */}
          <div className={styles.company} id="section3">
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company3} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                {t('invest.companyDetails.3.description1')}
                </div>
                <div className={styles.left_description}>
                {t('invest.companyDetails.3.description2')}
                </div>
                <div className={styles.link__button}>
                  <Link to="/omrania_wood_products">{t('invest.companyDetails.1.buttonText')}</Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company3} alt="" />
                </div>
                <div className={styles.numbers}>
                {t('invest.companyDetails.3.establishmentYear')}
                  <div className={styles.numbers_description}>
                  {t('invest.companyDetails.doe')}
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}-
                  <div className={styles.numbers_description}>{t('invest.companyDetails.achievement1')}</div>
                </div>
                <div className={styles.numbers}>
                  {/* 20M */}-
                  <div className={styles.numbers_description}>{t('invest.companyDetails.achievement2')}</div>
                </div>

                <div className={styles.right_button}>
                  <a href="https://omraniahwood.sa/?lang=ar">
                    https://omraniahwood.sa/?lang=ar
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>{t('invest.gallery')}</div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>
          {/* COMPANY 4 */}
          <div className={styles.company} id="section4">
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company7} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                {t('invest.companyDetails.4.description1')}
                </div>
                <div className={styles.left_description}>
                {t('invest.companyDetails.4.description2')}
                </div>
                <div className={styles.link__button}>
                  <Link to="/omrania_crusher">{t('invest.companyDetails.1.buttonText')}</Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company7} alt="" />
                </div>
                <div className={styles.numbers}>
                {t('invest.companyDetails.4.establishmentYear')}
                  <div className={styles.numbers_description}>
                  {t('invest.companyDetails.doe')}
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}-
                  <div className={styles.numbers_description}>{t('invest.companyDetails.achievement1')}</div>
                </div>
                <div className={styles.numbers}>
                  {/* 20M */}-
                  <div className={styles.numbers_description}>{t('invest.companyDetails.achievement2')}</div>
                </div>

                <div className={styles.right_button}>
                  <a href="https://occo.sa/">https://occo.sa/</a>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>{t('invest.gallery')}</div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>

          {/* COMPANY 5 */}
          <div className={styles.company} id="section5">
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company5} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                {t('invest.companyDetails.5.description1')}
                </div>
                <div className={styles.left_description}>
                {t('invest.companyDetails.5.description2')}
                </div>
                <div className={styles.link__button}>
                  <Link to="/omrania_metal_power">{t('invest.companyDetails.1.buttonText')}</Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company5} alt="" />
                </div>
                <div className={styles.numbers}>
                {t('invest.companyDetails.5.establishmentYear')}
                  <div className={styles.numbers_description}>
                  {t('invest.companyDetails.doe')}
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}-
                  <div className={styles.numbers_description}>{t('invest.companyDetails.achievement1')}</div>
                </div>
                <div className={styles.numbers}>
                  {/* 20M */}-
                  <div className={styles.numbers_description}>{t('invest.companyDetails.achievement2')}</div>
                </div>

                <div className={styles.right_button}>
                  <a href="https://cmmf.sa/">https://cmmf.sa/</a>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>{t('invest.gallery')}</div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>

          {/* COMPANY 6 */}
          <div className={styles.company} id="section6">
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company8} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                {t('invest.companyDetails.6.description1')}
                </div>
                <div className={styles.left_description}>
                {t('invest.companyDetails.6.description')}
                </div>
                <div className={styles.link__button}>
                  <Link to="/omrania_landTransport">{t('invest.companyDetails.1.buttonText')}</Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company8} alt="" />
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}-
                  <div className={styles.numbers_description}>
                  {t('invest.companyDetails.doe')}
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}-
                  <div className={styles.numbers_description}>{t('invest.companyDetails.achievement1')}</div>
                </div>
                <div className={styles.numbers}>
                  {/* 20M */}-
                  <div className={styles.numbers_description}>{t('invest.companyDetails.achievement2')}</div>
                </div>

                <div className={styles.right_button}>
                  <a href="https://otco.sa/">https://otco.sa/</a>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>{t('invest.gallery')}</div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>

          {/* COMPANY 7 */}
          <div className={styles.company} id="section7">
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company6} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                {t('invest.companyDetails.7.description1')}
                </div>
                <div className={styles.left_description}>
                {t('invest.companyDetails.7.description2')}
                </div>
                <div className={styles.link__button}>
                  <Link to="/omrania_logisticSupport">{t('invest.companyDetails.1.buttonText')}</Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company6} alt="" />
                </div>
                <div className={styles.numbers}>
                {t('invest.companyDetails.1.establishmentYear')}
                  <div className={styles.numbers_description}>
                  {t('invest.companyDetails.doe')}
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}-
                  <div className={styles.numbers_description}>{t('invest.companyDetails.achievement1')}</div>
                </div>
                <div className={styles.numbers}>
                  {/* 20M */}-
                  <div className={styles.numbers_description}>{t('invest.companyDetails.achievement2')}</div>
                </div>

                <div className={styles.right_button}>
                  <a href="https://olsco.sa/">https://olsco.sa/</a>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>{t('invest.gallery')}</div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>
          {/* COMPANY 8 */}
          <div className={styles.company} id="section8">
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company1} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                {t('invest.companyDetails.7.description1')}
                </div>
                <div className={styles.left_description}>
                {t('invest.companyDetails.7.description2')}
                </div>
                <div className={styles.link__button}>
                  <Link to="/SaudiPlayer_polishingMaterials">{t('invest.companyDetails.1.buttonText')}</Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company1} alt="" />
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}-
                  <div className={styles.numbers_description}>
                  {t('invest.companyDetails.doe')}
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}-
                  <div className={styles.numbers_description}>{t('invest.companyDetails.achievement1')}</div>
                </div>
                <div className={styles.numbers}>
                  {/* 20M */}-
                  <div className={styles.numbers_description}>{t('invest.companyDetails.achievement2')}</div>
                </div>

                <div className={styles.right_button}>
                  <a href="https://saudi-grinding-polishing.sa/">
                    https://saudi-grinding-polishing.sa/
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>{t('invest.gallery')}</div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investment;
