import { useState, useEffect } from 'react';
import { usePointerPosition } from './usePointerPosition.js';

interface DelayedValueProps {
  value: { x: number; y: number };
  delay: number;
}

function useDelayedValue({ value, delay }: DelayedValueProps) {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    setTimeout(() => {
      setDelayedValue(value);
    }, delay);
  }, [value, delay]);

  return delayedValue;
}

export default function Canvas() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue({ value: pos1, delay: 100 });
  const pos3 = useDelayedValue({ value: pos2, delay: 200 });
  const pos4 = useDelayedValue({ value: pos3, delay: 100 });
  const pos5 = useDelayedValue({ value: pos3, delay: 50 });

  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </>
  );
}

interface DotProps {
  position: { x: number; y: number };
  opacity: number;
}

function Dot({ position, opacity }: DotProps) {
  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }}
    />
  );
}
