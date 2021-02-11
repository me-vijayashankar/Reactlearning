import React from "react";

function CallBackChild(props) {
  console.log("form call back child");
  //   console.log(props);
  const counter = { ...props };
  console.log(counter);
  // const [childCount, setChildCount] = useState(0);

  return (
    <div>
      <p>this is just a call back child </p>
      <button onClick={counter.count2.setCount}>
        click me: {counter.count2.count}
      </button>
    </div>
  );
}

export default React.memo(CallBackChild);
