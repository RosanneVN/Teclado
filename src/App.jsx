import { useState } from "react";
import "./App.css";
import "./Keyboard.css";
import { Letters } from "./components/Letters";
import { WritenProvider } from "./context/Writing";
import Screen from "./components/Screen";
import ColorButton from "./components/buttonsGroup/ColorButton";
import IncrementButton from "./components/buttonsGroup/IncrementButton";
import { SizingProvider } from "./context/Sizing";

function App() {
  const [color, setColor] = useState("black");

  return (
    <main>
        <SizingProvider>
      <div className={`board ${color}`}>
          <div className="content">
            <WritenProvider>
              <Screen></Screen>
              <Letters></Letters>
            </WritenProvider>
          </div>
          <div className="button">
            <ColorButton setColor={setColor}></ColorButton>
            <IncrementButton></IncrementButton>
          </div>
      </div>
        </SizingProvider>
    </main>
  );
}
export default App;
