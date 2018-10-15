import reducers from "./reducers";

import {
  RECEIVE_GAME_PARTICIPANTS,
  START_FETCH_GAME_PARTICIPANTS
} from "redux/game-participant/actionTypes";

const participant = {
  gameId: 2513935315,
  summonerId: null,
  championId: 25,
  id: "5f623ee0-b7c6-438f-9689-459e15c049be",
  team: "BLUE",
  kills: 0,
  deaths: 6,
  assists: 7,
  win: false
};

test("RECEIVE_GAME_PARTICIPANTS sets isFetching to false and puts participants in store", () => {
  const prevState = {
    isFetching: true,
    byIds: {}
  };
  const nextState = reducers(prevState, {
    type: RECEIVE_GAME_PARTICIPANTS,
    participantsById: {
      "5f623ee0-b7c6-438f-9689-459e15c049be": participant
    }
  });
  expect(nextState).toEqual({
    isFetching: false,
    byIds: {
      "5f623ee0-b7c6-438f-9689-459e15c049be": participant
    }
  });
});

test("START_FETCH_GAME_PARTICIPANTS sets isFetching to true", () => {
  const prevState = {
    isFetching: false
  };
  const nextState = reducers(prevState, {
    type: START_FETCH_GAME_PARTICIPANTS
  });
  expect(nextState.isFetching).toEqual(true);
});
