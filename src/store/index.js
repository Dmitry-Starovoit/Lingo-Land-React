import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { CardReducer, VocabullaryReducer } from "./Reducers/VocabullaryReducer";
import { coordinateReducer } from "./Reducers/PageTwoReducer";
import { page1Reducer } from "./Reducers/PageOneReducer";
import { page3Reducer } from "./Reducers/PageThirdReducer";
import { page5Reducer } from "./Reducers/PageFiveReducer";
import { page6Reducer } from "./Reducers/PageSixReducer";
import { page7Reducer } from "./Reducers/PageSevenReducer";
import { page10Reducer } from "./Reducers/PageTenReducer";
import { page11Reducer } from "./Reducers/PageElevenReducer";
import { page12Reducer } from "./Reducers/PageTwelveReducer";
import { page15Reducer } from "./Reducers/PageFifteenReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const combineReducer = combineReducers({
  VocabullaryReducer,
  CardReducer,
  coordinateReducer,
  page1Reducer,
  page3Reducer,
  page5Reducer,
  page6Reducer,
  page7Reducer,
  page10Reducer,
  page11Reducer,
  page12Reducer,
  page15Reducer,
});
console.log(page1Reducer.task);

const store = legacy_createStore(
  combineReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
