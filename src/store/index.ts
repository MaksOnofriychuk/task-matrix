import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/combineReducer";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>;
