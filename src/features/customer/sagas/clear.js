import { all, put, select, delay, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";
import { clear } from "../../../utilities/async_storage";

export function* watchClearCustomers() {
  yield takeLatest(actions.clearCustomers.toString(), takeClearCustomers);
}

export function* takeClearCustomers() {
  try {
    const result = yield clear();

    yield delay(1500);

    yield put(actions.clearResult());
  } catch (error) {
    yield put(actions.clearResult([]));
  }
}
