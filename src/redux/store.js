import { combineReducers, createStore } from "redux";
import calculatorReducer from "./calculatorReducer";

let reducers = combineReducers({
  calc: calculatorReducer
})
let store = createStore(reducers)

export default store