import React, { Component } from "react";

import NewMatchInput from "match-history/new-match-input/NewMatchInput";
import "match-history/MatchHistory.scss";

class MatchHistory extends Component {
  render() {
    return (
      <div className="match-history">
        <NewMatchInput />
      </div>
    );
  }
}

export default MatchHistory;
