import React, { useRef, useEffect } from "react";

function RefHook1() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef}></input>
    </div>
  );
}

export default RefHook1;
