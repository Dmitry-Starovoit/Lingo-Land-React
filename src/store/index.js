import { combineReducers, legacy_createStore } from "redux";
import { CardReducer, VocabullaryReducer } from "./Reducers/VocabullaryReducer";
import { PageTwoLionKing } from "./Reducers/PageTwoLionKing";

const combineReducer = combineReducers({
  VocabullaryReducer,
  CardReducer,
  PageTwoLionKing,
});

const store = legacy_createStore(combineReducer);
export default store;
