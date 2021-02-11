import React, { Component } from "react";
import { PropLearn } from "./PropLearning";
export default class StateLearning extends Component {
  constructor() {
    super();
    this.state = {
      welcome: "Welcome to our Application",
    };
  }
  render() {
    return (
      <div>
        <PropLearn name="Shankar">
          we are please to welcome you to our Application
        </PropLearn>
        <h2>{this.state.welcome}</h2>
        <br></br>
        <div>
          <input type="text" id="UserName" itemID="UserName"></input>
          <button onClick={() => this.handleWelComeUser()}>LogIn</button>
        </div>
      </div>
    );
  }
  handleWelComeUser() {
    //   this.itemID    
      this.setState({
        welcome: "Welcome Vijay"
      });
  }
}
