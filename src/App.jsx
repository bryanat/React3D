// import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";
import { Suspense } from "react";

const Scene = () => {
  const fbx = useFBX("biniso20.fbx");

  return <primitive object={fbx} scale={0.005} />;
};

export default function App() {
  // const fbx = useFBX("/home/bryanat/react3d/src/Assets/fbxgear/Gear2.fbx");

  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
