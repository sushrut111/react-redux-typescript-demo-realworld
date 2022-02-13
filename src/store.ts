import createCombinedReducerWithHistory from "./reducer";
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import RootSaga from "./saga";
import SingletonHistory from "./history";
import { routerMiddleware } from "connected-react-router";


export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const history = SingletonHistory.getHistoryObject();
    let store = createStore(
        createCombinedReducerWithHistory(history), 
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
            )
        );
    sagaMiddleware.run(RootSaga);
    return store;
}