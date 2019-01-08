import React, { Component } from "react";
import classNames from "classnames";

import "./Teams.scss";
import SummonerNameResolver from "components/SummonerNameResolver";

class Teams extends Component {
  state = {
    currentIndex: 0
  };

  previousCombo = () => {
    this.setState(state => ({
      ...state,
      currentIndex: state.currentIndex - 1
    }));
  };

  nextCombo = () => {
    this.setState(state => ({
      ...state,
      currentIndex: state.currentIndex + 1
    }));
  };

  render() {
    const { teamCombinations } = this.props;
    const { currentIndex } = this.state;
    const currentTeamCombo = teamCombinations[currentIndex];
    const blueTeamElements = currentTeamCombo.blueTeamSummonerIds.map(id => (
      <div key={id}>
        <SummonerNameResolver summonerId={id} />
      </div>
    ));
    const redTeamElements = currentTeamCombo.redTeamSummonerIds.map(id => (
      <div key={id}>
        <SummonerNameResolver summonerId={id} />
      </div>
    ));

    const previousArrowClassNames = classNames(
      "teams-page__arrow-nav",
      "clickable",
      {
        hidden: currentIndex < 1
      }
    );
    const nextArrowClassNames = classNames(
      "teams-page__arrow-nav",
      "clickable",
      {
        hidden: currentIndex + 1 >= teamCombinations.length
      }
    );

    return (
      <div className="teams-page">
        <h1>
          Match {currentIndex + 1}/{teamCombinations.length}
        </h1>
        <div className="teams-page__match-quality">
          Quality (0-1): {currentTeamCombo.matchQuality}
        </div>
        <div className="teams-page__player-display">
          <div className={previousArrowClassNames} onClick={this.previousCombo}>
            <i className="fas fa-arrow-left" />
          </div>
          <div className="teams-page__blue-team">{blueTeamElements}</div>
          <div className="teams-page__team-divider">vs</div>
          <div className="teams-page__red-team">{redTeamElements}</div>
          <div className={nextArrowClassNames} onClick={this.nextCombo}>
            <i className="fas fa-arrow-right" />
          </div>
        </div>
      </div>
    );
  }
}

export default Teams;
