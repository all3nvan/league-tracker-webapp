import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "LeagueTrackerWebapp.scss";
import MatchHistoryContainer from "match-history/MatchHistoryContainer";
import MatchmakingContainer from "matchmaking/MatchmakingContainer";
import RankingsContainer from "rankings/RankingsContainer";
import SummonerContainer from "summoner/SummonerContainer";
import TeamsContainer from "teams/TeamsContainer";
import Navbar from "nav/Navbar";
import Footer from "footer/Footer";
import routes from "constants/routes";

class LeagueTrackerWebapp extends Component {
  componentDidMount = () => {
    this.props.initAppData();
    this.props.initLoginState();
  };

  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
          <div className="league-tracker-webapp__main-content">
            <Switch>
              <Route
                path={routes.MATCH_HISTORY}
                exact
                component={MatchHistoryContainer}
              />
              <Route
                path={routes.MATCHMAKING}
                component={MatchmakingContainer}
              />
              <Route path={routes.RANKINGS} component={RankingsContainer} />
              <Route
                path={routes.SUMMONERS + "/:summonerName"}
                component={SummonerContainer}
              />
              <Route path={routes.TEAMS} component={TeamsContainer} />
            </Switch>
          </div>
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default LeagueTrackerWebapp;
