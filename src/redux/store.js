import { createStoreHook } from "react-redux";
import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({});

export const store = createStoreHook(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
