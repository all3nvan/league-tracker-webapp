import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const { summonerId } = ownProps;
  const summoner = state.summoners.byIds[summonerId];
  return {
    name: summoner ? summoner.name : ""
  };
};

const SummonerName = ({ name }) => <span>{name}</span>;

export default connect(mapStateToProps)(SummonerName);
