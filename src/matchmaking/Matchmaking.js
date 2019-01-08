import React, { Component } from "react";
import { Redirect } from "react-router";
import Select from "react-select";
import queryString from "query-string";

import routes from "constants/routes";

import "./Matchmaking.scss";

class Matchmaking extends Component {
  state = {
    selectedSummonerIds: [],
    toTeamsPage: false
  };

  onSummonerSelect = (selectedSummoners, { action }) => {
    const selectedSummonerIds = selectedSummoners.map(
      summoner => summoner.summonerId
    );
    switch (action) {
      case "select-option":
      case "remove-value":
      case "clear":
        this.setState(state => ({
          ...state,
          selectedSummonerIds
        }));
        break;
      default:
    }
  };

  isSubmitButtonDisabled = () => {
    return this.state.selectedSummonerIds.length !== 10;
  };

  goToTeamsPage = () => {
    // TODO: validate that 10 players are selected
    this.setState(state => ({
      ...state,
      toTeamsPage: true
    }));
  };

  render() {
    const { summoners } = this.props;
    const { selectedSummonerIds, toTeamsPage } = this.state;

    if (toTeamsPage) {
      const summonerIdQueryString = queryString.stringify({
        summonerId: selectedSummonerIds
      });
      return (
        <Redirect
          to={{
            pathname: routes.TEAMS,
            search: summonerIdQueryString
          }}
        />
      );
    }

    return (
      <>
        <Select
          closeMenuOnSelect={false}
          getOptionLabel={option => option.name}
          getOptionValue={option => option.summonerId}
          hideSelectedOptions={true}
          isMulti
          onChange={this.onSummonerSelect}
          options={summoners}
          placeholder="Select ten players"
        />
        <button
          className="button button-primary generate-teams-button"
          disabled={this.isSubmitButtonDisabled()}
          onClick={this.goToTeamsPage}
        >
          Submit
        </button>
      </>
    );
  }
}

export default Matchmaking;
