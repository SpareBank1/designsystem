import React, { useEffect, useRef } from 'react';



interface WaveProps {
  height?: number;
  amplitude?: number; // waveDelta
  speed?: number;     // factor multiplier
  points?: number;    // wavePoints
  fill?: string;
  align?: 'top' | 'bottom';
  paused?: boolean;
}

const Wave: React.FC<WaveProps> = ({
  height = 200,
  amplitude = 30,
  speed = 1,
  points = 6,
  fill = '#005AA4',
  align = 'bottom',
  paused = false,
}) => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const width = 1440; // virtual width for path math, svg scales via preserveAspectRatio="none"

  // Calculate wave points using sine
  const calculatePoints = (factor: number) => {
    const pts: { x: number; y: number }[] = [];
    // Calculate baseline based on alignment with padding to prevent edge collisions
    // For top alignment, add extra padding to keep wave from hitting the top edge
    const edgePadding = amplitude * 2;
    const baseline = align === 'top' ? amplitude + edgePadding : height - amplitude;
    
    for (let i = 0; i <= points; i++) {
      const x = (i / points) * width;
      const sinSeed = (factor + (i + (i % points))) * speed * 100;
      // Calculate displacement from baseline (positive is up, negative is down)
      const displacement = Math.sin(sinSeed / 100) * amplitude;
      // For top alignment, wave goes down from top; for bottom alignment, wave goes up from bottom
      const y = align === 'top' ? baseline + displacement : baseline - displacement;
      pts.push({ x, y });
    }
    return pts;
  };

  const buildPath = (pts: { x: number; y: number }[]) => {
    if (!pts.length) return '';
    let d = `M ${pts[0].x} ${pts[0].y}`;

    // initial control point
    const cp0x = (pts[1].x - pts[0].x) / 2;
    const cp0y = (pts[1].y - pts[0].y) + pts[0].y + (pts[1].y - pts[0].y);
    d += ` C ${cp0x} ${cp0y} ${cp0x} ${cp0y} ${pts[1].x} ${pts[1].y}`;

    let prevCp = { x: cp0x, y: cp0y };

    for (let i = 1; i < pts.length - 1; i++) {
      const cp1x = pts[i].x - prevCp.x + pts[i].x;
      const cp1y = pts[i].y - prevCp.y + pts[i].y;
      d += ` C ${cp1x} ${cp1y} ${cp1x} ${cp1y} ${pts[i + 1].x} ${pts[i + 1].y}`;
      prevCp = { x: cp1x, y: cp1y };
    }

    // close at bottom and left
    d += ` L ${width} ${height}`;
    d += ` L 0 ${height} Z`;
    return d;
  };

  useEffect(() => {
    if (paused) return;
    let frameId: number;
    let lastUpdate: number | undefined;
    let total = 0;

    const tick = (now: number) => {
      if (!lastUpdate) {
        lastUpdate = now;
      }
      const elapsed = (now - lastUpdate) / 1000;
      lastUpdate = now;
      total += elapsed;

      const factor = total * Math.PI;
      const newD = buildPath(calculatePoints(factor));
      if (pathRef.current) {
        pathRef.current.setAttribute('d', newD);
      }
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [paused, points, amplitude, speed, height]);
  return (
    <svg
      style={{ padding: '150px', position: 'absolute', top: 0, left: 0, width: '100%', height: `${height}px`, display: 'block', pointerEvents: 'none' }}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
    >
      {/* initial empty path; d updated by RAF */}
      <path ref={pathRef} d="" fill={fill} />
    </svg>
  );
};

export const AnimatedWave = Wave;
export default AnimatedWave;