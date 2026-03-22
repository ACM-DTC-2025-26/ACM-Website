import { useEffect, useState } from "react";

function CursorGrid() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(59,130,246,0.7) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59,130,246,0.7) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",

        maskImage: `radial-gradient(circle 120px at ${pos.x}px ${pos.y}px, black 0%, transparent 100%)`,
        WebkitMaskImage: `radial-gradient(circle 120px at ${pos.x}px ${pos.y}px, black 0%, transparent 100%)`,
      }}
    />
  );
}

export default CursorGrid;