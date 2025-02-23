import React from "react";
import style from "./Button.module.css";
const   Button = ({ title, secondary, icon }) => {
  return (
    <button className={secondary ? style.secondary : style.button}>
      <span className={secondary?style.title:""}>{title}{icon}</span>
    </button>
  );
};

export default Button;
