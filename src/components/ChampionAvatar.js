import React, { Component } from "react";

import championIdToImageLinks from "constants/championIdToImageLinks";

class ChampionAvatar extends Component {
  render() {
    return <img src={championIdToImageLinks[this.props.championId]} alt="?" />;
  }
}

export default ChampionAvatar;
