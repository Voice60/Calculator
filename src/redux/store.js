import { combineReducers, createStore } from "redux";

let reducers = combineReducers({
  // calculator: calculatorReducer
})

let store = createStore(reducers)

export default store