import React, { Component } from "react";

export class Ref1 extends Component {
  constructor(props) {
    super(props);
    this.ref = new React.createRef();
    this.state = {};
  }
  TrySave = (ele,inp) => {
    console.log(ele);
    console.log(inp);
    console.log(this.ref);
  };
  componentDidMount() {
    console.log(this.ref);
    this.ref.current.focus();
  }
  render() {
    return (
      <div>
        <input ref={this.ref}></input>
        <button onClick={this.TrySave}>toggle</button>
      </div>
    );
  }
}

export default Ref1;
