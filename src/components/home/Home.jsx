import React, { useState } from "react";
import style from "./Home.module.css";
import { Button } from "../button";
import { Corvette } from "../corvette";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";

const Home = () => {
  const [hold, setHold] = useState("black");
  const handlerColor = (colors) => {
    colors === hold ? setHold("") : setHold(colors);
  };

  return (
    <div className={style.home}>
      <div>
        <h1>Buy Your Dream Car</h1>
        <h2>
          If you're ready to take your Ul Motion Design skills to the next level
          and join a dynamic and growing team
        </h2>
        <div className={style.button}>
          <Button title="Buy now" />
          <Button title="Learn More" secondary />
        </div>
      </div>
      <div>
        <div className={style.colors}>
          <button
            onClick={() => handlerColor("black")}
            className={hold === "black" ? style.blackActive : style.black}
          ></button>
          <button
            onClick={() => handlerColor("red")}
            className={hold === "red" ? style.redActive : style.red}
          ></button>
          <button
            onClick={() => handlerColor("gold")}
            className={hold === "gold" ? style.goldActive : style.gold}
          ></button>
        </div>
        {/* <Canvas className={style.corvette}>
          <PresentationControls
            global config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
            <mesh position={[1, 0, 0]} rotate={50}>
              <Corvette
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, 0.25, 0]}
                scale={0.003}
              />
            </mesh>
          </PresentationControls>
          <Environment preset="sunset" />

          <ambientLight intensity={0.1} />
          <directionalLight
            castShadow
            position={[5, 5, 5]}
            intensity={1}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            color={hold}
          />
        </Canvas> */}
      </div>
    </div>
  );
};

export default Home;
