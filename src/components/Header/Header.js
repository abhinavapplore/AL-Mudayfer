import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa6";
import logo from "../../images/logo.png";
import "./header.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import i18next from "i18next";
import { useTranslation } from 'react-i18next';

const Header = ({}) => {
  const { t } = useTranslation();
  const {id} = useParams()
  const [language, setLanguage] = useState("EN");
  const [openedDropdown, setOpenedDropdown] = useState([]);
  const [isjoinDropdownOpen, setjoinDropdownOpen] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const path = useLocation().pathname;
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);
  const [openSidebar, setOpenSidebar] = useState(false);

  const handlejoinMouseEnter = () => {
    setjoinDropdownOpen(true);
  };

  const handlejoinMouseLeave = () => {
    setjoinDropdownOpen(false);
  };

  useEffect(() => {
    const navbarElement = document.getElementById("navbar");
    const linkTags = navbarElement.getElementsByClassName("nav-links");
    document.addEventListener("click", (event) => {
      if (
        sidebarRef?.current?.contains(event.target) ||
        hamburgerRef?.current?.contains(event.target)
      ) {
        let isNavlinkClick = false;
        for (let i = 0; i < linkTags.length; i++) {
          if (linkTags[i].contains(event.target)) {
            isNavlinkClick = true;
            break;
          }
        }
        if (isNavlinkClick) {
          setOpenSidebar(false);
          setOpenedDropdown([]);
        } else {
          setOpenSidebar(true);
        }
      } else {
        setOpenSidebar(false);
        setOpenedDropdown([]);
      }
    });
    return document.removeEventListener("click", () => {});
  }, [sidebarRef, hamburgerRef]);

  const languageHandler = useCallback((language) => {
    setLanguage(language);
    setOpenedDropdown([]);
  }, []);

  useEffect(()=>{
    const storedLanguage = localStorage.getItem('i18nextLng');
    document.body.dir = storedLanguage === 'ar' ? 'rtl' : '';
    setLanguage( storedLanguage === 'ar' ? 'اردو"' : 'EN')
  },[localStorage.getItem('i18nextLng')])

  

  const handleLanguageChange = (language) => {

    setDropdownOpen(false);
    document.body.dir = language === "ar" ? "rtl" : "";
    i18next.changeLanguage(language === "ar" ? "ar" : "en");
  };


  useEffect(() => {
    const navbarElement = document.getElementById("navbar");
    const heroElement = document.getElementById("hero");
    document.addEventListener("scroll", (event) => {
      if (path === "/" && heroElement) {
        const { height } = heroElement.getBoundingClientRect;
        if (window.pageYOffset > height) {
          navbarElement.classList = "navbar";
        } else {
          navbarElement.classList = "navbar active";
        }
      } else {
        navbarElement.classList = "navbar";
      }
    });
    return () => document.removeEventListener("click", () => {});
  }, [path]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setOpenSidebar(false);
  }, [path]);
  const openedDropdownhandler = useCallback(
    (value) => {
      const temp = [...openedDropdown];
      const index = temp.indexOf(value);
      if (index === -1) {
        temp.push(value);
      } else {
        temp.splice(index, 1);
      }
      setOpenedDropdown([...temp]);
    },
    [openedDropdown]
  );


  

 

  return (
    <div id="navbar" className={path === "/" ? "navbar active" : "navbar"}>
      <div className="container-wrapper">
        <div className="hamburger">
          <button ref={hamburgerRef}>
            <GiHamburgerMenu size={18} />
          </button>
        </div>
        <div className="logo">
          <Link to="/">
            <img className="image-dark" src={logo} alt="logo" />
          </Link>
          <img className="image" src="/assets/images/logo.png" alt="logo" />
        </div>
        <ul
          className={openSidebar ? "sidebar active" : "sidebar"}
          ref={sidebarRef}
        >
          <li>
            <Link className="nav-links" to="/">
              <span className={path === "/" ? "active" : ""}> {t(`header.links.home`)}</span>
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/about">
              <span className={path.includes('/about') ? "active" : ""}>{t(`header.links.about`)}</span>
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/investment">
              <span className={path.includes("/investment") ? "active" : ""}>
              {t(`header.links.ourInvestments`)}
              </span>
            </Link>
          </li>
         
          <li className="joinus">
            <span
              onClick={() => openedDropdownhandler("joinus")}
              className="f-14 bold"
            >
              {t(`header.links.joinUs`)}
              <FaChevronDown size={14} />
            </span>
            <div
              className={
                openedDropdown.indexOf("joinus") !== -1
                  ? "dropdown active"
                  : "dropdown"
              }
            >
               <Link to="/join/employee" >
             <span >  Employee</span>
             </Link>
             <Link to="/join/supplier" >
             <span >  Supplier</span>
             </Link>
             <Link to="/join/investor" >
             <span >  Investor</span>
             </Link>
            
            </div>
          </li>
          <li>
            <Link className="nav-links" to="/media">
              <span className={path === "/media" ? "active" : ""}>{t(`header.links.media`)}</span>
            </Link>
          </li>
          <li className="language">
            <span
              onClick={() => openedDropdownhandler("language")}
              className="f-14 bold"
            >
              {language}
              <FaChevronDown size={14} />
            </span>
            <div
              className={
                openedDropdown.indexOf("language") !== -1
                  ? "dropdown active"
                  : "dropdown"
              }
            >
              <span
                className={language !== "EN" ? "selected" : ""}
                onClick={()=>handleLanguageChange("ar")}
              >
                اردو
              </span>
              <span
                className={language === "EN" ? "selected" : ""}
                onClick={()=>handleLanguageChange("en")}
              >
                EN
              </span>
            </div>
          </li>
          <li className="contact-button">
            <Link className="nav-links" to="/contact">
              <button>
                <span>{t(`header.links.contactUs`)}</span>
              </button>
            </Link>
          </li>
        </ul>
        <div className="mobile-contacts">
          <BsFillTelephoneFill size={16} />
          <MdEmail size={20} />
        </div>
      </div>
    </div>
  );
};

export default Header;
