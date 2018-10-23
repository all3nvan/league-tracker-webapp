import {
  FAILED_LOGIN,
  LOGOUT,
  RECEIVE_LOGIN_STATE,
  RECEIVE_TOKEN,
  START_LOGIN
} from "redux/admin/actionTypes";
import leagueTrackerApi from "service/league-tracker-api/leagueTrackerApi";
import { MIN_LOADING_TIME } from "constants/appConstants";

export const login = (username, password) => {
  return dispatch => {
    dispatch(startLogin());

    // TODO: Is there a way to put this timeout in the AdminLogin component? It's a UI concern
    // and probably shouldn't be done here.
    return new Promise(resolve => {
      setTimeout(resolve, MIN_LOADING_TIME);
    })
      .then(() => {
        return leagueTrackerApi.createAdminToken(username, password);
      })
      .then(response => {
        dispatch(receiveToken(response.data.jwt));
      })
      .catch(error => {
        dispatch(failedLogin());
        throw error;
      });
  };
};

export const logout = () => ({
  type: LOGOUT
});

export const fetchLoginState = () => {
  return dispatch => {
    leagueTrackerApi
      .getLoginState()
      .then(isLoggedIn => dispatch(receiveLoginState(isLoggedIn)));
  };
};

export const receiveLoginState = isLoggedIn => ({
  type: RECEIVE_LOGIN_STATE,
  isLoggedIn
});

export const startLogin = () => ({
  type: START_LOGIN
});

export const receiveToken = jsonWebToken => ({
  type: RECEIVE_TOKEN,
  jsonWebToken
});

export const failedLogin = () => ({
  type: FAILED_LOGIN
});
