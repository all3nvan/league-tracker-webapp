import {
  RECEIVE_GAME_PARTICIPANTS,
  START_FETCH_GAME_PARTICIPANTS
} from "redux/game-participant/actionTypes";

const initialState = {
  isFetching: false,
  byIds: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_GAME_PARTICIPANTS:
      return Object.assign({}, state, {
        isFetching: false,
        byIds: action.participantsById
      });

    case START_FETCH_GAME_PARTICIPANTS:
      return Object.assign({}, state, {
        isFetching: true
      });

    default:
      return state;
  }
};
