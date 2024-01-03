import React, { useState } from "react";
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

const Join = () => {
  const url = process.env.REACT_APP_BACKEND_URL + "/create";

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
  const sliderCards = [
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

  return (
    <div className={styles.page}>
      <Investment
        backgroundImage={aboutscreen}
        heading1="Join Us"
        sub_heading="Always be close to us and part of our journey and get what you want from it’s source."
        button="Get Started"
      />
      <Heading
        heading2="Explore Jobs"
        description1="Building bridges of communication with others is part of our ambitious vision to keep pace with the national economic movement and towards greater effectiveness for society and for us as an important economic component in the Kingdom of Saudi Arabia."
      />

      <Slider cards={sliderCards} />

      <div className={styles.mainContainer}>
        {/* supplier */}
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.heading}>supplier</div>
            <div className={styles.main_heading}>
              Discover the benefits of collaborating with us as a supplier.
            </div>
            <div className={styles.sub_heading}>
              Integration in the commercial market is an important requirement,
              especially between the producer and the investor who wants to
              benefit from his experience and work in marketing products by
              obtaining an important role as a wholesale and retail trader.
              <br />
              <br />
              20 We at Saleh Al-Mudaifer Sons Holding Group seek to maximize the
              benefits of our commercial activity to include different segments
              of society and we welcome partnerships of this kind with all
              companies affiliated with the group.
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.form_heading}>
              Fill this form to get an quotation
            </div>
            <div className={styles.form_sub_heading}>
              Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit
              amet, consectetur. Lorem ipsum dolor sit amet
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.left_form_container}>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  required
                />
              </div>
              <div className={styles.left_form_container}>
                <input
                  type="email"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$"
                  placeholder="Email"
                  name="email"
                  required
                />
                <input
                  type="text"
                  pattern="^\d{7}$|^\d{10}$"
                  placeholder="Telephone"
                  title="Please Enter The Mobile Number"
                  name="phone"
                  required
                />
              </div>
              <div className={styles.left_form_container}>
                <select placeholder="Choose Industry">
                  <option>Choose Industry</option>
                  <option>Choose Package</option>
                </select>
                <select placeholder="Choose Package">
                  <option>Choose Industry</option>
                  <option>Choose Package</option>
                </select>
              </div>
              <div className={styles.button_and_textarea}>
                <button>Contact Us</button>
              </div>
              {/* <div className={styles.right_form_container}></div> */}
            </form>
          </div>
        </div>

        {/* client */}
        <div className={styles.container}>
          <div className={styles.right}>
            <div className={styles.form_heading}>
              Fill this form to get an quotation
            </div>
            <div className={styles.form_sub_heading}>
              Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit
              amet, consectetur. Lorem ipsum dolor sit amet
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.left_form_container}>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  required
                />
              </div>
              <div className={styles.left_form_container}>
                <input
                  type="email"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$"
                  placeholder="Email"
                  name="email"
                  required
                />
                <input
                  type="text"
                  pattern="^\d{7}$|^\d{10}$"
                  placeholder="Telephone"
                  title="Please Enter The Mobile Number"
                  name="phone"
                  required
                />
              </div>
              <div className={styles.left_form_container}>
                <select placeholder="Choose Industry">
                  <option>Choose Industry</option>
                  <option>Choose Package</option>
                </select>
                <select placeholder="Choose Package">
                  <option>Choose Industry</option>
                  <option>Choose Package</option>
                </select>
              </div>
              <div className={styles.button_and_textarea}>
                <button>Contact Us</button>
              </div>
              {/* <div className={styles.right_form_container}></div> */}
            </form>
          </div>
          <div className={styles.left}>
            <div className={styles.heading}>Client</div>
            <div className={styles.main_heading}>
              Discover the benefits of collaborating with us as a supplier.
            </div>
            <div className={styles.sub_heading}>
              Integration in the commercial market is an important requirement,
              especially between the producer and the investor who wants to
              benefit from his experience and work in marketing products by
              obtaining an important role as a wholesale and retail trader.
              <br />
              <br />
              20 We at Saleh Al-Mudaifer Sons Holding Group seek to maximize the
              benefits of our commercial activity to include different segments
              of society and we welcome partnerships of this kind with all
              companies affiliated with the group.
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
      />
    </div>
  );
};

export default Join;
