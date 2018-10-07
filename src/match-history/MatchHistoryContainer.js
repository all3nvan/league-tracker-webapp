import { connect } from "react-redux";

import MatchHistory from "match-history/MatchHistory";

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(MatchHistory);
