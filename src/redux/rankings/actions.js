import leagueTrackerApi from "service/league-tracker-api/leagueTrackerApi";
import {
  RECEIVE_RANKINGS,
  START_FETCH_RANKINGS
} from "redux/rankings/actionTypes";

export const fetchRankings = () => {
  return dispatch => {
    dispatch(startFetchRankings());

    leagueTrackerApi
      .getRatings()
      .then(response => {
        dispatch(receiveRankings(response.data.ratings));
      })
      .catch(error => {
        // TODO: Show a toast or something
        console.log(error.response);
      });
  };
};

const startFetchRankings = () => ({
  type: START_FETCH_RANKINGS
});

const receiveRankings = rankings => ({
  type: RECEIVE_RANKINGS,
  rankings
});
