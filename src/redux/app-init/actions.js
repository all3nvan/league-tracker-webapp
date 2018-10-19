import { receiveGames, startFetchGames } from "redux/game/actions";
import {
  receiveGameParticipants,
  startFetchGameParticipants
} from "redux/game-participant/actions";
import leagueTrackerApi from "service/league-tracker-api/leagueTrackerApi";

export const fetchAppInitData = () => {
  return dispatch => {
    dispatch(startFetchGames());
    dispatch(startFetchGameParticipants());

    return leagueTrackerApi
      .getSinglePageAppInitializations()
      .then(response => {
        dispatch(receiveGames(response.data.games));
        dispatch(receiveGameParticipants(response.data.gameParticipants));
      })
      .catch(error => {
        // TODO: Show a toast or something
        console.log(error.response.status);
        console.log(error.response.data.message);
      });
  };
};
