import { useEffect, useMemo, useRef, useState } from 'react';


export function MeshWalker() {
  const svgRef = useRef(null);
  const targetRef = useRef(null);

  const [mouse, setMouse] = useState(null);

  const cols = 50;
  const rows = window.innerHeight / 41;
  const gap = 200;
  const dotSize = 4;

  const maxConnections = 10;
  const radius = 500;
  const speed = 0.08;

  const width = (cols - 1) * gap;
  const height = (rows - 1) * gap;

  const dots = useMemo(() => {
    const result = [];

    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        result.push({
          id: `${x}-${y}`,
          cx: x * gap,
          cy: y * gap,
        });
      }
    }

    return result;
  }, []);

  useEffect(() => {
    let frame;

    function animate() {
      setMouse((current) => {
        const target = targetRef.current;

        if (!target) {
          return null;
        }

        if (!current) {
          return target;
        }

        return {
          x: current.x + (target.x - current.x) * speed,
          y: current.y + (target.y - current.y) * speed,
        };
      });

      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  function handleMouseMove(event) {
    const svg = svgRef.current;

    if (!svg) {
      return;
    }

    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;

    const matrix = svg.getScreenCTM();

    if (!matrix) {
      return;
    }

    const svgPoint = point.matrixTransform(matrix.inverse());

    targetRef.current = {
      x: svgPoint.x,
      y: svgPoint.y,
    };
  }

  function handleMouseLeave() {
    targetRef.current = null;
  }

  const activeDots = mouse
    ? dots
        .map((dot) => {
          const dx = dot.cx - mouse.x;
          const dy = dot.cy - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          return {
            ...dot,
            distance,
          };
        })
        .filter((dot) => dot.distance <= radius)
        .toSorted((a, b) => a.distance - b.distance)
        .slice(0, maxConnections)
    : [];

  return (
    <div
      className="pointer-events-auto absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <g className="text-slate-950/25 dark:text-white/20">
          {dots.map((dot) => (
            <circle
              key={dot.id}
              cx={dot.cx}
              cy={dot.cy}
              r={dotSize}
              fill="currentColor"
            />
          ))}
        </g>

        {mouse &&
          activeDots.map((dot) => {
            const closeness = 1 - dot.distance / radius;

            return (
              <line
                key={`${dot.id}-line`}
                x1={mouse.x}
                y1={mouse.y}
                x2={dot.cx}
                y2={dot.cy}
                stroke="currentColor"
                strokeWidth="2"
                className="text-slate-950 dark:text-white"
                opacity={0.2 + closeness * 0.5}
              />
            );
          })}

        {activeDots.map((dot) => {
          const closeness = 1 - dot.distance / radius;
          const activeRadius = dotSize + closeness * 24;

          return (
            <circle
              key={`${dot.id}-active`}
              cx={dot.cx}
              cy={dot.cy}
              r={activeRadius}
              fill="currentColor"
              className="text-slate-950 dark:text-white"
              opacity={0.4 + closeness * 0.6}
            />
          );
        })}

        {mouse && (
          <circle
            cx={mouse.x}
            cy={mouse.y}
            r="34"
            fill="currentColor"
            className="text-slate-950 dark:text-white"
            opacity="0.9"
          />
        )}
      </svg>
    </div>
  );
}
