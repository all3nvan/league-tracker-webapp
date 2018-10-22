import produce from "immer";

import {
  FAILED_LOGIN,
  INIT_LOGIN_STATE,
  LOGOUT,
  RECEIVE_TOKEN,
  START_LOGIN
} from "redux/admin/actionTypes";
import { JSON_WEB_TOKEN } from "constants/localStorageKeys";

const initialState = {
  loginInProgress: false,
  isLoggedIn: false,
  loginFailed: false
};

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case INIT_LOGIN_STATE:
        // TODO: We should also check if the token is valid
        if (localStorage.getItem(JSON_WEB_TOKEN)) {
          draft.isLoggedIn = true;
        }
        break;

      case START_LOGIN:
        draft.loginInProgress = true;
        draft.loginFailed = false;
        break;

      case RECEIVE_TOKEN:
        localStorage.setItem(JSON_WEB_TOKEN, action.jsonWebToken);
        draft.loginInProgress = false;
        draft.isLoggedIn = true;
        draft.loginFailed = false;
        break;

      case FAILED_LOGIN:
        draft.loginInProgress = false;
        draft.loginFailed = true;
        break;

      case LOGOUT:
        localStorage.removeItem(JSON_WEB_TOKEN);
        Object.assign(draft, initialState);
        break;

      default:
        break;
    }
  });
};
