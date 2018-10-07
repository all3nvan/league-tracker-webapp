import React, { Component } from "react";

import "LeagueTrackerWebapp.scss";
import MatchHistoryContainer from "match-history/MatchHistoryContainer";
import Navbar from "nav/Navbar";

class LeagueTrackerWebapp extends Component {
  render() {
    return (
      <>
        <Navbar />
        <MatchHistoryContainer />
      </>
    );
  }
}

export default LeagueTrackerWebapp;
