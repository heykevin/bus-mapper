import { combineReducers } from "redux";
import app from "./app.js";
import test from './test.js';
// main reducers
export const reducers = combineReducers({
  // your reducer here
  app: app,
  test: test
});
