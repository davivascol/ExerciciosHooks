import React, { useEffect, useState } from "react";

const Coordinates = () => {
  const [coord, setCoord] = useState({ x: 0, y: 7 });

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  const handleMouseMove = (event) => {
    setCoord({
      x: event.clientX,
      y: event.clientY
    });
  };

  const { x, y } = coord;

  return (
    <div>
      <p>
        {x} - {y}
      </p>
    </div>
  );
};

export default Coordinates;
