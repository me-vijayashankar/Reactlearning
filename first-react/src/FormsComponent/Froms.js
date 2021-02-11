import React, { Component } from "react";
import "./Forms.css";
import "../Components/templateTst/style.css";

export class Froms extends Component {
  constructor() {
    super();
    this.state = {
      mailId: "",
      password: "",
      isChecked: false,
      userNameMsg: "We'll never share your email with anyone else.",
    };
  }
  UsernameChange = (e) => {
    console.log(e.target.value);
    this.setState({
      mailId: e.target.value,
    });
  };
  PasswordChange = (e) => {
    console.log(e.target.value);
    this.setState({
      password: e.target.value,
    });
  };
  OnclickCheck = (e) => {
    console.log(e.target.checked);
  };
  submitLoginDetails = () => {
    if (this.state.mailId === "") {
      this.setState.userNameMsg = "kindly provide";
    }
    console.log(this.state);
  };
  render() {
    return (
      <div className="formShape" id="idForFrmDiv">
        <form onSubmit={this.submitLoginDetails}>
          <div className="form-group">
            {/* <label>Email address</label> */}
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.UsernameChange}
            ></input>
            <small id="emailHelp" className="form-text text-muted">
              {this.state.userNameMsg}
            </small>
          </div>
          <div className="form-group">
            {/* <label>Password</label> */}
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={this.PasswordChange}
            ></input>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onClick={this.OnclickCheck}
            ></input>
            <label className="form-check-label">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Froms;
