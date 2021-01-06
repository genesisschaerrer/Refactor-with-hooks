import React, { useState } from "react";

const FontSize = () => {
  const [font, setFont] = useState(25);

  return (
    <div className="containerDiv">
      <div style={{ fontSize: font }} className="divText">
        {font}
      </div>
      <button onClick={() => setFont(font + 5)}>Grow</button>
      <button onClick={() => setFont(font - 5)}>Shrink</button>
    </div>
  );
};

export default FontSize;
