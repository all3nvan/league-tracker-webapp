import React, { Component } from "react";
import classNames from "classnames";

import "match-history/game-summary/game-participant/GameParticipant.scss";
import teamColor from "constants/teamColor";

class GameParticipant extends Component {
  getSummonerElement = () => {
    if (this.props.participant.summonerId) {
      // TODO: return editable name field
    }

    return (
      <input
        className="input is-small"
        type="text"
        placeholder="Enter player name"
      />
    );
  };

  render() {
    const { participant } = this.props;
    const detailsClassNames = classNames("game-participant__details", {
      "game-participant__details--blue-team":
        participant.team === teamColor.BLUE
    });

    return (
      <div className="game-participant">
        <div className={detailsClassNames}>
          <div className="game-participant__stat game-participant__champion">
            {participant.championId}
          </div>
          <div className="game-participant__stat game-participant__kda">
            {participant.kills}/{participant.deaths}/{participant.assists}
          </div>
          <div className="game-participant__stat">
            {this.getSummonerElement()}
          </div>
        </div>
      </div>
    );
  }
}

export default GameParticipant;
