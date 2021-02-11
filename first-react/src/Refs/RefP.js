import React, { Component } from "react";
import Refc from "./Refc";

export class RefP extends Component {
  constructor(props) {
    super(props);
    this.ref = new React.createRef();
  }
  callFocus = () => {this.ref.current.setFocus()};

  render() {
    return (
      <div>
        <Refc ref={this.ref}></Refc>
        <button onClick={this.callFocus}>Set Focus</button>
      </div>
    );
  }
}

export default RefP;
