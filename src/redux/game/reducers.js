import { RECEIVE_GAMES, START_FETCH_GAMES } from "redux/game/actionTypes";

const initialState = {
  isFetching: false,
  allIds: [],
  byIds: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_GAMES:
      const allIds = Object.keys(action.gamesById);
      return Object.assign({}, state, {
        isFetching: false,
        allIds,
        byIds: action.gamesById
      });
    case START_FETCH_GAMES:
      return Object.assign({}, state, {
        isFetching: true
      });
    default:
      return state;
  }
};
