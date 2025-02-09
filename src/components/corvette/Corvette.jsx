import { useLoader, useGraph } from "@react-three/fiber";
import { MTLLoader } from "three/examples/jsm/Addons.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useEffect, useState } from "react";

const Corvette = () => {
  const [obj, setObj] = useState(null);
  const [materials, setMaterials] = useState(null);

  const matireals = useLoader(MTLLoader, "models/Corvette.mtl");
  useEffect(() => {
    matireals.preload();
    setMaterials(matireals);
  }, [matireals]);

  useEffect(() => {
    if (materials) {
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load("models/Corvette.obj", (object) => {
        setObj(object);
      });
    }
  }, [materials]);

  if (!obj) return null; 

  return <primitive object={obj} scale={13} rotation={[0.4, 5.5, 0.1]} />;
};

export default Corvette;
