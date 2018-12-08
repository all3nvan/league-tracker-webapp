import React, { Component } from "react";

import "LeagueTrackerWebapp.scss";
import MatchHistoryContainer from "match-history/MatchHistoryContainer";
import Navbar from "nav/Navbar";
import Footer from "footer/Footer";

class LeagueTrackerWebapp extends Component {
  componentDidMount = () => {
    this.props.initAppData();
    this.props.initLoginState();
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="league-tracker-webapp__main-content">
          <MatchHistoryContainer />
        </div>
        <Footer />
      </>
    );
  }
}

export default LeagueTrackerWebapp;
