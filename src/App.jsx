// import './Assets/App.css'
import { Suspense } from "react";
import Scene3D from "./Scenes/Scene3D";
import SceneTensor from "./Scenes/SceneTensor";

export default function App() {
  return (
    <div className="App" style={{ width: '100%', height: '100vh' }}>
      <SceneTensor />
      <Scene3D />
    </div>
  );
}
