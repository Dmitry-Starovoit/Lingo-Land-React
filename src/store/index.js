import { combineReducers, legacy_createStore } from "redux";
import { CardReducer, VocabullaryReducer } from "./Reducers/VocabullaryReducer";
import { coordinateReducer } from "./Reducers/PageTwoReducer";
import { page1Task1Reducer } from "./Reducers/PageOneTaskOne";

const combineReducer = combineReducers({
  VocabullaryReducer,
  CardReducer,
  coordinateReducer,
  page1Task1Reducer,
});

const store = legacy_createStore(combineReducer);
export default store;
console.log(store.getState());
