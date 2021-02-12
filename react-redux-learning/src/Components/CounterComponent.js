import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CounterComponent() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  console.log(dispatch);
  return (
    <div>
      count : {count}
      <br />
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        +
      </button>
    </div>
  );
}

export default CounterComponent;
