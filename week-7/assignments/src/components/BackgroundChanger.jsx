import { useState } from "react";
import "./BackgroundChanger.css";

export default function BackgroundChanger() {
  const [backgroundColour, setBackgroundColor] = useState("white");

  function clickHandler(color) {
    setBackgroundColor(color);
  }
  return (
    <>
      <div
        className="backgroundChanger--wrapper"
        style={{
          backgroundColor: backgroundColour,
        }}
      >
        <div className="buttons">
          <button
            style={{ backgroundColor: "white" }}
            onClick={() => clickHandler("white")}
          >
            White
          </button>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => clickHandler("red")}
          >
            Red
          </button>
          <button
            style={{ backgroundColor: "yellow" }}
            onClick={() => clickHandler("yellow")}
          >
            Yellow
          </button>
          <button
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => clickHandler("black")}
          >
            Black
          </button>
          <button
            style={{ backgroundColor: "purple" }}
            onClick={() => clickHandler("purple")}
          >
            Purple
          </button>
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => clickHandler("green")}
          >
            Green
          </button>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => clickHandler("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </>
  );
}
