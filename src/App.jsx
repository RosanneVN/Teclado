import { useState } from "react";
import "./App.css";
import { Letters } from "./components/Letters";
import { WritenProvider } from "./contex/Writing";
import Screen from "./components/Screen";
import ColorButton from "./components/buttonsGroup/ColorButton";

function App() {
  const [color, setColor] = useState("black");


  const [size, setSize] = useState(7);
  const increaseClick = () => {
    setSize(size + 5);
  };

  const diminishClick = () => {
    if (size <= 7) {
      return;
    } else {
      setSize(size - 5);
    }
  };

  return (
    <main>
      <div className={`board ${color}`}>
        <div className="content">
          <WritenProvider>
            <Screen></Screen>
            <Letters></Letters>
          </WritenProvider>
        </div>
        <div className="button">
          <ColorButton setColor={setColor}></ColorButton>

          
        </div>
      </div>
    </main>
  );
}
export default App;
