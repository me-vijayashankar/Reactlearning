import React from "react";

const FunComp1 = React.forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref}></input>
    </div>
  );
});

export default FunComp1;
