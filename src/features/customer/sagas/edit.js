import { all, put, select, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../reducers";

export function* watchEditCustomer() {
  yield takeLatest(actions.editCustomer.toString(), takeEditCustomer);
}

export function* takeEditCustomer(action) {
  console.log("Starting fetch request to API -- EDIT");
  const customerId = action.payload;

  try {
    const fields = yield select((state) => state.customer.form.fields);
    const customers = yield select((state) => state.customer.list.customers);

    const result = customers.map((customer) => {
      if (customer.id !== customerId) return customer;
      return fields;
    });

    // pretend call to API
    yield delay(500);

    yield put(actions.editCustomerResult(result));
  } catch (error) {
    yield put(actions.editCustomerError(error.toString()));
  }
}
