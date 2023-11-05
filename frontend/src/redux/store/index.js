import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import sidebar from "../reducers/sidebar";
import skills from "../reducers/skills";
import rootSagas from "../sagas/rootSagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  sidebar,
  skills,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSagas);

export default store;
