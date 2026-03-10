'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface ConnectTheDotsTextProps {
  text: string;
  numDots?: number;
  className?: string;
}

export default function ConnectTheDotsText({ text, numDots = 20, className = '' }: ConnectTheDotsTextProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (!svgRef.current) return;

    // For simplicity, we'll use a placeholder path. In a real implementation,
    // you'd convert the text to an SVG path using a library like opentype.js
    // or an online tool, and replace this with the actual path data.
    const placeholderPath = `M 10 50 Q 30 20 50 50 T 90 50 Q 110 20 130 50 T 170 50 Q 190 20 210 50 T 250 50`;

    const pathElement = svgRef.current.querySelector('path');
    if (pathElement) {
      const length = pathElement.getTotalLength();
      setPathLength(length);

      const newPoints: { x: number; y: number }[] = [];
      for (let i = 0; i <= numDots; i++) {
        const point = pathElement.getPointAtLength((length / numDots) * i);
        newPoints.push({ x: point.x, y: point.y });
      }
      setPoints(newPoints);
    }
  }, [text, numDots]);

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        ref={svgRef}
        width="300"
        height="100"
        viewBox="0 0 300 100"
        className="overflow-visible"
      >
        {/* Invisible path for calculations */}
        <path
          d="M 10 50 Q 30 20 50 50 T 90 50 Q 110 20 130 50 T 170 50 Q 190 20 210 50 T 250 50"
          fill="none"
          stroke="none"
        />

        {/* Dots */}
        {points.map((point, index) => (
          <motion.circle
            key={`dot-${index}`}
            cx={point.x}
            cy={point.y}
            r="3"
            fill="#3b82f6"
            variants={dotVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: index * 0.1,
              duration: 0.3,
            }}
          />
        ))}

        {/* Connecting lines */}
        {points.slice(0, -1).map((point, index) => (
          <motion.line
            key={`line-${index}`}
            x1={point.x}
            y1={point.y}
            x2={points[index + 1].x}
            y2={points[index + 1].y}
            stroke="#3b82f6"
            strokeWidth="2"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: (points.length + index) * 0.1,
              duration: 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
}