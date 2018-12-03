import reducers from "./reducers";

import {
  RECEIVE_SUMMONER,
  RECEIVE_SUMMONERS,
  START_FETCH_SUMMONERS
} from "redux/summoner/actionTypes";

const summoner = {
  summonerId: 23472148,
  name: "all3nvan"
};

test("START_FETCH_SUMMONERS sets isFetching to true", () => {
  const prevState = {
    isFetching: false
  };
  const nextState = reducers(prevState, {
    type: START_FETCH_SUMMONERS
  });
  expect(nextState.isFetching).toEqual(true);
});

test("RECEIVE_SUMMONERS sets isFetching to false and puts summoners in store", () => {
  const prevState = {
    isFetching: true,
    byIds: {}
  };
  const nextState = reducers(prevState, {
    type: RECEIVE_SUMMONERS,
    summonersById: {
      "23472148": summoner
    }
  });
  expect(nextState).toEqual({
    isFetching: false,
    byIds: {
      "23472148": summoner
    }
  });
});

test("RECEIVE_SUMMONER puts summoner in store", () => {
  const prevState = {
    byIds: {}
  };
  const nextState = reducers(prevState, {
    type: RECEIVE_SUMMONER,
    summoner
  });
  expect(nextState.byIds).toEqual({
    "23472148": summoner
  });
});
