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

    const gameDate = new Date(this.props.game.createTime);

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
        <div>
          <span className="game-summary__time">
            {gameDate.toLocaleString()}
          </span>
          <a
            className="game-summary__external-link"
            href={`https://matchhistory.na.leagueoflegends.com/en/#match-details/NA1/${
              this.props.game.gameId
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Full game details
            <i className="fas fa-external-link-alt" />
          </a>
        </div>
        <div className="game-summary__participants">
          <div className={blueTeamClassNames}>
            {blueTeamParticipantElements}
          </div>
          <div className={redTeamClassNames}>{redTeamParticipantElements}</div>
        </div>
      </div>
    );
  }
}

export default GameSummary;
