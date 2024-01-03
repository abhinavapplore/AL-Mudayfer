import React from "react";
import styles from "./Footer.module.css";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import logo from "../../images/logo0.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.main_line}>
            Saleh AL-Mudaifer Sons Holding Company (investment in building the
            nation), a Saudi Company
          </div>
          <div className={styles.footer_container}>
            <div className={styles.left}>
              <div className={styles.logo}>
                <img src={logo} alt="" />
              </div>
              <div className={styles.left_box}>
                <div className={styles.tag_line}>ALWAYS BE WITH US</div>
                <div className={styles.phone}>
                  <BsFillTelephoneFill size={12} /> Phone : 800-286-2915
                </div>
                <div className={styles.phone}>
                  <MdEmail size={14} /> Email : info@segalebros.com
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
                <div className={styles.right_company_heading}>Company</div>
                <div className={styles.right_company_content}>
                  <Link to="/about">About Al-Mudayfer</Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/about">Vision and Mission</Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/about">Our History</Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/social_responsibility">Social Responsibility</Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/environmental_responsibility">
                    Environmental Responsibility
                  </Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/national_responsibility">
                    National Responsibility
                  </Link>
                </div>
              </div>

              <div className={styles.right_company}>
                <div className={styles.right_company_heading}>Resources</div>
                <div className={styles.right_company_content}>
                  <Link to="/investment">Our Investments</Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/investment">Invest with us</Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/join">Join as a Supplier</Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/join">Join as a Client</Link>
                </div>
                <div className={styles.right_company_content}>
                  <Link to="/contact">Join as an Employee</Link>
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
