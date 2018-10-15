import { connect } from "react-redux";

import MatchHistory from "match-history/MatchHistory";

const mapStateToProps = state => ({
  gameIds: state.games.allIds,
  gamesById: state.games.byIds
});

export default connect(mapStateToProps)(MatchHistory);
