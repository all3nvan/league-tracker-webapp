import reducers from "redux/game/reducers";

import {
  RECEIVE_GAME,
  RECEIVE_GAMES,
  START_FETCH_GAMES
} from "redux/game/actionTypes";

const game1 = {
  gameId: 2513935315,
  gameParticipants: [
    {
      summonerId: null,
      championId: 25,
      id: "f80848bf-f843-4639-af66-b284058329f9",
      team: "BLUE",
      kills: 0,
      deaths: 6,
      assists: 7,
      win: false
    }
  ]
};
const game2 = {
  gameId: 2513935040,
  gameParticipants: [
    {
      summonerId: null,
      championId: 266,
      id: "ad4a55a8-e39e-4265-8ece-565150b455d0",
      team: "BLUE",
      kills: 4,
      deaths: 6,
      assists: 4,
      win: true
    }
  ]
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

test("RECEIVE_GAME sets isFetching to false and adds new game to store", () => {
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
    allIds: [2513935315, 2513935040],
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
