import reducers from "./reducers";

import {
  RECEIVE_SUMMONERS,
  START_FETCH_SUMMONERS
} from "redux/summoner/actionTypes";

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
  const summoner = {
    summonerId: 23472148,
    name: "all3nvan"
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
