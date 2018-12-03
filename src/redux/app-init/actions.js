import { receiveGames, startFetchGames } from "redux/game/actions";
import {
  receiveGameParticipants,
  startFetchGameParticipants
} from "redux/game-participant/actions";
import { receiveSummoners, startFetchSummoners } from "redux/summoner/actions";
import leagueTrackerApi from "service/league-tracker-api/leagueTrackerApi";

export const fetchAppInitData = () => {
  return dispatch => {
    dispatch(startFetchGames());
    dispatch(startFetchGameParticipants());
    dispatch(startFetchSummoners());

    return leagueTrackerApi
      .getSinglePageAppInitializations()
      .then(response => {
        dispatch(receiveGames(response.data.games));
        dispatch(receiveGameParticipants(response.data.gameParticipants));
        dispatch(receiveSummoners(response.data.summoners));
      })
      .catch(error => {
        // TODO: Show a toast or something
        console.log(error.response.status);
        console.log(error.response.data.message);
      });
  };
};
