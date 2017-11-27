import { call, put } from "redux-saga/effects";

// fetch the busses
const delayChange = () => {
  setTimeout(() => console.log(
    'hello'), 10000)
};

export function* viewportChange(action) {

  // call the api to get the busses list
  // console.log('sending viewport call');
  const viewport = yield call(delayChange);
  yield put({
    type: 'VIEWPORT_CHANGE',
    action: action
  });
}
