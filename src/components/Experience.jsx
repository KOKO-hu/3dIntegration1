import {
  CameraControls,
  Float,
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Sac } from "./Sac";
export const Experience = () => {
  const gltf = useLoader(GLTFLoader, "./models/sac1/scene.gltf");
  return (
    <>
      <PresentationControls
        global
        speed={1}
        zoom={0.7}
        rotation={[0, 0, 0]}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment={"city"} intensity={0.6} contactShadow={false}>
          <Sac />
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[300, 100]} 
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh>
      </PresentationControls>
    </>
  );
};
