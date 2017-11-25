import { call, put } from "redux-saga/effects";
import ApiUsers from "../api/users";

// fetch the user's list
export function* buttonFetchNumber(action) {
  // call the api to get the users list
  const users = yield call(ApiUsers.getList);

  // save the users in state
  yield put({
    type: 'USERS_LIST_SAVE',
    users: users,
  });
}
