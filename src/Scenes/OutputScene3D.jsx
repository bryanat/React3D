import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";
import { Suspense, useTransition } from "react";

export default function OutputScene3D() {

  // const [isPending, startTransition] = useTransition();

  const fbx = useFBX("biniso20.fbx");

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
