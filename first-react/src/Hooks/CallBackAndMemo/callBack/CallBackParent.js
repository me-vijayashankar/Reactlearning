import React, { useCallback, useState, useMemo } from "react";
import CallBackChild from "./CallBackChild";
import CallBackChild2 from "./CallBackChild2";

function CallBackParent() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const incrementCounter2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  const callBackMemo = useMemo(() => <CallBackChild2></CallBackChild2>, []);

  console.log("form call back Parent");
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>
        count : {count}
      </button>
      {/* <CallBackChild
        count2={{ count: count2, setCount: incrementCounter2 }}
      ></CallBackChild> */}
      {/* <CallBackChild2></CallBackChild2> */}
      {callBackMemo}
    </>
  );
}

export default CallBackParent;
