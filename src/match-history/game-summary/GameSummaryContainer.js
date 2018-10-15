import { connect } from "react-redux";

import GameSummary from "match-history/game-summary/GameSummary";

const mapStateToProps = (state, ownProps) => ({
  gameParticipants: ownProps.game.gameParticipantIds
    .map(participantId => state.gameParticipants.byIds[participantId])
    .filter(participant => !!participant)
});

export default connect(mapStateToProps)(GameSummary);
