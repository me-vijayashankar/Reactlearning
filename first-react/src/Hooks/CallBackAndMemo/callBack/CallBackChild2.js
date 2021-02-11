import React, { useState } from "react";

function CallBackChild2() {
  console.log("form call back child 2");

  const [childCount, setChildCount] = useState(0);
  return (
    <div>
      <div>
        <p>this is just a call back child 2</p>
        <button onClick={() => setChildCount((prev) => prev + 1)}>
          click me: {childCount}
        </button>
      </div>
    </div>
  );
}

export default CallBackChild2;
