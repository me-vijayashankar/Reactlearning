import React, { Component } from "react";

export class Refc extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.ref = new React.createRef();
  }

  setFocus = () => {
    this.ref.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.ref}></input>
      </div>
    );
  }
}

export default Refc;
