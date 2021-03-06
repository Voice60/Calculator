import { combineReducers, createStore } from "redux";
import calculatorReducer from "./calculatorReducer";

let reducers = combineReducers({
  calc: calculatorReducer
})
let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store