import React, { Component } from "react";

import "match-history/game-summary/GameSummary.scss";

class GameSummary extends Component {
  render() {
    return <div className="game-summary">{this.props.game.gameId}</div>;
  }
}

export default GameSummary;
