import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function HoloFace({ img }) {
  const texture = useLoader(TextureLoader, img);
  const meshRef = useRef();

  // Автоматическое вращение
  useFrame(() => {
    meshRef.current.rotation.y += 0.004;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[1.2, 1.6]} /> {/* форма – вертикальная "маска" */}
      <meshStandardMaterial
        map={texture}
        transparent
        opacity={0.92}
        emissive={"#4cc9f0"}
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

export default function HoloAvatar({ img }) {
  return (
    <div className="avatar-3d-wrapper">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 4, 4]} intensity={1} />
        <HoloFace img={img} />
      </Canvas>
    </div>
  );
}
