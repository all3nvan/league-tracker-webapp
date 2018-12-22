import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "LeagueTrackerWebapp.scss";
import MatchHistoryContainer from "match-history/MatchHistoryContainer";
import RankingsContainer from "rankings/RankingsContainer";
import Navbar from "nav/Navbar";
import Footer from "footer/Footer";

class LeagueTrackerWebapp extends Component {
  componentDidMount = () => {
    this.props.initAppData();
    this.props.initLoginState();
  };

  render() {
    return (
      <Router>
        <>
          <Navbar />
          <div className="league-tracker-webapp__main-content">
            <Switch>
              <Route path="/" exact component={MatchHistoryContainer} />
              <Route path="/rankings" component={RankingsContainer} />
            </Switch>
          </div>
          <Footer />
        </>
      </Router>
    );
  }
}

export default LeagueTrackerWebapp;
