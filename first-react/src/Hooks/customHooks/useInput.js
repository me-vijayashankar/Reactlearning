import { useState } from "react";

function useInput(initialState) {
  const [value, setValue] = useState(initialState);
  const bind = {
    value: value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  return [value, bind];
}

export default useInput;
