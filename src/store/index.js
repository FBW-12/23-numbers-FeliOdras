import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../sagas";
import { reducer } from "../reducers";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composed = compose(
  applyMiddleware(sagaMiddleware),
  reduxDevTools
);

export const store = createStore(reducer, composed);

sagaMiddleware.run(watcherSaga);
