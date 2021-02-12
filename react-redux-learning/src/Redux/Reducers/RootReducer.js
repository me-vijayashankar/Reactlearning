import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import AuthReducer from "./AuthReducer";
const Rootreducer = combineReducers({
  count: CounterReducer,
  auth: AuthReducer,
});
export default Rootreducer;
