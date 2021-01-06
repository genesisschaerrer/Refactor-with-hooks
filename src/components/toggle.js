import React, { useState } from "react";
const Toggle = () => {
  const [text] = useState("Boo");
  const [style, setStyle] = useState("block");

  return (
    <div className="containerDiv">
      <div style={{ display: style }} className="divText">
        {text}
      </div>
      <button onClick={() => setStyle(style === "block" ? "none" : "block")}>
        {style === "block" ? "Hide Me" : "Show Me"}
      </button>
    </div>
  );
};
export default Toggle;
