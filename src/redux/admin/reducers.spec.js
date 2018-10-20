import reducers from "./reducers";
import { RECEIVE_TOKEN, START_LOGIN } from "redux/admin/actionTypes";

const jsonWebToken = "fake token";

test("START_LOGIN sets loginInProgress to true", () => {
  const prevState = {
    loginInProgress: false
  };
  const nextState = reducers(prevState, {
    type: START_LOGIN
  });
  expect(nextState).toEqual({
    loginInProgress: true
  });
});

test("RECEIVE_TOKEN sets state to logged in", () => {
  const prevState = {
    loginInProgress: true,
    isLoggedIn: false,
    jsonWebToken: ""
  };
  const nextState = reducers(prevState, {
    type: RECEIVE_TOKEN,
    jsonWebToken: jsonWebToken
  });
  expect(nextState).toEqual({
    loginInProgress: false,
    isLoggedIn: true,
    jsonWebToken: jsonWebToken
  });
});
