import React, { useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("Ciao");

  const handleClickToggle = () => {
    setGreeting(greeting === "Ciao" ? "Auf Wiedersehen" : "Ciao");
  };

  return (
    <div className="containerDiv">
      <div className="divText">{greeting}</div>
      <button onClick={handleClickToggle}>Toggle</button>
    </div>
  );
};

export default Greeting;
