import produce from "immer";

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
  return produce(state, draft => {
    switch (action.type) {
      case RECEIVE_GAMES:
        const allIds = Object.keys(action.gamesById).map(gameIdString =>
          parseInt(gameIdString)
        );
        // TODO: Should this logic live somewhere else? At least test it...
        allIds.sort((id1, id2) => {
          return (
            new Date(action.gamesById[id2].createTime) -
            new Date(action.gamesById[id1].createTime)
          );
        });

        draft.isFetching = false;
        draft.allIds = allIds;
        draft.byIds = action.gamesById;
        break;

      case RECEIVE_GAME:
        draft.isFetching = false;
        draft.allIds.unshift(action.game.gameId);
        draft.byIds[action.game.gameId] = action.game;
        break;

      case START_FETCH_GAMES:
        draft.isFetching = true;
        break;

      default:
        break;
    }
  });
};
