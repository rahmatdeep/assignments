import { useState } from "react";
import "./ParaGenerator.css";

export default function ParaGenerator() {
  const [number, setNumber] = useState(0);
  const [para, setPara] = useState("");

  function onChangeHandler(e) {
    setNumber(parseInt(e.target.value));
    console.log(e.target.value);
  }

  function clickHandler() {
    const paragraph = generateLoremIpsum();
    setPara(paragraph);
  }

  function generateLoremIpsum() {
    const loremIpsumWords = [
      "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing",
      "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"
    ];

    const words = Array.from({ length: number }, () => {
      const randomIndex = Math.floor(Math.random() * loremIpsumWords.length);
      return loremIpsumWords[randomIndex];
    });

    return words.join(' ');
  }

  return (
    <div className="wrapper">
      <h1>Paragraph Generator</h1>
      <div>
        <input
          type="number"
          name="number"
          id="number"
          onChange={onChangeHandler}
          value={number}
        />
        <button type="button" onClick={clickHandler}>
          Generate
        </button>
      </div>
      <div className="para">{para}</div>
    </div>
  );
}
