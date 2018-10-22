import reducers from "./reducers";
import {
  FAILED_LOGIN,
  LOGOUT,
  RECEIVE_TOKEN,
  START_LOGIN
} from "redux/admin/actionTypes";

const jsonWebToken = "fake token";

xit("INIT_LOGIN_STATE sets isLoggedIn to true when JWT is in local storage", () => {
  // TODO: Write test after figuring out how to mock localStorage
});

xit("INIT_LOGIN_STATE sets isLoggedIn to false when JWT is not in local storage", () => {
  // TODO: Write test after figuring out how to mock localStorage
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
