import { useContext } from "react";
import { WritenContext } from "../contex/Writing";


 const Screen = () => {

    const { writen } = useContext(WritenContext);

  return (
    <section className="screen">{writen}</section>
  )
}

export default Screen