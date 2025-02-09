import React from "react";
import style from "./CarDetails.module.css";
import { FaStar } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";

const CarDetails = ({ price, rating, description }) => {
  return (
    <div className={style.violetPriceCarDetailInformation}>
      <div className={style.box2}>
        <div className={style.explore}>Explore our new car</div>
        <div className={style.arrowDown}>
          <FaArrowDown />
        </div>
      </div>
      <div className={style.dollar}>
        <div className={style.cash}>{price}</div>
        <div className={style.rating}>
          <FaStar color="#FFAD3E" /> {rating}
        </div>
        <div className={style.description}>{description}</div>
      </div>
    </div>
  );
};

export default CarDetails;
