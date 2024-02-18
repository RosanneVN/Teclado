import { useState } from "react";
import "./App.css";
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
      <div className={`board ${color}`}>
        <div className="content">
          <SizingProvider>
            <WritenProvider>
              <Screen></Screen>
              <Letters></Letters>
            </WritenProvider>
            <div className="button">
              <ColorButton setColor={setColor}></ColorButton>
              <IncrementButton></IncrementButton>
            </div>
          </SizingProvider>
        </div>
      </div>
    </main>
  );
}
export default App;
