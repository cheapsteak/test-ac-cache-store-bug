import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import List from "./List";

class WithIdContainer extends Component {
  render() {
    const { data } = this.props;

    return (
      <div style={{ border: "2px solid blue" }}>
        <h2>With ID</h2>
        <hr />
        <List list={data.Pokemon ? [data.Pokemon] : []} />
      </div>
    );
  }
}

const query = gql`
  query ThisHasCompletelyRandomName($id: ID) {
    Pokemon(id: $id) {
      id
      name
      createdAt
    }
  }
`;

const graphqlConfig = {
  options(ownProps) {
    return {
      variables: {
        id: "ciwnmyvxn94uo0161477dicbm"
      }
    };
  }
};

export default graphql(query, graphqlConfig)(WithIdContainer);
