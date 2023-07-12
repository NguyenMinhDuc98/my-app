import React, { useState } from "react";

const MousePosition = ({ TempComponent }) => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setX(clientX);
    setY(clientY);
  };

  return (
    <TempComponent
      style={{ height: "100%" }}
      onMouseMove={handleMouseMove}
      x={x}
      y={y}
    />
  );
};

export default MousePosition;
