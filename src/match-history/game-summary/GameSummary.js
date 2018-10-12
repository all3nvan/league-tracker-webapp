import React, { Component } from "react";

import "match-history/game-summary/GameSummary.scss";
import GameParticipant from "match-history/game-summary/game-participant/GameParticipant";
import teamColor from "constants/teamColor";

class GameSummary extends Component {
  getParticipantsForTeam = teamColor => {
    return this.props.game.gameParticipants
      .filter(participant => participant.team === teamColor)
      .map(participant => (
        <GameParticipant participant={participant} key={participant.id} />
      ));
  };

  render() {
    const blueTeamParticipants = this.getParticipantsForTeam(teamColor.BLUE);
    const redTeamParticipants = this.getParticipantsForTeam(teamColor.RED);

    return (
      <div className="game-summary">
        <div className="game-summary__team">{blueTeamParticipants}</div>
        <div className="game-summary__team">{redTeamParticipants}</div>
      </div>
    );
  }
}

export default GameSummary;
