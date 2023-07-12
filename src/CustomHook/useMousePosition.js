import React, { useState } from "react";

const useMousePosition = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setX(clientX);
    setY(clientY);
  };

  return (
    <h1 onMouseMove={handleMouseMove}>
      The mouse position is {x}, {y}
    </h1>
  );
};

export default useMousePosition;
