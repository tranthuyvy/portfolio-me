'use client';

import React from 'react';
import { Html, useProgress } from '@react-three/drei';

// ----------------------------------------------------------------------

export default function CanvasLoader(): React.JSX.Element {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 16,
          color: '#F1F1F1',
          fontWeight: 600,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
}
