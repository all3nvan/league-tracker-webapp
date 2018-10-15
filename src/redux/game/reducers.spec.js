import reducers from "./reducers";

import {
  RECEIVE_GAME,
  RECEIVE_GAMES,
  START_FETCH_GAMES
} from "redux/game/actionTypes";

const game1 = {
  gameId: 2513935315,
  gameParticipantIds: [
    "bed4ee0c-1318-489e-aca0-21e47220ed4b",
    "c066470c-a556-41ed-9d5d-3803ef78f953"
  ]
};
const game2 = {
  gameId: 2513935040,
  gameParticipantIds: ["ad4a55a8-e39e-4265-8ece-565150b455d0"]
};

test("RECEIVE_GAMES sets isFetching to false and puts games in store", () => {
  const prevState = {
    isFetching: true,
    allIds: [],
    byIds: {}
  };
  const nextState = reducers(prevState, {
    type: RECEIVE_GAMES,
    gamesById: {
      "2513935315": game1
    }
  });
  expect(nextState).toEqual({
    isFetching: false,
    allIds: [2513935315],
    byIds: {
      "2513935315": game1
    }
  });
});

test("RECEIVE_GAME sets isFetching to false, adds new game to store, and adds new gameId to beginning of list", () => {
  const prevState = {
    isFetching: true,
    allIds: [2513935315],
    byIds: {
      "2513935315": game1
    }
  };
  const nextState = reducers(prevState, {
    type: RECEIVE_GAME,
    game: game2
  });
  expect(nextState).toEqual({
    isFetching: false,
    allIds: [2513935040, 2513935315],
    byIds: {
      "2513935315": game1,
      "2513935040": game2
    }
  });
});

test("START_FETCH_GAMES sets isFetching to true", () => {
  const prevState = {
    isFetching: false
  };
  const nextState = reducers(prevState, {
    type: START_FETCH_GAMES
  });
  expect(nextState.isFetching).toEqual(true);
});
