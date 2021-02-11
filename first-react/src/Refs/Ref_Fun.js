import React from "react";

var ref = React.createRef();
export function Ref_Fun() {
  return (
    <div>
      <input ref={ref}></input>
      <button onClick={ByClicking}>click</button>
    </div>
  );
}
export function ByClicking() {
    console.log(ref);
}

// export default Ref_Fun;
