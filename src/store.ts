import reducer from "./reducer";
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import RootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);