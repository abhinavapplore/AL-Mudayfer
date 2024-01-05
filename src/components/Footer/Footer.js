import React from "react";
import styles from "./Footer.module.css";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import logo from "../../images/logo0.svg";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.main_line}>
          {t(`footer.mainLine`)}
          </div>
          <div className={styles.footer_container}>
            <div className={styles.left}>
              <div className={styles.logo}>
                <img src={logo} alt="" />
              </div>
              <div className={styles.left_box}>
                <div className={styles.tag_line}>   {t(`footer.alwaysBeWithUs`)}</div>
                <div className={styles.phone}>
                  <BsFillTelephoneFill size={12} />  {t(`footer.phone`)}
                </div>
                <div className={styles.phone}>
                  <MdEmail size={14} /> {t(`footer.email`)}
                </div>
              </div>

              <div className={styles.icons}>
                <div className={styles.icon}>
                  <AiOutlineTwitter />
                </div>
                <div className={styles.icon}>
                  <BiLogoFacebook />
                </div>
                <div className={styles.icon}>
                  <BsInstagram />
                </div>
                <div className={styles.icon}>
                  <AiFillGithub />
                </div>
              </div>
            </div>

            <div className={styles.right}>
              <div className={styles.right_company}>
                <div className={styles.right_company_heading}>{t(`footer.company.heading1`)}</div>
                <div className={styles.right_company_content}>
                  <Link to="/about">{t(`footer.company.about`)}</Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/about">{t(`footer.company.visionMission`)}</Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/about">{t(`footer.company.ourHistory`)}</Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/about/social_responsibility">{t(`footer.company.socialResponsibility`)}</Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/about/environmental_responsibility">
                  {t(`footer.company.environmentalResponsibility`)}
                  </Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/about/national_responsibility">
                  {t(`footer.company.nationalResponsibility`)}
                  </Link>
                </div>
              </div>

              <div className={styles.right_company}>
                <div className={styles.right_company_heading}>{t(`footer.investment.heading2`)}</div>
                <div className={styles.right_company_content}>
                  <Link to="/investment">{t(`footer.investment.ourInvestments`)}</Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/investment">{t(`footer.investment.investWithUs`)}</Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/join">{t(`footer.investment.joinAsSupplier`)}</Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/join">{t(`footer.investment.joinAsClient`)}</Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/join">{t(`footer.investment.joinAsEmployee`)}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
