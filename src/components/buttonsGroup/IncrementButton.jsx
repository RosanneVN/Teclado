import { useContext } from "react";
import { SizingContext } from "../../context/Sizing";
 
const IncrementButton = () => {
  const { size, setSize } = useContext(SizingContext);
  console.log(size);
  const increaseClick = () => {
    setSize(size + 2);
  };

  const diminishClick = () => {
    if (size <= 12) {
      return;
    }
    setSize(size - 2);
  };

  return (
    <div className="button-content-size">
      <button className="button-size" onClick={diminishClick}>
        -A
      </button>
      <button className="button-size" onClick={increaseClick}>
        +A
      </button>
    </div>
  );
};

export default IncrementButton;
