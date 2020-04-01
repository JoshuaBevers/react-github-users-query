import React, { Component } from "react";
import "./App.css";

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

  handleSubmit = event => {
    event.preventDefault();
    const previousInput = this.state.textInput;

    this.setState({
      textInput: "",
      users: [...this.state.users, previousInput]
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
        <p>{this.state.textInput}</p>
      </div>
    );
  }
}

export default App;
