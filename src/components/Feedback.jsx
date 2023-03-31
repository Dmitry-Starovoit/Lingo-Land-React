import "./Feedback.css";
import { useState } from "react";

const Feedback = function () {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const handleDragEnd = (event) => {
    setX(event.clientX);
    setY(event.clientY);
    console.log(event.clientX, event.clientY);
    if (x <= 1019 && x >= 181) {
      console.log("true");
    }
  };
  return (
    <div
      draggable
      onDragEnd={handleDragEnd}
      style={{
        color: "white",
        backgroundColor: "black",
        height: "100px",
        width: "100px",
        position: "absolute",
        left: x,
        top: y,
      }}
    >
      Drag me!
    </div>
  );
};

export default Feedback;
