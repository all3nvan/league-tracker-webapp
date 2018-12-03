import reducers from "./reducers";

import {
  RECEIVE_GAME_PARTICIPANT,
  RECEIVE_GAME_PARTICIPANTS,
  START_FETCH_GAME_PARTICIPANTS
} from "redux/game-participant/actionTypes";

const participant1 = {
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
const participant2 = {
  gameId: 2513935315,
  summonerId: null,
  championId: 202,
  id: "5cb13d84-fa9a-4df5-b62f-90aeccfdd156",
  team: "BLUE",
  kills: 1,
  deaths: 3,
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
      "5f623ee0-b7c6-438f-9689-459e15c049be": participant1
    }
  });
  expect(nextState).toEqual({
    isFetching: false,
    byIds: {
      "5f623ee0-b7c6-438f-9689-459e15c049be": participant1
    }
  });
});

test("RECEIVE_GAME_PARTICIPANTS merges new participants with existing participants", () => {
  const prevState = {
    byIds: {
      "5f623ee0-b7c6-438f-9689-459e15c049be": participant1
    }
  };
  const nextState = reducers(prevState, {
    type: RECEIVE_GAME_PARTICIPANTS,
    participantsById: {
      "5cb13d84-fa9a-4df5-b62f-90aeccfdd156": participant2
    }
  });
  expect(nextState.byIds).toEqual({
    "5f623ee0-b7c6-438f-9689-459e15c049be": participant1,
    "5cb13d84-fa9a-4df5-b62f-90aeccfdd156": participant2
  });
});

test("RECEIVE_GAME_PARTICIPANT puts participant in store", () => {
  const prevState = {
    byIds: {
      asdf: {
        id: "asdf",
        summonerId: null
      }
    }
  };
  const nextState = reducers(prevState, {
    type: RECEIVE_GAME_PARTICIPANT,
    participant: {
      id: "asdf",
      summonerId: 123
    }
  });
  expect(nextState.byIds["asdf"]).toEqual({
    id: "asdf",
    summonerId: 123
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
