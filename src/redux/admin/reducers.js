import produce from "immer";

import { RECEIVE_TOKEN, START_LOGIN } from "redux/admin/actionTypes";

const initialState = {
  loginInProgress: false,
  isLoggedIn: false,
  jsonWebToken: ""
};

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case START_LOGIN:
        draft.loginInProgress = true;
        break;

      case RECEIVE_TOKEN:
        draft.loginInProgress = false;
        draft.isLoggedIn = true;
        draft.jsonWebToken = action.jsonWebToken;
        break;

      default:
        break;
    }
  });
};
