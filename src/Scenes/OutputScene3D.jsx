import React, { Suspense, useRef, useContext, useTransition } from "react";
import { FbxContext } from "./FbxContext";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX, PerspectiveCamera } from "@react-three/drei";
import { Box } from "@mui/material";

export default function OutputScene3D(props) {
  const { fbxfilename, setfbxfilename } = React.useContext(FbxContext)
  const fbx = useFBX(fbxfilename);

  const cameraRef = useRef();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
  <div style={{ flex: '1', margin: '0 22px' }}>
    <Suspense fallback={null}>
      <Canvas >
        <PerspectiveCamera makeDefault ref={cameraRef} position={[-3, 8, 30]} fov={75} near={0.1} far={1000} />
        <OrbitControls minDistance={22} maxDistance={44} camera={cameraRef.current} />
        <pointLight position={[1, 1, 1]} />
        <ambientLight />
        <primitive object={fbx} scale={0.005} />;
      </Canvas>
    </Suspense>
    </div>
    </div>
  );
}
