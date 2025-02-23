import React, { useState } from "react";
import style from "./Hero.module.css";
import { IoArrowRedo } from "react-icons/io5";
import Bages from "../bages/Bages";
import CarDetails from "../carDeteils/CarDetails ";
import Nigers from "../nigers/Nigers";
import Section from "../section/Section";
import Section2 from "../section2/Section2";
import Section3 from "../section3/Section3";

const Hero = () => {
  const [selectedCarIndex, setSelectedCarIndex] = useState(0);

  const carInfo = [
    {
      title: { main: "Mercedes-Benz", sub: "Mercedes S-Class" },
      img: "imges/2022-Mercedes-Benz-S-Class-hero.png",
      tag: "#MercedesBenz",
      rating: 4.8,
      price: "$110,000",
    },
    {
      title: { main: "Honda", sub: "Honda Civic" },
      img: "imges/Jellybean-21-Honda-Civic.png",
      tag: "#HondaCivic",
      rating: 4.5,
      price: "$25,000",
    },
    {
      title: { main: "Ford", sub: "Ford Mustang" },
      img: "imges/Ford-Mustang-Download-Free-PNG.png",
      tag: "#FordMustang",
      rating: 4.7,
      price: "$55,000",
    },
    {
      title: { main: "Tesla", sub: "Tesla Model S" },
      img: "imges/c18a535d-a96f-4499-a4fb-7a0f4e22a238.webp",
      tag: "#TeslaModelS",
      rating: 4.9,
      price: "$85,000",
    },
  ];

  const currentCar = carInfo[selectedCarIndex];

  return (
    <>
      <div>
        <Nigers/>
      </div>
      <div className={style.hero}>
        <Bages onBadgeSelect={setSelectedCarIndex} />
        <div className={style.mersedes}>
          <div className={style.text}>
            <div className={style.box}>
              <div className={style.toyota}>{currentCar.tag}</div>
              <div className={style.arrow}>
                <IoArrowRedo />
              </div>
            </div>
            <div className={style.mersedesText}>
              {currentCar.title.main} {currentCar.title.sub}
            </div>
            <div className={style.containerCar}>
              <img
                src={currentCar.img}
                className={style.imgCar}
                alt={currentCar.title.main}
              />
            </div>
          </div>
        </div>
        <CarDetails
          price={currentCar.price}
          rating={currentCar.rating}
          description={`"I love this car. This car is amazing."`}
        />
      </div>
      <div>
        <Section/>
        <Section2/>
        <Section3/>
      </div>
    </>
  );
};

export default Hero;
