import { useContext } from "react";
import { WritenContext } from "../context/Writing";
import { SizingContext } from "../context/Sizing";

const Screen = () => {
  const { writen } = useContext(WritenContext);
  const { size } = useContext(SizingContext);

  return (
    <section>
      <textarea
        className={`screen size-${size}`}
        value={writen}
      ></textarea>
    </section>
  );
};

export default Screen;
