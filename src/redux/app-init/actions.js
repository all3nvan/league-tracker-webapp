import axios from "axios";

import { receiveGames, startFetchGames } from "redux/game/actions";

export const fetchAppInitData = () => {
  return dispatch => {
    dispatch(startFetchGames());

    return axios
      .get("http://localhost:4000/single_page_app_initializations")
      .then(response => {
        dispatch(receiveGames(response.data.games));
      });
    // TODO: catch error
  };
};
