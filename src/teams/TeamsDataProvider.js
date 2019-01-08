import React, { Component } from "react";
import queryString from "query-string";

import Teams from "teams/Teams";

class TeamsDataProvider extends Component {
  state = {
    teamCombinations: [],
    errorMessage: ""
  };

  componentDidMount = () => {
    const { generateTeams, location } = this.props;
    const queryParams = queryString.parse(location.search);
    const summonerIds = queryParams.summonerId;

    if (summonerIds && summonerIds.length === 10) {
      generateTeams(summonerIds).then(teamCombinations => {
        this.setState({
          teamCombinations,
          errorMessage: ""
        });
      });
    } else {
      this.setState(state => ({
        ...state,
        // TODO: Render this
        errorMessage: "Ten summoner ids required."
      }));
    }
  };

  render() {
    const { teamCombinations } = this.state;

    if (teamCombinations.length === 0) {
      return null;
    }

    return <Teams teamCombinations={teamCombinations} />;
  }
}

export default TeamsDataProvider;
