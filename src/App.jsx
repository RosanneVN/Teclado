import { useState } from "react";
import "./App.css";

const letters = [
  "a",
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "n",
  "m",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "CapsLk",
];

function App() {
  const [color, setColor] = useState("black");
  const handleClick = (newColorBoard) => {
    setColor(newColorBoard);
  };

  return (
    <main>
      <div className={`board ${color}`}>
        <div className="content">
          <section className="screen"></section>
          <div className="keyboard-content">
            <section className="keyboard">
              {letters.map((letter) => (
                <div className="styleLetter" key={letter}>
                  {letter}
                </div>
              ))}
            </section>
          </div>
        </div>
        <div className="button">
          <div className="button-content">
            <button
              className="color-button rose-button"
              onClick={() => handleClick("rose")}
            ></button>
            <button
              className="color-button grey-button"
              onClick={() => handleClick("grey")}
            ></button>
            <button
              className="color-button blue-button"
              onClick={() => handleClick("blue")}
            ></button>
            <button
              className="color-button dark-button"
              onClick={() => handleClick("dark")}
            ></button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default App;
