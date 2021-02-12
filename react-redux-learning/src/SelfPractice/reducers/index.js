import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import Countreducer from "./Countreducer";

export default combineReducers({
  count: Countreducer,
  auth: AuthReducer,
});
