import { combineReducers } from "redux";
import map from './map.js';
import bus from './bus.js';

// main reducer
export const reducers = combineReducers({
  map: map,
  bus: bus
});
