import { connect } from "react-redux";

import Matchmaking from "matchmaking/Matchmaking";

const mapStateToProps = state => {
  const summoners = Object.values(state.summoners.byIds);
  return {
    summoners: summoners
      .concat()
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
  };
};
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matchmaking);
