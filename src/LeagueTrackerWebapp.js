import React, { Component } from "react";

import "LeagueTrackerWebapp.scss";
import MatchHistory from "match-history/MatchHistory";
import Navbar from "nav/Navbar";

class LeagueTrackerWebapp extends Component {
  render() {
    return (
      <>
        <Navbar />
        <MatchHistory />
      </>
    );
  }
}

export default LeagueTrackerWebapp;
