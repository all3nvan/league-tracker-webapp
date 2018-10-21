import reducers from "./reducers";
import {
  FAILED_LOGIN,
  RECEIVE_TOKEN,
  START_LOGIN
} from "redux/admin/actionTypes";

const jsonWebToken = "fake token";

test("START_LOGIN sets loginInProgress to true and loginFailed to false", () => {
  const prevState = {
    loginInProgress: false,
    loginFailed: true
  };
  const nextState = reducers(prevState, {
    type: START_LOGIN
  });
  expect(nextState).toEqual({
    loginInProgress: true,
    loginFailed: false
  });
});

test("RECEIVE_TOKEN sets state to logged in", () => {
  const prevState = {
    loginInProgress: true,
    isLoggedIn: false,
    jsonWebToken: "",
    loginFailed: true
  };
  const nextState = reducers(prevState, {
    type: RECEIVE_TOKEN,
    jsonWebToken: jsonWebToken
  });
  expect(nextState).toEqual({
    loginInProgress: false,
    isLoggedIn: true,
    jsonWebToken: jsonWebToken,
    loginFailed: false
  });
});

test("FAILED_LOGIN sets loginInProgress to false and failedLogin to true", () => {
  const prevState = {
    loginInProgress: true,
    loginFailed: false
  };
  const nextState = reducers(prevState, {
    type: FAILED_LOGIN
  });
  expect(nextState).toEqual({
    loginInProgress: false,
    loginFailed: true
  });
});
