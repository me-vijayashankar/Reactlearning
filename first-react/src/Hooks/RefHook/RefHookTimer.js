import React, { useEffect, useState, useRef } from "react";

function RefHookTimer() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef();
  const [switchTimer, setswitchTimer] = useState(true);
  const buttonStyle = {
    margin: "5px",
    color: "white",
    backgroundColor: "blue",
    border: "none",
    borderRadius: "5px",
  };

  useEffect(() => {
    timerRef.current = switchTimer
      ? setInterval(() => {
          setTimer((prev) => prev + 1);
        }, 1000)
      : clearInterval(timerRef.current);
    // intravelTimer();
    return () => {
      clearInterval(timerRef.current);
    };
  }, [switchTimer, timer]);
  return (
    <div>
      timer : {timer}
      <br />
      <button
        style={buttonStyle}
        onClick={() => setswitchTimer((prev) => !prev)}
      >
        {switchTimer ? "Stop" : "Start"}
      </button>
      <button style={buttonStyle} onClick={() => setTimer(0)}>
        Reset
      </button>
    </div>
  );
}

export default RefHookTimer;
