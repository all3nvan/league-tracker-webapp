import { connect } from "react-redux";

import Summoner from "summoner/Summoner";

const mapStateToProps = (state, ownProps) => {
  const summoner = Object.values(state.summoners.byIds).find(
    summoner => summoner.name === ownProps.match.params.summonerName
  );

  if (!summoner) {
    return {};
  }

  const gameParticipants = Object.values(state.gameParticipants.byIds).filter(
    participant => participant.summonerId === summoner.summonerId
  );

  return { summoner, gameParticipants };
};

export default connect(mapStateToProps)(Summoner);
