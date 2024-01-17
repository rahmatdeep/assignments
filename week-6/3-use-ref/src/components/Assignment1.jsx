import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const textField = useRef();

  useEffect(() => {
    textField.current.focus();
  }, []);

  const handleButtonClick = () => {
    textField.current.focus();
  };

  return (
    <div>
      <input ref={textField} type="text" placeholder="Enter text here" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
