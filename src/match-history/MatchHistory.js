import React, { Component } from "react";

import NewGameInputContainer from "match-history/new-game-input/NewGameInputContainer";
import "match-history/MatchHistory.scss";

class MatchHistory extends Component {
  render() {
    return (
      <div className="match-history">
        <NewGameInputContainer />
      </div>
    );
  }
}

export default MatchHistory;
