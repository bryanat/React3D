import React, { Suspense, useContext, useEffect, useTransition } from "react";
import { FbxContext } from "./FbxContext";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";

export default function OutputScene3D(props) {

  const { fbxfilename, setfbxfilename } = React.useContext(FbxContext)
  const [fbxname, setfbxname] = React.useState("biniso20.fbx")

  useEffect(() => {
    try {
      setfbxname(fbxfilename)
    } catch (error) {
      setfbxname("biniso20.fbx")
      console.error(`Could not load biniso20.fbx: ${error}`);
    }
    console.log(`the name is: ${fbxfilename}`)
  }, [fbxfilename])

  // const fbx = useFBX("biniso20.fbx");
  const fbx = useFBX(fbxname);

  return (
    <Suspense fallback={null}>
      <Canvas >
        <pointLight position={[1, 1, 1]} />
        <ambientLight />
        <primitive object={fbx} scale={0.005} />;
        <OrbitControls />
      </Canvas>
    </Suspense>
  );
}
