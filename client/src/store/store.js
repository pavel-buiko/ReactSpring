import { combineReducers, createStore } from "redux";
import { reducer, userReducer } from "./reducer";
const store = createStore(
  combineReducers({
    search: reducer,
    user: userReducer,
  })
);

export default store;
