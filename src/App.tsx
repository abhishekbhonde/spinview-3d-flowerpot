import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Product from "./Product";
import GitHubBadge from "./GitHubBadge";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Product position={[0, 0, 0]} scale={[1, 1, 1]} />
        <OrbitControls enableZoom={true} />
        <Environment preset="studio" />
      </Canvas>

      <GitHubBadge username="abhishekbhonde" repoName="spinview-3d-flowerpot" />
    </div>
  );
}
