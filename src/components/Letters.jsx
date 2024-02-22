import { useContext, useState } from "react";
import { KEYS } from "../constantes";
import { WritenContext } from "../context/Writing";

export const Letters = () => {
  const [keyM, setKeyM] = useState(false);

  const { writen, setWriten } = useContext(WritenContext);

  const writeClick = (letter) => {
    setWriten(writen + letter);
  };

  const deleteClick = () => {
    setWriten(writen.substring(0, writen.length - 1));
  };

  const handleClick = () => {
    setKeyM(!keyM);
  };

  return (
    <section className="keyboard-base">
      {KEYS.map((letter) => {
        if (letter.name == "CapsLk") {
          return (
            <button className="key" key={letter.name} onClick={handleClick}>
              {letter.name}
            </button>
          );
        } else if (letter.name == "Delete") {
          return (
            <button className="key" key={letter.name} onClick={deleteClick}>
              {letter.name}
            </button>
          );
        } else if (letter.name == "Space") {
          return (
            <button
              className="key"
              key={letter.name}
              onClick={() => writeClick(" ")}
            >
              {letter.name}
            </button>
          );
        }  else if (letter.name == "Tab") {
          return (
            <button
              className="key"
              key={letter.name}
              onClick={() => writeClick("    ")}
            >
              {letter.name}
            </button>
          );
        }
         {
          letter.name = keyM ? letter.name.toUpperCase() : letter.name;
          return (
            <button
              className="key"
              key={letter.name}
              onClick={() => writeClick(letter.name)}
            >
              {letter.name}
            </button>
          );
        }
      })}
    </section>
  );
};
