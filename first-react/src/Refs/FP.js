import React, { Component } from "react";
// import FR1 from "./FR1";
import FunComp1 from "./FunComp1";

export class FP extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.ref = new React.createRef();
  }
  componentDidMount() {
    // console.log(this.ref);
  }
  doFocus = () => {
    console.log(this.ref);
    // this.ref.current.focus();
  };

  render() {
    return (
      <div>
        {/* <FR1 ></FR1> */}
        <FunComp1 ref={this.ref}></FunComp1>
        <button onClick={this.doFocus}>Click</button>
      </div>
    );
  }
}

export default FP;
