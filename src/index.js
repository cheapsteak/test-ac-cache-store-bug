import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";

const API_URL = "https://api.graph.cool/simple/v1/ciybssqs700el0132puboqa9b";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: API_URL
});

const client = new ApolloClient({
  link,
  cache,
  queryDeduplication: true
});

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

// const store = createStore(state => state, {});

const Core = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div style={styles}>
        <Switch>
          <Route path="/:id" component={App} />
          <Route component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </ApolloProvider>
);

render(<Core />, document.getElementById("root"));
