import produce from "immer";

import {
  RECEIVE_SUMMONERS,
  START_FETCH_SUMMONERS
} from "redux/summoner/actionTypes";

const initialState = {
  isFetching: false,
  byIds: {}
};

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case START_FETCH_SUMMONERS:
        draft.isFetching = true;
        break;

      case RECEIVE_SUMMONERS:
        draft.isFetching = false;
        draft.byIds = action.summonersById;
        break;

      default:
        break;
    }
  });
};
