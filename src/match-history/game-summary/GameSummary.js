import React, { Component } from "react";
import classNames from "classnames";

import "match-history/game-summary/GameSummary.scss";
import GameParticipantContainer from "match-history/game-summary/game-participant/GameParticipantContainer";
import teamColor from "constants/teamColor";

class GameSummary extends Component {
  getParticipantsForTeam = teamColor => {
    return this.props.gameParticipants.filter(
      participant => participant.team === teamColor
    );
  };

  mapToParticipantElements = participants => {
    return participants.map(participant => (
      <GameParticipantContainer
        participant={participant}
        key={participant.id}
      />
    ));
  };

  render() {
    if (
      !this.props.gameParticipants ||
      this.props.gameParticipants.length === 0
    ) {
      return null;
    }

    const blueTeamParticipants = this.getParticipantsForTeam(teamColor.BLUE);
    const blueTeamParticipantElements = this.mapToParticipantElements(
      blueTeamParticipants
    );
    const blueTeamClassNames = classNames(
      "game-summary__team",
      "game-summary__team--blue",
      {
        "game-summary__team--win": blueTeamParticipants[0].win,
        "game-summary__team--lose": !blueTeamParticipants[0].win
      }
    );

    const redTeamParticipants = this.getParticipantsForTeam(teamColor.RED);
    const redTeamParticipantElements = this.mapToParticipantElements(
      redTeamParticipants
    );
    const redTeamClassNames = classNames(
      "game-summary__team",
      "game-summary__team--red",
      {
        "game-summary__team--win": redTeamParticipants[0].win,
        "game-summary__team--lose": !redTeamParticipants[0].win
      }
    );

    return (
      <div className="game-summary">
        <div className={blueTeamClassNames}>{blueTeamParticipantElements}</div>
        <div className={redTeamClassNames}>{redTeamParticipantElements}</div>
      </div>
    );
  }
}

export default GameSummary;
