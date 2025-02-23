import React, { useEffect, useState } from "react";
import style from "./Bages.module.css";
import { SiToyota, SiHonda, SiFord, SiTesla } from "react-icons/si";

const Bages = ({ onBadgeSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const savedIndex = localStorage.getItem("index");
    if (savedIndex) {
      setActiveIndex(+savedIndex);
      onBadgeSelect(+savedIndex);
    }
  }, [onBadgeSelect]);

  const handleActive = (index) => {
    setActiveIndex(index);
    localStorage.setItem("index", index);
    onBadgeSelect(index); 
  };

  const bagesInfo = [
    { title: "Mersedes-Benz", icon: <SiToyota size={30} /> },
    { title: "Honda Civic", icon: <SiHonda size={30} /> },
    { title: "Ford Mustang", icon: <SiFord size={30} /> },
    { title: "Tesla", icon: <SiTesla size={30} /> },
  ];

  return (
    <div className={style.bages}>
      {bagesInfo.map((bage, index) => (
        <button
          key={index}
          className={activeIndex === index ? style.bageActive : style.bage}
          onClick={() => handleActive(index)}
        >
          {bage.icon}
          {bage.title}
        </button>
      ))}
    </div>
  );
};

export default Bages;
