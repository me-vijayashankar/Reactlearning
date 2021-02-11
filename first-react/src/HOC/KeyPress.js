import React, { Component } from "react";
import { UpdateComponentt } from "./HOC1";

class KeyPress extends Component {
  render() {
    return (
      <div>
        <input onKeyPress={this.props.incrementCount}></input>
        <p>key press count : {this.props.count}</p>
      </div>
    );
  }
}

export default UpdateComponentt(KeyPress,1);
