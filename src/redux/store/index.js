import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import visability from "../reducers/visability";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  visability,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export default store;
