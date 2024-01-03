import React from "react";
import styles from "./Media.module.css";
import Investment from "../../components/InvestmentOpp/Investment";
import media1 from "../../images/media/media1.png";
import media2 from "../../images/media/media2.png";
import Heading from "../../components/Heading/Heading";
import Testimonial from "../../resuable/testimonials/Testimonial";
import ImageBoxRight from "../../components/ImageBoxRight/ImageBoxRight";
import board from "../../images/home/board.jpg";
import { Link } from "react-router-dom";
import investscreen from "../../images/investment/investmentsscreen.png";
import Slider from "../../resuable/slider/Slider";
import worker1 from "../../images/join/worker1.png";
import worker2 from "../../images/join/worker2.png";
import worker3 from "../../images/join/worker3.png";
import { BsArrowRight } from "react-icons/bs";

const Media = () => {
  const sliderCards = [
    {
      image: worker1,
      heading: "Material Dealer",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
      buttonText: "Read More",
      date: "October 2, 2023",
    },
    {
      image: worker2,
      heading: "Material Dealer",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
      buttonText: "Read More",
      date: "October 2, 2023",
    },
    {
      image: worker3,
      heading: "Material Dealer",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
      buttonText: "Read More",
      date: "October 2, 2023",
    },
    {
      image: worker2,
      heading: "Material Dealer",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
      buttonText: "Read More",
      date: "October 2, 2023",
    },
    {
      image: worker1,
      heading: "Material Dealer",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
      buttonText: "Read More",
      date: "October 2, 2023",
    },
    {
      image: worker3,
      heading: "Material Dealer",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.",
      buttonText: "Read More",
      date: "October 2, 2023",
    },
  ];
  return (
    <div className={styles.page}>
      <Investment
        backgroundImage={investscreen}
        heading1="Media Center"
        sub_heading="Always be close to us and part of our journey and get what you want from it’s source."
        media={true}
      />
      <Heading
        // heading1="Partner with AL-MUDAYFER"
        heading2="News"
        description1="The most important developments about and about the group."
      />

      <Slider cards={sliderCards} />
      <div className={styles.media_section}>
        <div className={styles.media_kit}>
          <div className={styles.right}>
            <div className={styles.right_heading}>Media Kit</div>
            <div className={styles.right_sub_heading}>Management</div>
            <div className={styles.right_sub_heading}>Assets</div>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur. Vestibulum donec sapien
              sagittis auctor enim tincidunt nunc. Et in sed id varius viverra
              aliquam. Etiam elit massa faucibus risus sed purus malesuada.
            </p>
            <div className={styles.buttonArrow}>
              Open Media Kit
              <div className={styles.arrow}>
                <BsArrowRight />
              </div>
            </div>
          </div>
          <div className={styles.left}>
            <img src={media1} alt="" />
          </div>
        </div>
        <div className={styles.media_kit}>
          <div className={styles.left}>
            <img src={media2} alt="" />
          </div>
          <div className={styles.right}>
            <div className={styles.right_heading}>Media Relationship</div>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur. Vestibulum donec sapien
              sagittis auctor enim tincidunt nunc. Et in sed id varius viverra
              aliquam. Etiam elit massa faucibus risus sed purus malesuada.
            </p>
            <div className={styles.buttonArrow}>
              Contact
              <div className={styles.arrow}>
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Investment
        tag="PRESS RELEASE"
        heading1="Quality, Reliability, Leadership"
        sub_heading="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
        join={true}
      />
    </div>
  );
};

export default Media;
