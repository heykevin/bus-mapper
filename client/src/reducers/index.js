import { combineReducers } from "redux";
import app from "./app.js";
import map from './map.js';
// main reducer
export const reducers = combineReducers({
  // your reducer here
  app: app,
  map: map
});
