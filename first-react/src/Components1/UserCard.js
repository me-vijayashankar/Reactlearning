import React, { Component } from "react";

export class UserCard extends Component {
  render() {
    return this.props.needCard ? (
      <div>
        <div className="card">
          <h4 className="card-title">{this.props.header}</h4>
          <p className="card-text">{this.props.bio}</p>
          <a href="https://reactjs.org/" className="card-link">
            React Learning
          </a>
          <a href="https://www.google.com/" className="card-link">
            Google it
          </a>
        </div>
      </div>
    ) : (
      <div>
        <h4>{this.props.header}</h4>
        <br></br>
        <p>{this.props.bio}</p>
      </div>
    );
  }
}

export default UserCard;
