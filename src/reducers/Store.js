import {rootReducer} from "./RootReducers";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";



export  const appStore = createStore(
  rootReducer,
  applyMiddleware(thunk)
);




