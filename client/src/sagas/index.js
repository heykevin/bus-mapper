import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import {mapFetchBusses} from './bus.js';
import {viewportChange} from './map.js';

// main saga generators
export function* sagas() {
  yield[
    // Take latest fetch api call
    fork(takeLatest, 'MAP_FETCH_BUSSES', mapFetchBusses),
    fork(takeLatest, 'VIEWPORT_CHANGED', viewportChange)
  ];
}
