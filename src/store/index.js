import { combineReducers, legacy_createStore } from "redux";
import { CardReducer, VocabullaryReducer } from "./Reducers/VocabullaryReducer";
import { coordinateReducer } from "./Reducers/PageTwoReducer";
import { page1Reducer } from "./Reducers/PageOneReducer";
import { page3Reducer } from "./Reducers/PageThirdReducer";
import { page5Reducer } from "./Reducers/PageFiveReducer";
import { page6Reducer } from "./Reducers/PageSixReducer";
import { page7Reducer } from "./Reducers/PageSevenReducer";

const combineReducer = combineReducers({
  VocabullaryReducer,
  CardReducer,
  coordinateReducer,
  page1Reducer,
  page3Reducer,
  page5Reducer,
  page6Reducer,
  page7Reducer,
});

const store = legacy_createStore(combineReducer);
export default store;
