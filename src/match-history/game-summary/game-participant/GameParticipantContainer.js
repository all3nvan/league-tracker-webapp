import { connect } from "react-redux";

import GameParticipant from "match-history/game-summary/game-participant/GameParticipant";
import { updateGameParticipant } from "redux/game-participant/actions";

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  summonerNameOnSubmit: (participant, summonerName) => {
    dispatch(updateGameParticipant(participant, summonerName));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameParticipant);
