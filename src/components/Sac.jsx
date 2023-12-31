/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/sac1/scene.gltf -o src/components/Sac.jsx -r public 
Author: legenny (https://sketchfab.com/legenny)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sac-a-anses-50x60-sans-soufflet-000a3d9fa4ff4c888e71e698694eb0b0
Title: Sac à Anses 50x60 sans soufflet
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useCustomisation } from "../context/customisation";
export function Sac(props) {
  const {
    materiel,
    materials,
    faceColor,
    setFaceColor,
    brasColor,
    setBrasColor,
  } = useCustomisation();

  const { nodes } = useGLTF("/models/sac1/scene.gltf");
  console.log("faceColor", faceColor, "brascolor", brasColor);
  const faceTextures = useTexture({
    /*     map: './textures/face/Leather_Weave_002_basecolor.jpg', */
    normalMap: "./textures/face/Leather_Weave_002_normal.jpg",
    /*  displacementMap: './textures/face/Leather_Weave_002_height.jpg', */
    roughnessMap: "./textures/face/Leather_Weave_002_roughness.jpg",
    aoMap: "./textures/face/Leather_Weave_002_ambientOcclusion.jpg",
  });
  /*   faceTextures.map.repeat.set(2,2) */
  faceTextures.normalMap.repeat.set(2, 2);
  faceTextures.roughnessMap.repeat.set(2, 2);
  faceTextures.aoMap.repeat.set(2, 2);

  /*   faceTextures.map.wrapS=faceTextures.map.wrapT= */
  faceTextures.normalMap.wrapS =
    faceTextures.normalMap.wrapT =
    faceTextures.roughnessMap.wrapS =
    faceTextures.roughnessMap.wrapT =
    faceTextures.aoMap.wrapS =
    faceTextures.aoMap.wrapT =
      THREE.RepeatWrapping;
  /*  bas */
  const brasTextures = useTexture({
    /*     map: './textures/bras/Leather_008_Base Color.jpg', */
    normalMap: "./textures/bras/Leather_008_Normal.jpg",
    roughnessMap: "./textures/bras/Leather_008_Roughness.jpg",
    aoMap: "./textures/bras/Leather_008_Ambient Occlusion.jpg",
  });

  /*   brasTextures.map.repeat.set(2,2) */
  brasTextures.normalMap.repeat.set(2, 2);
  brasTextures.roughnessMap.repeat.set(2, 2);
  brasTextures.aoMap.repeat.set(2, 2);

  /*   brasTextures.map.wrapS=brasTextures.map.wrapT= */
  brasTextures.normalMap.wrapS =
    brasTextures.normalMap.wrapT =
    brasTextures.roughnessMap.wrapS =
    brasTextures.roughnessMap.wrapT =
    brasTextures.aoMap.wrapS =
    brasTextures.aoMap.wrapT =
      THREE.RepeatWrapping;
  return (
    <group {...props} dispose={null}>
      <group
        position={[885.861, 761.693, -570.5]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <group
          position={[0, 0.702, 131.244]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[9.204, 8.72, 8.72]}
        >
          <mesh
            geometry={
              nodes["17341_Tote_bag_womens002_Material_#114_0"].geometry
            }
            /* material={materials.Material_114} */ position={[0, 36.352, 0]}
          >
            <meshStandardMaterial
              {...(materiel === "bras" ? brasTextures : faceTextures)}
              color={brasColor}
            />
          </mesh>
        </group>
        <mesh
          geometry={nodes["Box076_Material_#114_0"].geometry}
          position={[0, 0.212, -330.164]}
        >
          <meshStandardMaterial {...faceTextures} color={faceColor} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/sac1/scene.gltf");
