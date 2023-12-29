import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


import styles from './Join.module.css';
import Investment from '../../components/InvestmentOpp/Investment'
import Heading from '../../components/Heading/Heading'
import aboutscreen from '../../images/join/aboutscreen.jpg'
import Company from '../../components/Company/Company'
import value from '../../images/home/ourvalue.jpg'
import { AiOutlineLine } from 'react-icons/ai'
import Slider from '../../resuable/slider/Slider';

import worker from '../../images/join/worker.jpg'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';




const Join = () => {
  const { t } = useTranslation();
  const {id} = useParams()
 

  const url = process.env.REACT_APP_BACKEND_URL + "/create"



  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
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
      await axios.post(url, formData, {
      });

      toast.success('Form submitted successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      toast.error('Please Check Fields!', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };




  

 // SLIDER IMAGES
  const sliderCardsEn = [
    {
      image: worker,
      badge: 'dealer',
      heading: 'MATERIAL DEALER',
      subHeading: 'Lorem ipsum dolor sit amet',
      buttonText: 'read more',
    },
    {
      image: worker,
      badge: 'dealer',
      heading: 'MATERIAL DEALER',
      subHeading: 'Lorem ipsum dolor sit amet',
      buttonText: 'read more',
    },
    {
      image: worker,
      badge: 'dealer',
      heading: 'MATERIAL DEALER',
      subHeading: 'Lorem ipsum dolor sit amet',
      buttonText: 'read more',
    },
    {
      image: worker,
      badge: 'dealer',
      heading: 'MATERIAL DEALER',
      subHeading: 'Lorem ipsum dolor sit amet',
      buttonText: 'read more',
    },
    {
      image: worker,
      badge: 'dealer',
      heading: 'MATERIAL DEALER',
      subHeading: 'Lorem ipsum dolor sit amet',
      buttonText: 'read more',
    },
    {
      image: worker,
      badge: 'dealer',
      heading: 'MATERIAL DEALER',
      subHeading: 'Lorem ipsum dolor sit amet',
      buttonText: 'read more',
    },
  ];

  const sliderCardsAr =[
    {
      image: worker,
      badge: "تاجر",
      heading: "تاجر مواد",
      subHeading: "لوريم إيبسوم دولور سيت أميت",
      buttonText: "قراءة المزيد"
    },
    {
      image: worker,
      badge: "تاجر",
      heading: "تاجر مواد",
      subHeading: "لوريم إيبسوم دولور سيت أميت",
      buttonText: "قراءة المزيد"
    },
    {
      image: worker,
      badge: "تاجر",
      heading: "تاجر مواد",
      subHeading: "لوريم إيبسوم دولور سيت أميت",
      buttonText: "قراءة المزيد"
    },
    {
      image: worker,
      badge: "تاجر",
      heading: "تاجر مواد",
      subHeading: "لوريم إيبسوم دولور سيت أميت",
      buttonText: "قراءة المزيد"
    },
    {
      image: worker,
      badge: "تاجر",
      heading: "تاجر مواد",
      subHeading: "لوريم إيبسوم دولور سيت أميت",
      buttonText: "قراءة المزيد"
    },
    {
      image: worker,
      badge: "تاجر",
      heading: "تاجر مواد",
      subHeading: "لوريم إيبسوم دولور سيت أميت",
      buttonText: "قراءة المزيد"
    }
  ];


  return (
    <>
      <Investment
        backgroundImage={aboutscreen}
        heading1="join us"
        sub_heading="Always be close to us and part of our journey and get what you want from it’s source."
        button="get started"
        page="join"
      />
      {/* <Heading
        heading1="Partner with AL-MUDAYFER"
        heading2="explore jobs"
        description1="Building bridges of communication with others is part of our ambitious vision to keep pace with the national economic movement and towards greater effectiveness for society and for us as an important economic component in the Kingdom of Saudi Arabia."
        page="join"
      />

      <Slider cards={  localStorage.getItem('i18nextLng') === "ar" ?sliderCardsAr :  sliderCardsEn}/> */}

      {/* supplier */}
      <div className={styles.container} id='formSection'>
        <div className={styles.left}>
          <div className={styles.heading}> <div className={styles.mid_line}></div>{`Join As a ${id}`}</div>
          <div className={styles.main_heading}>
          {t('join.supplier.mainHeading') +' '+id +'.'}
          </div>
          <div className={styles.sub_heading1}>
          {t('join.supplier.subHeading1')}
          </div>
          {/* <div className={styles.sub_heading2}>
            Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.
          </div> */}
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <div className={styles.form_top}>
              <div className={styles.form_heading}>{t('join.supplier.form.formHeading')}</div>
              <div className={styles.form_sub_heading}>
              {t('join.supplier.form.formHeading')} </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={styles.main_form_container}>
                <div className={styles.left_form_container}>
                  <div className={styles.label_name}>{t('join.supplier.form.labels.firstName')}</div>
                  <input
                    type="text"
                    placeholder='Ex. Aamir'
                    onChange={handleChange}
                    value={formData.firstName}
                    name="firstName"
                    required
                  />
                  <div className={styles.label_name}>{t('join.supplier.form.labels.email')}</div>
                  <input
                    type="email"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$"
                    placeholder={t('join.supplier.form.labels.email')}
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    required
                  />
                </div>
                <div className={styles.left_form_container}>
                  <div className={styles.label_name}>{t('join.supplier.form.labels.lastName')}</div>
                  <input
                    type="text"
                    placeholder='Ex. Doe'
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <div className={styles.label_name}>{t('join.supplier.form.labels.telephone')}</div>
                  <input
                    type="text"
                    pattern="^\d{7}$|^\d{10}$"
                    placeholder={t('join.supplier.form.labels.telephone')}
                    title="Please Enter The Mobile Number"
                    value={formData.phone}
                    onChange={handleChange}
                    name="phone"
                    required
                  />
                </div>
              </div>
              <div className={styles.button_and_textarea}>
                <div className={styles.label_name}>{t('join.supplier.form.labels.message')}</div>
                <input
                  type="textarea"
                  placeholder='Write Message'
                  onChange={handleChange}
                  value={formData.message}
                  name="message"
                  required
                />
                <div className={styles.send_button}>
                  <button onClick={console.log("formData",formData)}>
                  {t('join.supplier.form.button')}
                  </button>
                </div>
              </div>
              {/* <div className={styles.right_form_container}></div> */}
            </form>
          </div>
        </div>
      </div>

      {/* client */}
      {/* <div className={styles.container}>

        <div className={styles.right}>
          <div className={styles.form}>
            <div className={styles.form_top}>
              <div className={styles.form_heading}>{t('join.client.form.heading')}</div>
              <div className={styles.form_sub_heading}>
              {t('join.client.form.subHeading')}              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={styles.main_form_container}>
                <div className={styles.left_form_container}>
                  <div className={styles.label_name}>{t('join.client.form.labels.firstName')}</div>
                  <input
                    type="text"
                    placeholder={t('join.client.form.placeholders.firstName')}
                    onChange={handleChange}
                    value={formData.firstName}
                    name="firstName"
                    required
                  />
                  <div className={styles.label_name}>{t('join.client.form.labels.email')}</div>
                  <input
                    type="email"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$"
                    placeholder={t('join.client.form.placeholders.email')}
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    required
                  />
                </div>
                <div className={styles.left_form_container}>
                  <div className={styles.label_name}>{t('join.client.form.labels.lastName')}</div>
                  <input
                    type="text"
                    placeholder={t('join.client.form.placeholders.lastName')}
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <div className={styles.label_name}>{t('join.client.form.labels.phone')}</div>
                  <input
                    type="text"
                    pattern="^\d{7}$|^\d{10}$"
                    placeholder={t('join.client.form.placeholders.phone')}
                    title="Please Enter The Mobile Number"
                    value={formData.phone}
                    onChange={handleChange}
                    name="phone"
                    required
                  />
                </div>
              </div>
              <div className={styles.button_and_textarea}>
                <div className={styles.label_name}>{t('join.client.form.labels.message')}</div>
                <input
                  type="textarea"
                  placeholder={t('join.client.form.placeholders.message')}
                  onChange={handleChange}
                  value={formData.message}
                  name="message"
                  required
                />
                <div className={styles.send_button}>
                  <button>
                  {t('join.client.form.button')}
                  </button>
                </div>
              </div>
        
            </form>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.heading}> <div className={styles.mid_line}></div>{t('join.client.joinHeading')}</div>
          <div className={styles.main_heading}>
          {t('join.client.mainHeading')}
          </div>
          <div className={styles.sub_heading1}>
          {t('join.client.subHeading1')}</div>
          <div className={styles.sub_heading2}>
          {t('join.client.subHeading2')} </div>
        </div>
      </div> */}

      <Company
        backgroundImage={value}
        heading1="INVESTMENT"
        heading2="OPPORTUNITIES"
        sub_heading="The name that has been associated with building and construction works for development monuments over generations from the Kingdom of Saudi Arabia and to the Middle East."
        button="Know More "
        page="join"
      />


    </>
  )
}

export default Join