import React, { useState } from "react";

const Color = () => {
  const [color, setColor] = useState("Change Me");
  const [colorInput, setColorInput] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    setColor(colorInput);
  };

  let handleChange = (event) => {
    setColorInput(event.target.value);
  };

  return (
    <div className="containerDiv">
      <div style={{ color }} className="divText">
        {color}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="color"
          type="text"
          value={colorInput}
          onChange={handleChange}
          placeholder="Enter Color"
          className="inputText"
        />
        <button type="submit">Change Color</button>
      </form>
    </div>
  );
};

export default Color;
