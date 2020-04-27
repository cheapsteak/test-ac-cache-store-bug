import React, { Component } from "react";
import WithIdContainer from "./WithIdContainer";
import WithoutIdContainer from "./WithoutIdContainer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    const { active } = this.state;

    return (
      <div>
        <h1>apollo-client potential bug</h1>
        <div>
          <label>
            <input
              type="checkbox"
              checked={active}
              onChange={this.handleChange}
            />
            Check to fetch data without ID
          </label>
        </div>
        {active && <WithoutIdContainer />}
        <WithIdContainer />
      </div>
    );
  }
}

export default App;
