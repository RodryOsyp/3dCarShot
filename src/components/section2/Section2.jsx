import React from "react";
import styles from "./Section.module.css";
import { Button } from "../button";
import { GoArrowUpRight } from "react-icons/go";

const Section2 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.underCard}>
        <h4 className={styles.featureText}>Feature Cars</h4>
        <h2 className={styles.title}>Mercedes-Benz Maybach S-Class</h2>
        <div className={styles.infoGrid}>
          <div>
            <p className={styles.label}>Price</p>
            <p className={styles.value}>$12,999</p>
          </div>
          <div>
            <p className={styles.label}>Speed-Up</p>
            <p className={styles.value}>
              150 <span className={styles.unit}>Km/H</span>
            </p>
          </div>
          <div>
            <p className={styles.label}>Consumption</p>
            <p className={styles.value}>
              12 <span className={styles.unit}>Liters</span>
            </p>
          </div>
        </div>
        <div className={styles.button}><Button title={"Buy Now"} icon={<GoArrowUpRight size={15}/>}/></div>
      </div>
      <div ><img className={styles.img} src="imges/Car/photo_2025-02-09_10-09-46-removebg-preview.png" alt="" /></div>
    </div>
  );
};

export default Section2;
