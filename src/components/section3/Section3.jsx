import React from "react";
import styles from "./Section3.module.css";
import { TbSettingsStar } from "react-icons/tb";
import { GiSpeedometer } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";



const services = [
  {
    title: "Quality Service",
    description:
      "Getting pre-qualified makes car shopping easier because it gives you personalized financing.",
    icon: <TbSettingsStar />,
  },
  {
    title: "Fastest Speed",
    description:
      "Getting pre-qualified makes car shopping easier because it gives you personalized financing.",
    icon: <GiSpeedometer />,
  },
  {
    title: "24/7 Support",
    description:
      "Getting pre-qualified makes car shopping easier because it gives you personalized financing.",
    icon: <MdOutlineSupportAgent />,
  },
];

const Section3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.subTitle}>Our Service</span>
        <span className={styles.title}>We are the best service for car</span>
      </div>

      <div className={styles.cards}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>{service.icon}</span>
            </div>
            <h4 className={styles.cardTitle}>{service.title}</h4>
            <p className={styles.cardText}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
