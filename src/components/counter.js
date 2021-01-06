import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="containerDiv">
      <div className="divText">{count}</div>
      <button className="add" onClick={() => setCount(count + 1)}>
        Add
      </button>
      <button className="sub" onClick={() => setCount(count - 1)}>
        Sub
      </button>
    </div>
  );
};

export default Counter;
