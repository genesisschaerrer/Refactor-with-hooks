import React, { useState } from "react";

const Flex = () => {
  const [align, setAlign] = useState("center");

  return (
    <div className="containerDiv">
      <div style={{ textAlign: align }} className="divText">
        Push Me Around
      </div>
      <button onClick={() => setAlign("left")}>Left</button>
      <button onClick={() => setAlign("center")}>Center</button>
      <button onClick={() => setAlign("right")}>Right</button>
    </div>
  );
};

export default Flex;
