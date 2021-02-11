import React, { useState } from "react";

function StateHookWithObj() {
  const [UserDetails, setUserdetails] = useState({
    name: "",
    age: 0,
    address: "",
    MobileNo: "",
  });
  const loadDefault = () => {
    setUserdetails({
      name: "vijay",
      age: 25,
      address: "idumban nager",
      MobileNo: "9688452311",
    });
  };
  return (
    <div>
      <br></br>
      Name : {UserDetails.name}
      <br></br>
      Age : {UserDetails.age > 0 ? UserDetails.age : ""}
      <br />
      Address : {UserDetails.address}
      <br />
      Mobile : {UserDetails.MobileNo}
      <br />
      <button onClick={loadDefault}>load default</button>
      <br></br>
    </div>
  );
}

export default StateHookWithObj;
