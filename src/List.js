import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  render() {
    return (
      <div style={{ border: "2px solid red" }}>
        <h2>List</h2>
        {this.props.list.map(({ name, ...rest }) => (
          <ListItem key={name} name={name} {...rest} />
        ))}
      </div>
    );
  }
}

export default List;
