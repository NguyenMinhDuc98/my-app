import React from "react";

const DisplayComponent = (props) => {
  const { x, y, onMouseMove } = props;
  return (
    <h1
      onMouseMove={(event) => {
        onMouseMove(event);
      }}
    >
      The mouse position is {x}, {y}
    </h1>
  );
};

export default DisplayComponent;
