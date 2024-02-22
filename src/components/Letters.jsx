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

  const CapsLockClick = () => {
    setKeyM(!keyM);
  };

  return (
    <section className="keyboard-base">
      {KEYS.map((letter) => {
        if (letter.name == "CapsLock") {
          return (
            <button className="key capslock" key={letter.name} onClick={CapsLockClick}>
              {letter.name}
            </button>
          );
        } else if (letter.name == "Delete") {
          return (
            <button className="key delete" key={letter.name} onClick={deleteClick}>
              {letter.name}
            </button>
          );
        } else if (letter.name == "Space") {
          return (
            <button
              className="key space"
              key={letter.name}
              onClick={() => writeClick(" ")}
            >
              {letter.name}
            </button>
          );
        } else if (letter.name == "Tab") {
          return (
            <button
              className="key tab"
              key={letter.name}
              onClick={() => writeClick("    ")}
            >
              {letter.name}
            </button>
          );
        } else if (letter.name == "Enter") {
          return (
            <button
              className="key enter"
              key={letter.name}
              onClick={() => writeClick("    ")}
            >
              {letter.name}
            </button>
          );
        } else if (letter.name == "Shiftl") {
          return (
            <button
              className="key leftshift"
              key={letter.name}
              onClick={() => writeClick("    ")}
            >
              {letter.name}
            </button>
          );
        } else if (letter.name == "Alt") {
          return (
            <button
              className="key"
              key={letter.name}
              onClick={() => writeClick("    ")}
            >
              {letter.name}
            </button>
          );
        } else if (letter.name == "Fn") {
          return (
            <button
              className="key fn"
              key={letter.name}
              onClick={() => writeClick("    ")}
            >
              {letter.name}
            </button>
          );
        } else if (letter.name == "Command") {
          return (
            <button
              className="key command"
              key={letter.name}
              onClick={() => writeClick("    ")}
            >
              {letter.name}
            </button>
          );
        }
        else if (letter.name == "/") {
          return (
            <button
              className="key backslash"
              key={letter.name}
              onClick={() => writeClick("    ")}
            >
              {letter.name}
            </button>
          );
        }
        else if (letter.name == "Shiftr") {
          return (
            <button
              className="key rightshift"
              key={letter.name}
              onClick={() => writeClick("    ")}
            >
              {letter.name}
            </button>
          );
        }
        else if (letter.name == "Ctrl") {
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
        else if (letter.name == "Ctrll") {
          return (
            <button
              className="key leftctrl"
              key={letter.name}
              onClick={() => writeClick("    ")}
            >
              {letter.name}
            </button>
          );
        }
        {
          const name = keyM ? letter.name.toUpperCase() : letter.name;
          return (
            <button
              className="key"
              key={letter.name}
              onClick={() => writeClick(name)}
            >
              {name}
            </button>
          );
        }
      })}
    </section>
  );
};
