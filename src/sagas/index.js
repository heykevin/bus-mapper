import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import {test} from "./test.js";

// main saga generators
export function* sagas() {
  //yield [];
  fork(takeLatest, 'FETCH_NUMBER', buttonFetchNumber)
}
