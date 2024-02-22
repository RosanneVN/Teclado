
const ColorButton = (setColor) => {
    
  const handleClick = (newColorBoard) => {
        setColor(newColorBoard);
      };

  return (
<div className="button-content-color">
  <button
    className="color-button rose-button"
    onClick={() => handleClick("rose")}
  ></button>
  <button
    className="color-button grey-button "
    onClick={() => handleClick("grey")}
  ></button>
  <button
    className="color-button blue-button"
    onClick={() => handleClick("blue")}
  ></button>
  <button
    className="color-button dark-button"
    onClick={() => handleClick("dark")}
  ></button>
</div>
  )
}

export default ColorButton

