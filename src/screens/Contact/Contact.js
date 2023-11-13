import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import styles from './Contact.module.css';
import Heading from '../../components/Heading/Heading';
import location from '../../images/contact/location.svg'
import Investment from '../../components/InvestmentOpp/Investment';
import contact from '../../images/contact/contactscreen.jpg'
import phone from '../../images/contact/phone.svg'
import email from '../../images/contact/message.svg'
import whatsapp from '../../images/contact/whatsapp.svg'


const Contact = () => {
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
      axios.post(url, formData, {

      });
      toast.success('Form submitted successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });

      // Clear the form fields after a successful submission
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


  return (
    <>
      <Investment
        backgroundImage={contact}
        heading1="still curious?"
        heading2="contact us"
        sub_heading="New Industrial City - Al-Musafa
        District - Street 194 Riyadh - Kingdom of Saudi Arabia"
        button="Know More "
      />
      <div className={styles.blue_heading}>
        <div className={styles.blue_line}></div> stay in touch
      </div>
      <Heading
        heading2="LET’S GET IN TOUCH WITH OUR PROFESSIONALS TEAM WORKING"
        description1="Integration in the commercial market is an important requirement, especially between the producer and the investor who wants to benefit from his experience and work in marketing products by obtaining an important role as a wholesale and retail trader.20 We at Saleh Al-Mudaifer Sons Holding Group seek to maximize the benefits of our commercial activity to include different segments of society and we welcome partnerships of this kind with all companies affiliated with the group.
        "
      />


      <div className={styles.container_box}>

        <div className={styles.box}>
          <div className={styles.icon}>
            <img src={location} alt="" />
          </div>
          <div className={styles.heading}>office location</div>
          <div className={styles.sub_heading}>
            New Industrial City - Al-Musafa
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.icon}>
            <img src={email} alt="" />
          </div>
          <div className={styles.heading}>Email</div>
          <div className={styles.sub_heading}>
            info@smsh.com.sa
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.icon}>
            <img src={phone} alt="" />
          </div>
          <div className={styles.heading}>Phone</div>
          <div className={styles.sub_heading}>
            920000116
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.icon}>
            <img src={whatsapp} alt="" />
          </div>
          <div className={styles.heading}>Whatsapp</div>
          <div className={styles.sub_heading}>
            966501906677
          </div>
        </div>

      </div>


      <div className={styles.container}>  
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1844233.2919646518!2d44.08772330291176!3d25.471069451748104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fa19c19b9dc2f%3A0x7a97f6b0e808a934!2sAl%20Mudayfer%20Investment%20Group!5e0!3m2!1sen!2sin!4v1699300668702!5m2!1sen!2sin"
            width="600"
            height="800"
            styles={{ border: "none" }}
            className={styles.mapborder}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>


        <div className={styles.form}>
          <div className={styles.form_top}>
            <div className={styles.form_heading}>Keep in touch</div>
            <div className={styles.form_sub_heading}>please let us know how can we help you</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.main_form_container}>
              <div className={styles.left_form_container}>
                <div className={styles.label_name}>First name</div>
                <input
                  type="text"
                  placeholder='Ex. Aamir'
                  onChange={handleChange}
                  value={formData.firstName}
                  name="firstName"
                  required
                />
                <div className={styles.label_name}>email</div>
                <input
                  type="email"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$"
                  placeholder='Email'
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  required
                />
              </div>
              <div className={styles.left_form_container}>
                <div className={styles.label_name}>Last name</div>
                <input
                  type="text"
                  placeholder='Ex. Doe'
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <div className={styles.label_name}>Telephone</div>
                <input
                  type="text"
                  pattern="^\d{7}$|^\d{10}$"
                  placeholder='Telephone'
                  title="Please Enter The Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  name="phone"
                  required
                />
              </div>
            </div>
            <div className={styles.button_and_textarea}>
              <div className={styles.label_name}>Message</div>
              <input
                type="textarea"
                placeholder='Write Message'
                onChange={handleChange}
                value={formData.message}
                name="message"
                required
              />
              <div className={styles.send_button}>
                <button>
                  SEND MESSAGE
                </button>
              </div>
            </div>
            {/* <div className={styles.right_form_container}></div> */}
          </form>
        </div>


      </div>
    </>
  )
}

export default Contact