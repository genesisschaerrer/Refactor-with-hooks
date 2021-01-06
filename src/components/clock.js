import React, { useState, useEffect } from "react";
import moment from "moment";

const Clock = () => {
  const [time, setTime] = useState(moment().format("h:mm:ss a"));

  useEffect(() => {
    let intervalId = setInterval(setTime(moment().format("h:mm:ss a")), 1000);

    return clearInterval(intervalId);
  });
  return <div className="clock">{time}</div>;
};

export default Clock;
