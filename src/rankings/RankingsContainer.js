import { connect } from "react-redux";

import Rankings from "rankings/Rankings";
import { fetchRankings } from "redux/rankings/actions";

const mapStateToProps = state => ({
  orderedRankings: state.rankings.orderedRankings,
  summonersById: state.summoners.byIds
});
const mapDispatchToProps = dispatch => ({
  fetchRankings: () => {
    dispatch(fetchRankings());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rankings);
