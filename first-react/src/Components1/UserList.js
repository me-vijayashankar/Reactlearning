import React, { Component } from "react";
import { UserCard } from "./UserCard";

export class UserList extends Component {
  col4 = {
    margin: "5px",
    color: "red",
    paddingLeft: "0px",
  };
  List = [
    {
      id: 1,
      header: "Header One",
      bio: "Bio for header one",
      needCard: true,
    },
    {
      id: 2,
      header: "Header two",
      bio: "Bio for header two",
      needCard: true,
    },
  ];

  render() {
    var result = this.List.map((user) => (
      <div className="col-4" style={this.col4} key={user.id}>
        <UserCard
          needCard={true}
          header={user.header}
          bio={user.bio}
        ></UserCard>
      </div>
    ));
    return <div className="row">{result}</div>;
    // return <div>heloo</div>
  }
}

export default UserList;
