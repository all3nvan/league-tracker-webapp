import React, { Component } from "react";
import classNames from "classnames";

import "match-history/game-summary/game-participant/GameParticipant.scss";
import teamColor from "constants/teamColor";
import championIdToImageLinks from "constants/championIdToImageLinks";

class GameParticipant extends Component {
  constructor(props) {
    super(props);
    // TODO: initialize summoner name if summonerId exists
    this.state = { summonerName: "" };
  }

  getSummonerElement = () => {
    if (this.props.participant.summonerId) {
      // TODO: return editable name field
    }

    return (
      <input
        className="input"
        type="text"
        placeholder="Enter player name"
        value={this.state.summonerName}
        onChange={this.summonerNameOnChange}
        onKeyPress={this.summonerNameOnEnter}
      />
    );
  };

  summonerNameOnChange = event => {
    this.setState({ summonerName: event.target.value });
  };

  summonerNameOnEnter = event => {
    if (event.key === "Enter") {
      this.props.summonerNameOnSubmit(this.state.summonerName);
    }
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
            <img src={championIdToImageLinks[participant.championId]} alt="?" />
          </div>
          <div className="game-participant__stat game-participant__kda">
            {participant.kills}/{participant.deaths}/{participant.assists}
          </div>
          <div className="game-participant__stat game-participant__summoner">
            {this.getSummonerElement()}
          </div>
        </div>
      </div>
    );
  }
}

export default GameParticipant;
