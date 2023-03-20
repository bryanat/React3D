import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export default function InputScene3D() {

  return (
    <Canvas >
      <Suspense fallback={null}>
        <pointLight position={[1, 1, 1]} />
        <ambientLight />
        {/* <Box3D /> */}
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
