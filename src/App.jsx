import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

/* import { Canvas } from '@react-three/fiber' */
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  AccumulativeShadows,
  RandomizedLight,
  Decal,
  Environment,
  Center,
  OrbitControls,
} from "@react-three/drei";
import { Experience } from "./components/Experience";
import { Configuration } from "./components/Configuration";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomisationProvider } from "./context/customisation";
function App() {
  const [count, setCount] = useState(0);

  return (
    <CustomisationProvider>
      <div>
        <Canvas
          style={{ height: "90vh", width: "90rem" }}
          shadows
          camera={{ position: [4, 0.5, 10], fov: 25 }}
        >
          <color attach="background" args={["#101010"]} />
          <Experience />
        </Canvas>
        <Configuration />
      </div>
    </CustomisationProvider>
  );
}

export default App;
