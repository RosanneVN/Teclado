import { useContext } from "react";
import { WritenContext } from "../contex/Writing";

const Screen = () => {
  const { writen } = useContext(WritenContext);

  return (
    <section>
      <textarea
        className="screen"
        value={writen}
      ></textarea>
    </section>
  );
};

export default Screen;
