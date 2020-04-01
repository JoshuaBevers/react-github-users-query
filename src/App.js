import React, { Component } from "react";
import "./App.css";

import UserCardList from "./components/UserCardList";

class App extends Component {
  state = {
    textInput: "",
    users: []
  };

  handleChange = event => {
    this.setState({
      textInput: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const previousInput = this.state.textInput;
    const response = await fetch(
      `https://api.github.com/users/${previousInput}`
    );
    const Data = await response.json();

    this.setState({
      textInput: "",
      users: [...this.state.users, Data]
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Input UserName
            <input
              type="text"
              value={this.state.textInput}
              placeholder="Text Input"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <UserCardList usersData={this.state.users} />
      </div>
    );
  }
}

export default App;
