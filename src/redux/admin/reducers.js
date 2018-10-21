import produce from "immer";

import {
  FAILED_LOGIN,
  LOGOUT,
  RECEIVE_TOKEN,
  START_LOGIN
} from "redux/admin/actionTypes";

const initialState = {
  loginInProgress: false,
  isLoggedIn: false,
  jsonWebToken: "",
  loginFailed: false
};

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case START_LOGIN:
        draft.loginInProgress = true;
        draft.loginFailed = false;
        break;

      case RECEIVE_TOKEN:
        draft.loginInProgress = false;
        draft.isLoggedIn = true;
        draft.jsonWebToken = action.jsonWebToken;
        draft.loginFailed = false;
        break;

      case FAILED_LOGIN:
        draft.loginInProgress = false;
        draft.loginFailed = true;
        break;

      case LOGOUT:
        Object.assign(draft, initialState);
        break;

      default:
        break;
    }
  });
};
