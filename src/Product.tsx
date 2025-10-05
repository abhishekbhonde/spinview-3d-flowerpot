import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

type ProductProps = {
  position?: [number, number, number];
  scale?: [number, number, number];
};

export default function Product({ position = [0, 0, 0], scale = [1, 1, 1] }: ProductProps) {
  const ref = useRef<THREE.Object3D>(null);
  const gltf = useGLTF("/models/flowerpot.glb");

  // ✅ Leva Controls
  const { rotationSpeed, color, posX, posY, posZ, scaleFactor } = useControls("Model Controls", {
    rotationSpeed: { value: 0.3, min: 0, max: 2, step: 0.01 },
    color: "",
    posX: { value: position[0], min: -5, max: 5, step: 0.1 },
    posY: { value: position[1], min: -5, max: 5, step: 0.1 },
    posZ: { value: position[2], min: -5, max: 5, step: 0.1 },
    scaleFactor: { value: scale[0], min: 0.1, max: 5, step: 0.1 },
  });

  // ✅ Animate rotation
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * rotationSpeed;
  });

  // ✅ Apply color to model meshes
  gltf.scene.traverse((child: any) => {
    if (child.isMesh) {
      child.material.color.set(color);
    }
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={[posX, posY, posZ]}
      scale={[scaleFactor, scaleFactor, scaleFactor]}
    />
  );
}
