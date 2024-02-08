import { useState } from "react";
import { KEYS } from "../constantes";

export const Letters = () => {
  const [keyM, setKeyM] = useState(false);

  const handleClick = () => {
    setKeyM(!keyM);
  };

  return (
    <section className="keyboard">
      {KEYS.map((letter) => {
        if (letter == "CapsLk") {
          return (
            <button className="styleLetter" key={letter} onClick={handleClick}>
              {letter}
            </button>
          );
        } else {
          letter = keyM ? letter.toUpperCase() : letter;
          return (
            <button className="styleLetter" key={letter}>
              {letter}
            </button>
          );
        }
      })}
    </section>
  );
};
