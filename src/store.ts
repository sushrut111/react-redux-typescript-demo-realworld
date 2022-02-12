import reducer from "./reducer";
import { createStore, applyMiddleware } from 'redux';
import { promiseMiddleware, localStorageMiddleware } from './middlewares';
export default createStore(reducer, applyMiddleware(promiseMiddleware, localStorageMiddleware));