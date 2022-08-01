import { combineReducers } from "@reduxjs/toolkit";
import customer from "../features/customer/reducers";

const rootReducer = combineReducers({
  customer,
});
export default rootReducer;
