import React, { useState } from "react";

function StateHook1() {
  const [count, updateCount] = useState(0);
  const IncrementCounter = () => {
    //   console.log(prvState);
    updateCount(prvState=>prvState+1);
  };
  const IncrementFive = () => {
    for (let index = 0; index < 5; index++) {
      IncrementCounter();
    }
  };
  return (
    <div>
      <button onClick={IncrementCounter}>increment : {count}</button>
      <button onClick={IncrementFive}>add Five </button>
    </div>
  );
}

export default StateHook1;
