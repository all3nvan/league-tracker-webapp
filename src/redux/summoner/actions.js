import {
  RECEIVE_SUMMONERS,
  START_FETCH_SUMMONERS
} from "redux/summoner/actionTypes";

export const startFetchSummoners = () => ({
  type: START_FETCH_SUMMONERS
});

export const receiveSummoners = summonersById => ({
  type: RECEIVE_SUMMONERS,
  summonersById
});
