import { combineReducers, legacy_createStore } from "redux";
import { CardReducer, VocabullaryReducer } from "./Reducers/VocabullaryReducer";
import { coordinateReducer } from "./Reducers/PageTwoReducer";

const combineReducer = combineReducers({
  VocabullaryReducer,
  CardReducer,
  coordinateReducer,
});

const store = legacy_createStore(combineReducer);
export default store;
