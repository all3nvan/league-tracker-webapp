import React, { Component } from "react";

import "match-history/new-game-input/NewGameInput.scss";

class NewGameInput extends Component {
  constructor(props) {
    super(props);
    this.state = { newGameId: "" };
  }

  onChange = event => {
    this.setState({ newGameId: event.target.value });
  };

  submitOnEnter = event => {
    if (event.key === "Enter") {
      this.submit();
    }
  };

  submit = () => {
    this.props.onSubmit(this.state.newGameId);
  };

  // TODO: validate that game id is a number
  render() {
    return (
      <div className="new-game-input">
        <input
          className="input new-game-input__input"
          type="text"
          placeholder="Enter a new game id"
          value={this.state.newGameId}
          onChange={this.onChange}
          onKeyPress={this.submitOnEnter}
        />
        <div className="clickable" onClick={this.submit}>
          <i className="fas fa-plus" />
        </div>
      </div>
    );
  }
}

// TODO: prop types

export default NewGameInput;
