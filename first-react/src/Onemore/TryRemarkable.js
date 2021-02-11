import React, { Component } from "react";
// import { RemarkableReactRenderer } from "react-remarkable";
import Remarkable from "remarkable";

export class TryRemarkable extends Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();

    this.state = {
      value: "",
    };
  }
  textChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  ValueRender = ()=>{
      return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div>
        <textarea onChange={this.textChange}></textarea>
        <br></br>
        {/* <p>{this.state.value}</p> */}
        <p dangerouslySetInnerHTML={this.ValueRender}></p>
      </div>
    );
  }
}

export default TryRemarkable;
