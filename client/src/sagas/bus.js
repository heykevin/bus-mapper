import { call, put } from "redux-saga/effects";
import api from '../api/api.js';

// fetch the busses
export function* mapFetchBusses(action) {

  // call the api to get the busses list
  console.log('sending api call');
  const busses = yield call(api.getBus);
  yield put({
    type: 'BUS_LIST_SAVE',
    busses: busses
  });
}
