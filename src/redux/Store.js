import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { userLoginReducer } from "./reducers/LoginReducer";
import { loginOTPVerificationReducer } from "./reducers/OtpVerificationReducer";

const reducers = combineReducers({
  userLoginReducer,
  loginOTPVerificationReducer,
});
const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});
export default store;
