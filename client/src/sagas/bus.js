import { call, put } from "redux-saga/effects";
import api from '../api/api.js';

// fetch the busses
export function* mapFetchBusses(action) {
  // console.log('Fetch bus');
  // call the api to get the busses list
  const busses = yield call(api.getBus);
  // console.log(busses);
  yield put({
    type: 'BUS_LIST_SAVE',
    busses: busses
  });
}
