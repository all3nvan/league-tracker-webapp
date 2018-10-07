import React, { Component } from "react";

import "match-history/new-match-input/NewMatchInput.scss";

class NewMatchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { newMatchId: "" };
  }

  onChange = event => {
    this.setState({ newMatchId: event.target.value });
  };

  submitOnEnter = event => {
    if (event.key === "Enter") {
      this.submit();
    }
  };

  submit = () => {
    console.log(this.state.newMatchId);
  };

  render() {
    return (
      <>
        <input
          className="input new-match-input__input"
          type="text"
          placeholder="Enter a new match id"
          value={this.state.newMatchId}
          onChange={this.onChange}
          onKeyPress={this.submitOnEnter}
        />
        <div className="clickable" onClick={this.submit}>
          <i className="fas fa-plus" />
        </div>
      </>
    );
  }
}

export default NewMatchInput;
