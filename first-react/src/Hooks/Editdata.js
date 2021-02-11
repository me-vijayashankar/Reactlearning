import React, { useState } from "react";

function Editdata() {
  const [state, setstate] = useState({
    name: "vijay",
    age: 0,
    address: "",
    MobileNo: "",
  });
  //   const updateUserdetails = (e) => {
  //     console.log(e.target.name);
  //     console.log(e.target.value);
  //     setstate({ name: e.target.value, ...state });
  //   };
  //   const updateUserName = (e) => {
  //       console.log(e);
  //     setstate({ name: e.target.value,...state });
  //   };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(state);
        }}
      >
        <br></br>
        Name :
        <input
          name="Name"
          onChange={(e) => {
            setstate({ name: e.target.value, ...state });
          }}
          value={state.name}
        ></input>
        <br></br>
        Age :
        <input
          name="Age"
          type="text"
          value={state.age}
          onChange={(e) => {
            setstate({ age: e.target.value, ...state });
          }}
        ></input>
        <br />
        Address :
        <input
          name="Address"
          onChange={(e) => {
            setstate({ address: e.target.value, ...state });
          }}
        ></input>
        <br />
        Mobile :
        <input
          name="Mobile"
          onChange={(e) => {
            setstate({ MobileNo: e.target.value, ...state });
          }}
        ></input>
        <br />
        <button type="submit"> Update </button>
      </form>
    </div>
  );
}

export default Editdata;
