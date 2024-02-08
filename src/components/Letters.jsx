import { useContext, useState } from "react";
import { KEYS } from "../constantes";
import { WritenContext } from "../contex/Writing";

export const Letters = () => {
  const [keyM, setKeyM] = useState(false);

  const { writen, setWriten } = useContext(WritenContext);

  const writeClick = (letter) => {
    setWriten(writen + letter);
  };

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
            <button
              className="styleLetter"
              key={letter}
              onClick={() => writeClick(letter)}
            >
              {letter}
            </button>
          );
        }
      })}
    </section>
  );
};
