import React from "react";
import { Button } from "../button";
import style from "./Section.module.css";

const Section = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container1}>
        <div className={style.textH}>
          Drive into Adventure: Buy Your Dream Car Today!
        </div>
        <div className={style.container}>
          <div className={style.textP}>
            Are you looking for a hassle-free way to get around town or embark
            on an exciting road trip? Look no further than our car servicel
          </div>
          <div>
            <Button title={"Learn More"} />
          </div>
        </div>
      </div>
      <div>
        <img
          className={style.img}
          src="imges/backround/photo_2025-01-26_11-20-58.jpg"
          alt=""
        />
      </div>
      <div className={style.conteiner}>
        <div className={style.item1}>Awarded By World Best</div>
        <div className={style.item}>
          <span>67K</span>
          <span className={style.underitem1}>User Ratings</span>
        </div>
        <div className={style.item}>
          <span>100K</span>
          <span className={style.underitem2}>Successful Vehicles Rented</span>
        </div>
        <div className={style.item}>
          <span>100K</span>
          <span className={style.underitem3}>Satisfied and Happy Clients</span>
        </div>
      </div>
    </div>
  );
};

export default Section;
