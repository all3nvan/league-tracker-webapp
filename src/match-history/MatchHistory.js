import React, { Component } from "react";

import NewMatchInputContainer from "match-history/new-match-input/NewMatchInputContainer";
import "match-history/MatchHistory.scss";

class MatchHistory extends Component {
  render() {
    return (
      <div className="match-history">
        <NewMatchInputContainer />
      </div>
    );
  }
}

export default MatchHistory;
