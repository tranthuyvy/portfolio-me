'use client';

import {
  Decal,
  Float,
  Preload,
  useTexture,
  OrbitControls,
} from '@react-three/drei';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { StaticImageData } from 'next/image';

import CanvasLoader from './loader';

// -----------------------------------------------

interface BallProps {
  imgUrl: StaticImageData;
}

function Ball(props: BallProps) {
  const [decal] = useTexture([props.imgUrl.src]);

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 0, 0.05]} intensity={2} />
      <mesh castShadow receiveShadow scale={3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          // flatShading
        />
      </mesh>
    </Float>
  );
}

interface BallCanvasProps {
  icon: StaticImageData;
}

function BallCanvas({ icon }: BallCanvasProps) {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default BallCanvas;
