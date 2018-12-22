import produce from "immer";

import {
  RECEIVE_RANKINGS,
  START_FETCH_RANKINGS
} from "redux/rankings/actionTypes";

const initialState = {
  isFetching: false,
  orderedRankings: []
};

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case START_FETCH_RANKINGS:
        draft.isFetching = true;
        break;

      case RECEIVE_RANKINGS:
        draft.isFetching = false;
        draft.orderedRankings = action.rankings;
        break;

      default:
        break;
    }
  });
};
