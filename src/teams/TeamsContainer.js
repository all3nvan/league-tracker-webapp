import { connect } from "react-redux";

import { generateTeams } from "redux/matchmaking/actions";
import TeamsDataProvider from "teams/TeamsDataProvider";

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  generateTeams: summonerIds => {
    return dispatch(generateTeams(summonerIds));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsDataProvider);
