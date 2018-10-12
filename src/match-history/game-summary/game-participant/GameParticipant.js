import React, { Component } from "react";
import classNames from "classnames";

import "match-history/game-summary/game-participant/GameParticipant.scss";
import teamColor from "constants/teamColor";

class GameParticipant extends Component {
  render() {
    const { participant } = this.props;
    const detailsClassNames = classNames({
      "game-participant__details": true,
      "game-participant__details--red-team": participant.team === teamColor.RED
    });

    return (
      <div className="game-participant">
        <div className={detailsClassNames}>
          <div className="game-participant__stat">{participant.championId}</div>
          <div className="game-participant__stat">
            {participant.kills}/{participant.deaths}/{participant.assists}
          </div>
        </div>
      </div>
    );
  }
}

export default GameParticipant;
