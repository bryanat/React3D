import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";
import { Suspense } from "react";

export default function Scene3D() {
  const fbx = useFBX("biniso20.fbx");

  return (
    <Canvas >
      <Suspense fallback={null}>
        <pointLight position={[1, 1, 1]} />
        <ambientLight />
        <primitive object={fbx} scale={0.005} />;
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
