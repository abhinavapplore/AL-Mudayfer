import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import styles from "./Join.module.css";
import Investment from "../../components/InvestmentOpp/Investment";
import Heading from "../../components/Heading/Heading";
import aboutscreen from "../../images/join/join.png";
import Company from "../../components/Company/Company";
import value from "../../images/home/ourvalue.jpg";
import { AiOutlineLine } from "react-icons/ai";
import Slider from "../../resuable/slider/Slider";

import worker1 from "../../images/join/worker1.png";
import worker2 from "../../images/join/worker2.png";
import worker3 from "../../images/join/worker3.png";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";

const Join = () => {
  const url = process.env.REACT_APP_BACKEND_URL + "/create";
  const {id} = useParams()
  const { t } = useTranslation()
  const [slider,setslider] = useState([])

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, formData, {});

      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error("Please Check Fields!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  // SLIDER IMAGES
  const EnsliderCards = [
    {
      image: worker1,
      heading: "Material Dealer",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
      buttonText: "Apply Now",
    },
    {
      image: worker2,
      heading: "Material Dealer",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
      buttonText: "Apply Now",
    },
    {
      image: worker3,
      heading: "Material Dealer",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
      buttonText: "Apply Now",
    },
    {
      image: worker2,
      heading: "Material Dealer",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
      buttonText: "Apply Now",
    },
    {
      image: worker1,
      heading: "Material Dealer",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
      buttonText: "Apply Now",
    },
    {
      image: worker3,
      heading: "Material Dealer",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
      buttonText: "Apply Now",
    },
  ];

 const ArsliderCards =[
    {
      "image": worker1,
      "heading": "تاجر المواد",
      "subHeading": "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إليت. فوكيبوس فرينجيلا دوي أميت فوكيبوس نام.",
      "buttonText": "قدّم الآن"
    },
    {
      "image": worker2,
      "heading": "تاجر المواد",
      "subHeading": "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إليت. فوكيبوس فرينجيلا دوي أميت فوكيبوس نام.",
      "buttonText": "قدّم الآن"
    },
    {
      "image": worker3,
      "heading": "تاجر المواد",
      "subHeading": "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إليت. فوكيبوس فرينجيلا دوي أميت فوكيبوس نام.",
      "buttonText": "قدّم الآن"
    },
    {
      "image": worker2,
      "heading": "تاجر المواد",
      "subHeading": "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إليت. فوكيبوس فرينجيلا دوي أميت فوكيبوس نام.",
      "buttonText": "قدّم الآن"
    },
    {
      "image": worker1,
      "heading": "تاجر المواد",
      "subHeading": "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إليت. فوكيبوس فرينجيلا دوي أميت فوكيبوس نام.",
      "buttonText": "قدّم الآن"
    },
    {
      "image": worker3,
      "heading": "تاجر المواد",
      "subHeading": "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسينغ إليت. فوكيبوس فرينجيلا دوي أميت فوكيبوس نام.",
      "buttonText": "قدّم الآن"
    }
  ]
  
  useEffect(()=>{
    const storedLanguage = localStorage.getItem('i18nextLng');
    setslider(storedLanguage === 'ar' ? ArsliderCards : EnsliderCards)
    
  },[localStorage.getItem('i18nextLng')])

  useEffect(()=>{

    if(id=="supplier"){
      window.location.href ="#formSection"
    }
    else if(id=="investor"){
      window.location.href ="#clientsection"
    }
    else if(id=="employee"){
      window.location.href ="#employeesection"
    }
   
  },[id])




  return (
    <div className={styles.page}>
      <Investment
        backgroundImage={aboutscreen}
        heading1="Join Us"
        sub_heading="Always be close to us and part of our journey and get what you want from it’s source."
        button="Get Started"
        page="join"
      />
      <Heading
        heading2="Explore Jobs"
        description1="Building bridges of communication with others is part of our ambitious vision to keep pace with the national economic movement and towards greater effectiveness for society and for us as an important economic component in the Kingdom of Saudi Arabia."
        page="join"
      />

      <Slider cards={slider} />

      <div className={styles.mainContainer} id='formSection'>
        {/* supplier */}
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.heading}> {t(`join.supplier.heading`)}</div>
            <div className={styles.main_heading}>
              {t(`join.supplier.mainHeading`)}
            </div>
            <div className={styles.sub_heading}>
              {t(`join.supplier.subHeading1`)}
              <br />
              <br />
              {t(`join.supplier.subHeading2`)}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.form_heading}>
              {t(`join.supplier.formHeading`)}            </div>
            <div className={styles.form_sub_heading}>
              {t(`join.supplier.formSubHeading`)}
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.left_form_container}>
                <input
                  type="text"
                  placeholder={t(`join.supplier.formFields.firstName`)}
                  name="firstName"
                  required
                />
                <input
                  type="text"
                  placeholder={t(`join.supplier.formFields.lastName`)}
                  name="lastName"
                  required
                />
              </div>
              <div className={styles.left_form_container}>
                <input
                  type="email"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$"
                  placeholder={t(`join.supplier.formFields.email`)}
                  name="email"
                  required
                />
                <input
                  type="text"
                  pattern="^\d{7}$|^\d{10}$"
                  placeholder={t(`join.supplier.formFields.phone`)}
                  title="Please Enter The Mobile Number"
                  name="phone"
                  required
                />
              </div>
              <div className={styles.left_form_container}>
                <select placeholder={t(`join.supplier.formFields.industry`)} >
                  <option>Choose Industry</option>
                  <option>Choose Package</option>
                </select>
                <select placeholder={t(`join.supplier.formFields.package`)}>
                  <option>Choose Industry</option>
                  <option>Choose Package</option>
                </select>
              </div>
              <div className={styles.button_and_textarea}>
                <button>{t(`join.supplier.submitButton`)}</button>
              </div>
              {/* <div className={styles.right_form_container}></div> */}
            </form>
          </div>
        </div>

        {/* client */}
        <div className={styles.container} id="clientsection">
          <div className={styles.right}>
            <div className={styles.form_heading}>
              {t(`join.client.formHeading`)}
            </div>
            <div className={styles.form_sub_heading}>
              {t(`join.client.formSubHeading`)}
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.left_form_container}>
                <input
                  type="text"
                  placeholder={t(`join.client.formFields.firstName`)}
                  name="firstName"
                  required
                />
                <input
                  type="text"
                  placeholder={t(`join.client.formFields.lastName`)}
                  name="lastName"
                  required
                />
              </div>
              <div className={styles.left_form_container}>
                <input
                  type="email"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$"
                  placeholder={t(`join.client.formFields.email`)}
                  name="email"
                  required
                />
                <input
                  type="text"
                  pattern="^\d{7}$|^\d{10}$"
                  placeholder={t(`join.client.formFields.phone`)}
                  title="Please Enter The Mobile Number"
                  name="phone"
                  required
                />
              </div>
              <div className={styles.left_form_container}>
                <select placeholder={t(`join.client.formFields.industry`)} >
                  <option>Choose Industry</option>
                  <option>Choose Package</option>
                </select>
                <select placeholder={t(`join.client.formFields.package`)}>
                  <option>Choose Industry</option>
                  <option>Choose Package</option>
                </select>
              </div>
              <div className={styles.button_and_textarea}>
                <button>{t(`join.client.submitButton`)}</button>
              </div>
              {/* <div className={styles.right_form_container}></div> */}
            </form>
          </div>
          <div className={styles.left}>
            <div className={styles.heading}>{t(`join.client.heading`)}</div>
            <div className={styles.main_heading}>
              {t(`join.client.mainHeading`)}
            </div>
            <div className={styles.sub_heading}>
            {t(`join.client.subHeading1`)}
              <br />
              <br />
              {t(`join.client.subHeading2`)}
            </div>
          </div>
        </div>
      </div>

      <Investment
        tag="PRESS RELEASE"
        heading1="Investment Opportunities"
        sub_heading="The name that has been associated with building and construction works for development monuments over generations from the Kingdom of Saudi Arabia and to the Middle East"
        button="Know More"
        join={true}
        page="joinInvest"
      />
    </div>
  );
};

export default Join;
