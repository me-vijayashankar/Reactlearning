import React, { Component } from "react";

export class Props extends Component {
  render() {
    return <div>{this.props.name(true)}</div>;
  }
}

export default Props;
