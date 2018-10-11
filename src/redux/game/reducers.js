import {
  RECEIVE_GAME,
  RECEIVE_GAMES,
  START_FETCH_GAMES
} from "redux/game/actionTypes";

const initialState = {
  isFetching: false,
  // TODO: do i need this?
  allIds: [],
  byIds: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_GAMES:
      const allIds = Object.keys(action.gamesById).map(gameIdString =>
        parseInt(gameIdString)
      );
      return Object.assign({}, state, {
        isFetching: false,
        allIds,
        byIds: action.gamesById
      });

    case RECEIVE_GAME:
      // TODO: deep clone state instead
      const newState = Object.assign({}, state);
      newState.isFetching = false;
      newState.allIds.push(action.game.gameId);
      newState.byIds[action.game.gameId] = action.game;
      return newState;

    case START_FETCH_GAMES:
      return Object.assign({}, state, {
        isFetching: true
      });

    default:
      return state;
  }
};
