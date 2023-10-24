import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import sidebar from "../reducers/sidebar";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  sidebar,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export default store;
