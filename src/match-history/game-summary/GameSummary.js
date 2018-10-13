import React, { Component } from "react";
import classNames from "classnames";

import "match-history/game-summary/GameSummary.scss";
import GameParticipant from "match-history/game-summary/game-participant/GameParticipant";
import teamColor from "constants/teamColor";

class GameSummary extends Component {
  getParticipantsForTeam = teamColor => {
    return this.props.game.gameParticipants.filter(
      participant => participant.team === teamColor
    );
  };

  mapToParticipantElements = participants => {
    return participants.map(participant => (
      <GameParticipant participant={participant} key={participant.id} />
    ));
  };

  render() {
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
