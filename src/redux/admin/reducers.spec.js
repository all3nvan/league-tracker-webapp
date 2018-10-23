import reducers from "./reducers";
import {
  FAILED_LOGIN,
  LOGOUT,
  RECEIVE_LOGIN_STATE,
  RECEIVE_TOKEN,
  START_LOGIN
} from "redux/admin/actionTypes";

const jsonWebToken = "fake token";

test("RECEIVE_LOGIN_STATE sets isLoggedIn to true when receiving true", () => {
  const prevState = {
    isLoggedIn: false
  };
  const nextState = reducers(prevState, {
    type: RECEIVE_LOGIN_STATE,
    isLoggedIn: true
  });
  expect(nextState).toEqual({
    isLoggedIn: true
  });
});

test("RECEIVE_LOGIN_STATE sets isLoggedIn to false when receiving false", () => {
  const prevState = {
    isLoggedIn: true
  };
  const nextState = reducers(prevState, {
    type: RECEIVE_LOGIN_STATE,
    isLoggedIn: false
  });
  expect(nextState).toEqual({
    isLoggedIn: false
  });
});

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
    loginFailed: true
  };
  const nextState = reducers(prevState, {
    type: RECEIVE_TOKEN,
    jsonWebToken: jsonWebToken
  });
  expect(nextState).toEqual({
    loginInProgress: false,
    isLoggedIn: true,
    loginFailed: false
  });
  // TODO: Figure out how to get this mock to work
  // expect(localStorage.setItem).toBeCalledWith("jsonWebToken", jsonWebToken);
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

test("LOGOUT resets state to initial state", () => {
  const prevState = {
    loginInProgress: false,
    isLoggedIn: true,
    loginFailed: false
  };
  const nextState = reducers(prevState, {
    type: LOGOUT
  });
  expect(nextState).toEqual({
    loginInProgress: false,
    isLoggedIn: false,
    loginFailed: false
  });
});
