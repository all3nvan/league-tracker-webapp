import { connect } from "react-redux";

import NewMatchInput from "match-history/new-match-input/NewMatchInput";
import { createMatch } from "redux/match/actions";

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  onSubmit: matchId => {
    dispatch(createMatch(matchId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMatchInput);
