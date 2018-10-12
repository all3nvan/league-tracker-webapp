import React, { Component } from "react";

import "match-history/MatchHistory.scss";
import NewGameInputContainer from "match-history/new-game-input/NewGameInputContainer";
import GameSummary from "match-history/game-summary/GameSummary";

class MatchHistory extends Component {
  render() {
    const { games } = this.props;
    const gameSummaries = games.allIds.map(gameId => {
      return <GameSummary game={games.byIds[gameId]} key={gameId} />;
    });

    return (
      <>
        <NewGameInputContainer />
        {gameSummaries}
      </>
    );
  }
}

export default MatchHistory;
