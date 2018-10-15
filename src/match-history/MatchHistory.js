import React, { Component } from "react";

import "match-history/MatchHistory.scss";
import NewGameInputContainer from "match-history/new-game-input/NewGameInputContainer";
import GameSummaryContainer from "match-history/game-summary/GameSummaryContainer";

class MatchHistory extends Component {
  renderGameSummaries = () => {
    return this.props.gameIds.map(gameId => (
      <GameSummaryContainer game={this.props.gamesById[gameId]} key={gameId} />
    ));
  };

  render() {
    return (
      <>
        <NewGameInputContainer />
        {this.renderGameSummaries()}
      </>
    );
  }
}

export default MatchHistory;
