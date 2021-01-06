import React, { useState } from "react";

const Rgb = () => {
  let [red, setRed] = useState(0);
  let [green, setGreen] = useState(0);
  let [black, setBlack] = useState(0);

  let border = {
    border: `solid 30px rgb(${red}, ${green}, ${black})`
  };

  return (
    <div className="containerDiv">
      <div className="border" style={border}></div>
      <div>
        rgb({red}, {green}, {black})
      </div>
      <form>
        <input
          name="r"
          type="range"
          defaultValue="0"
          min="0"
          max="255"
          onChange={(e) => {
            setRed((red = e.target.value));
          }}
        />

        <input
          name="g"
          type="range"
          defaultValue="0"
          min="0"
          max="255"
          onChange={(e) => {
            setGreen((green = e.target.value));
          }}
        />

        <input
          name="b"
          type="range"
          defaultValue="0"
          min="0"
          max="255"
          onChange={(e) => setBlack((black = e.target.value))}
        />
      </form>
    </div>
  );
};

export default Rgb;
