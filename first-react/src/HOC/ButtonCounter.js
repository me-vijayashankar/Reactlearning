import React, { Component } from "react";
import { UpdateComponentt } from "./HOC1";

class ButtonCounter extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    console.log("from button");
    this.setState((p) => {
      return { count: p.count + 1 };
    });

    // **************** or ************************
    //  method 1
    //    this.setState(p=>{return{count:p.count}});
    // method 2
    // this.setState({count : this.state.count+1});
  };
  render() {
    return (
      <div>
        <br></br>
        <button onClick={this.props.incrementCount}>
          Click to increment : {this.props.count}
        </button>
      </div>
    );
  }
}

export default UpdateComponentt(ButtonCounter,10);
