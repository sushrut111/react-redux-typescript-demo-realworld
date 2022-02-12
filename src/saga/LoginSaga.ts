import { call, put, takeLatest } from "redux-saga/effects";
import { NetworkCalledFailedAction, SuccessnNotification } from "../actions/common";
import { Auth, setToken } from "../apis/apis";
import { LOCAL_STORAGE_TOKEN_KEY } from "../constants";
import { APP_LOADED, LOGIN, NETWORK_CALL_ERRORED, REQUEST_LOGIN, REQUEST_LOGOUT, REQUEST_USER, SUCCESS_NOTIFICATION } from "../constants/actionTypes";

function* Login(action: any): Generator<any> {
    try {
        const resp: any = yield call(Auth.login, action.payload.email, action.payload.password);
        window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, resp.data.user.token);
        yield put({type: LOGIN, payload: resp.data});
        yield put(SuccessnNotification("Logged in!"))
    } catch (e: any) {
        yield put(NetworkCalledFailedAction(e.response.data))
    }   
}

function* GetUser(action: any): Generator<any> {
    try {
        const resp: any = yield call(Auth.current);
        yield put({type: APP_LOADED, payload: resp.data});
    } catch (e: any) {
        // yield put({type: NETWORK_CALL_ERRORED, message: e.response.data})
    }   
}

function* Logout(action: any): Generator<any> {
    setToken(null);
    window.localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    yield put(SuccessnNotification("Logged out!"));
}

export function* LoginSaga() {
    yield takeLatest(REQUEST_LOGIN, Login);
    yield takeLatest(REQUEST_USER, GetUser);
    yield takeLatest(REQUEST_LOGOUT, Logout);
}

