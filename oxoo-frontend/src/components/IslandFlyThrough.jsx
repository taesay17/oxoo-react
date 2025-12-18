import React from "react";
import { Float, useTexture } from "@react-three/drei";

useTexture.preload(`${process.env.PUBLIC_URL}/images/family.png`);
useTexture.preload(`${process.env.PUBLIC_URL}/images/labor.png`);
useTexture.preload(`${process.env.PUBLIC_URL}/images/prof.png`);


export default function IslandFlyThrough({ onIslandClick, size = 1.8 }) {

  const textures = useTexture({
    family: `${process.env.PUBLIC_URL}/images/family.png`,
    labor: `${process.env.PUBLIC_URL}/images/labor.png`,
    professions: `${process.env.PUBLIC_URL}/images/prof.png`,

  });

  return (
    <>
      {/* Семья */}
      <Float floatIntensity={2} rotationIntensity={1}>
        <mesh
          position={[-4, 0.5, 0]}
          onClick={() => onIslandClick("family")}
        >
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial map={textures.family} />
        </mesh>
      </Float>

      {/* Труд */}
      <Float floatIntensity={2} rotationIntensity={1}>
        <mesh
          position={[0, -0.5, 0]}
          onClick={() => onIslandClick("labor")}
        >
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial map={textures.labor} />
        </mesh>
      </Float>

      {/* Профессии */}
      <Float floatIntensity={2} rotationIntensity={1}>
        <mesh
          position={[4, 0.5, 0]}
          onClick={() => onIslandClick("professions")}
        >
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial map={textures.professions} />
        </mesh>
      </Float>
    </>
  );
}
