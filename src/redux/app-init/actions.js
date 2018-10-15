import axios from "axios";

import { receiveGames, startFetchGames } from "redux/game/actions";
import {
  receiveGameParticipants,
  startFetchGameParticipants
} from "redux/game-participant/actions";

export const fetchAppInitData = () => {
  return dispatch => {
    dispatch(startFetchGames());
    dispatch(startFetchGameParticipants());

    return axios
      .get("http://localhost:4000/single_page_app_initializations")
      .then(response => {
        dispatch(receiveGames(response.data.games));
        dispatch(receiveGameParticipants(response.data.gameParticipants));
      });
    // TODO: catch error
  };
};
