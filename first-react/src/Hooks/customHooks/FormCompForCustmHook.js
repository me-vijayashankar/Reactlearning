import React from "react";
import useInput from "./useInput";

function FormCompForCustmHook() {
  const [firstname, bindFirstName] = useInput("");
  const [lastName, bindlastName] = useInput("");
  return (
    <div>
      <input placeholder="FirstName" {...bindFirstName}></input>
      <input placeholder="LastName" {...bindlastName}></input>
      <button
        onClick={() => {
          console.log(firstname, lastName);
        }}
      >
        submit
      </button>
    </div>
  );
}

export default FormCompForCustmHook;
