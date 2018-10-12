import { connect } from "react-redux";

import MatchHistory from "match-history/MatchHistory";

const mapStateToProps = state => ({
  games: state.games
});

export default connect(mapStateToProps)(MatchHistory);
