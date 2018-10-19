import { RECEIVE_TOKEN, START_LOGIN } from "redux/admin/actionTypes";
import leagueTrackerApi from "service/league-tracker-api/leagueTrackerApi";

export const login = (username, password) => {
  return dispatch => {
    dispatch(startLogin());

    return leagueTrackerApi
      .createAdminToken(username, password)
      .then(response => {
        dispatch(receiveToken(response.data.jwt));
      })
      .catch(error => {
        // TODO: do something with this error
        console.log(error.response.status);
        console.log(error.response.data.message);
      });
  };
};

export const startLogin = () => ({
  type: START_LOGIN
});

export const receiveToken = jsonWebToken => ({
  type: RECEIVE_TOKEN,
  jsonWebToken
});
