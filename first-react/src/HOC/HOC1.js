import React, { Component } from "react";

export const UpdateComponentt = (OrginalComponent, CounterValue) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
    //   console.log("props from HOC:", this.props);
      this.state = { count: 0 };
    }
    incrementCount = () => {
      console.log("from hoc");
      this.setState((p) => {
        return { count: p.count + CounterValue };
      });
    };
    render() {
      return (
        <OrginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        ></OrginalComponent>
      );
    }
  }
  return NewComponent;
};
