import { connect } from "react-redux";

import NewGameInput from "match-history/new-game-input/NewGameInput";
import { createGame } from "redux/game/actions";

const mapStateToProps = state => ({
  isLoggedIn: state.admin.isLoggedIn
});
const mapDispatchToProps = dispatch => ({
  onSubmit: gameId => {
    dispatch(createGame(gameId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewGameInput);
