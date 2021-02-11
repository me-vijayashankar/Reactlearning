import React, { Component } from "react";
import { UpdateComponentt } from "./HOC1";

export class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <br></br>
        <p onMouseEnter={this.props.incrementCount}>
          Hover to count this : {this.props.count}
        </p>
      </div>
    );
  }
}

export default UpdateComponentt(HoverCounter,5);
