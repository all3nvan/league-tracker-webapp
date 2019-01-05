import React, { Component } from "react";
import { Link } from "react-router-dom";

class SummonerLink extends Component {
  render() {
    const { summonerName } = this.props;

    return <Link to={`/summoners/${summonerName}`}>{summonerName}</Link>;
  }
}

export default SummonerLink;
