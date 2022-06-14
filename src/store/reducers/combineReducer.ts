import { combineReducers } from "redux";
import tableReducer from "./tableSlice";

export const rootReducer = combineReducers({
  tableReducer,
});
