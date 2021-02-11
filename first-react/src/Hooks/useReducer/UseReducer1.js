import React, { useReducer } from "react";

const reducer = (state, action) => {
  //   console.log(state);
  //   console.log(action);
  //   console.log(action.type);
  if (action.type === "add") return { count: state.count + action.value };
  else if (action.type === "sub") return { count: state.count - action.value };
};

function UseReducer1() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <button onClick={() => dispatch({ type: "sub", value: 2 })}>-</button>
      {state.count}
      <button onClick={() => dispatch({ type: "add", value: 2 })}>+</button>
    </div>
  );
}

export default UseReducer1;
