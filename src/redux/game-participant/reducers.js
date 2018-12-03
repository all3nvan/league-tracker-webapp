import produce from "immer";

import {
  RECEIVE_GAME_PARTICIPANT,
  RECEIVE_GAME_PARTICIPANTS,
  START_FETCH_GAME_PARTICIPANTS
} from "redux/game-participant/actionTypes";

const initialState = {
  isFetching: false,
  byIds: {}
};

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case RECEIVE_GAME_PARTICIPANTS:
        const newParticipants = action.participantsById;

        draft.isFetching = false;
        draft.byIds = {
          ...draft.byIds,
          ...newParticipants
        };
        break;

      case RECEIVE_GAME_PARTICIPANT:
        draft.byIds[action.participant.id] = action.participant;
        break;

      case START_FETCH_GAME_PARTICIPANTS:
        draft.isFetching = true;
        break;

      default:
        break;
    }
  });
};
