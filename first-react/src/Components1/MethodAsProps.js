import React from "react";
import MethodTakesFunAsProps from "./MethodTakesFunAsProps";

function MethodAsProps() {
  function PassingMethod(props) {
    console.log(`did you sent this : ${props} ?`);
  }

  return (
    <div>
      <MethodTakesFunAsProps MethodAsProps={PassingMethod} input1="oneMore">
        hey you ? what are you trying to display ?
      </MethodTakesFunAsProps>
    </div>
  );
}

export default MethodAsProps;
