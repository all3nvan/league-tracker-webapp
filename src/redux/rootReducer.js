import { combineReducers } from "redux";

const test = (state = { testKey: "testValue" }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ test });
