import React, { Suspense, useContext, useTransition } from "react";
import { FbxContext } from "./FbxContext";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";

export default function OutputScene3D(props) {
  const { fbxfilename, setfbxfilename } = React.useContext(FbxContext)
  const fbx = useFBX(fbxfilename);

  return (
    <Suspense fallback={null}>
      <Canvas >
        <pointLight position={[1, 1, 1]} />
        <ambientLight />
        <primitive object={fbx} scale={0.005} />;
        <OrbitControls 
          makeDefault
          position={[500, 0.9, 1.8]}
          fov={60}
          zoom={0.9}
        />
      </Canvas>
    </Suspense>
  );
}
